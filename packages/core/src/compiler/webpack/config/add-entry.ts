import { getExportProps } from '@umijs/ast';
import { readFileSync } from 'fs';
import { basename, join } from 'path';
import glob from 'glob';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import appConfig from '@@/helpers/app-config';

import { ApplyOpts } from './types';

interface EntryFileExportProps {
  title?: string;
  template?: string;
  name?: string;
}

export const addEntry = async (applyOpts: ApplyOpts) => {
  const {
    rootPath,
    platform,
    pageType,
    configRootPathOfPlatfrom,
  } = appConfig;

  const {
    ESBOOT_CONTENT_PATH = '',
    ESBOOT_CONTENT_PATTERN = '*',
  } = process.env;

  const contentRootPath = `./platforms/${platform}/_${pageType}`;

  const { config } = applyOpts;
  const content_path = join(contentRootPath, ESBOOT_CONTENT_PATH);
  const files = glob.sync(`/**/${ESBOOT_CONTENT_PATTERN}.entry.tsx`, {
    root: join(rootPath, content_path),
  });

  files.forEach((file: string) => {
    const { title, template, name } =
      (getExportProps(readFileSync(file, 'utf-8')) as EntryFileExportProps) ||
      {};
    const filename = basename(file, '.entry.tsx');
    const chunkName = name || filename;
    const ensureTitle = title || filename || 'ESboot APP';
    const ensureTpl = join(configRootPathOfPlatfrom, `template/${template || 'index'}.html`);

    config.entry[chunkName] = file;

    config.plugins.push(new HtmlWebpackPlugin({
      inject: true,
      chunks: [chunkName],
      filename: `${chunkName}.html`,
      title: ensureTitle,
      template: ensureTpl,
      hash: true,
    }));
  });
};
