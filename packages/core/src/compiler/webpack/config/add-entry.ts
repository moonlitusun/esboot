import { getExportProps } from '@umijs/ast';
import { readFileSync } from 'fs';
import { basename, join } from 'path';
import glob from 'glob';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from '@@/helpers/config';

import { ApplyOpts } from './types';

const {
  rootPath,
  contentPath,
  contentPattern,
  platform,
  pageType,
  template: defaultTpl,
} = config;

const contentRootPath = `./platforms/${platform}/_${pageType}`;

interface EntryFileExportProps {
  title?: string;
  template?: string;
  name?: string;
}

export const addEntry = async (applyOpts: ApplyOpts) => {
  const { config } = applyOpts;
  const content_path = join(contentRootPath, contentPath);
  const files = glob.sync(`/**/${contentPattern}.entry.tsx`, {
    root: join(rootPath, content_path),
  });

  files.forEach((file) => {
    const { title, template, name } =
      (getExportProps(readFileSync(file, 'utf-8')) as EntryFileExportProps) ||
      {};
    const filename = basename(file, '.entry.tsx');
    const chunkName = name || filename;
    const ensureTitle = title || filename || 'ESboot APP';
    const ensureTpl = template || defaultTpl || 'template/index.html';

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
