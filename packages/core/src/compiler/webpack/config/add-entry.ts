import { getExportProps } from '@umijs/ast';
import { readFileSync } from 'fs';
import { basename, join } from 'path';
import { glob } from 'glob';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import esbootConfig from '@@/config';

import { ApplyOpts } from './types';

interface EntryFileExportProps {
  title?: string;
  template?: string;
  name?: string;
}

export const addEntry = async (applyOpts: ApplyOpts) => {
  const { rootPath, platform, pageType, configRootPathOfPlatfrom } =
    esbootConfig.extralConfig;

  const { ESBOOT_CONTENT_PATH = '', ESBOOT_CONTENT_PATTERN = '*' } =
    process.env;

  const contentRootPath = `./platforms/${platform}/_${pageType}`;

  const {
    config,
    isDev,
    userOpts: { port },
  } = applyOpts;
  const content_path = join(contentRootPath, ESBOOT_CONTENT_PATH);
  const files = await glob(`/**/${ESBOOT_CONTENT_PATTERN}.entry.tsx`, {
    root: join(rootPath, content_path),
  });

  files.forEach((file: string, index) => {
    const { title, template, name } =
      (getExportProps(readFileSync(file, 'utf-8')) as EntryFileExportProps) ||
      {};

    const filename = basename(file, '.entry.tsx');
    const chunkName = name || filename;
    const ensureTitle = title || filename || 'ESboot APP';
    const ensureTpl = join(
      configRootPathOfPlatfrom,
      `template/${template || 'index'}.html`
    );

    // if (isDev) {
    //   console.log(`Page${index + 1}`, `http://localhost:${port}/${chunkName}.html`)
    // }

    config.entry[chunkName] = file;

    config.plugins.push(
      new HtmlWebpackPlugin({
        inject: true,
        chunks: [chunkName],
        filename: `${chunkName}.html`,
        title: ensureTitle,
        template: ensureTpl,
        hash: true,
      })
    );
  });
};
