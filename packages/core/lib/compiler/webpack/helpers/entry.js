const { getExportProps } = require('@umijs/ast');
const { readFileSync } = require('fs');
const { resolve, basename, join } = require('path');
const glob = require('glob');
const {
  ESBOOT_PLATFORM, ESBOOT_PAGE_TYPE, ESBOOT_TEMPLATE, ESBOOT_CONFIG_PATH,
  ESBOOT_CONTENT_PATH = './', ESBOOT_CONTENT_PATTERN,
} = require(resolve(__dirname, '../../../helpers/config'));

const userConfig = require(ESBOOT_CONFIG_PATH);
const rootPath = resolve(process.cwd(), './src');
const contentRootPath = `./platforms/${ESBOOT_PLATFORM}/_${ESBOOT_PAGE_TYPE}`;

function getEntryList() {
  const { html } = userConfig;
  if (html) return html;
  const content_path = join(contentRootPath, ESBOOT_CONTENT_PATH);
  const list = [];
  const files = glob.sync(`/**/${ESBOOT_CONTENT_PATTERN}.entry.tsx`, {
    root: join(rootPath, content_path),
  });

  files.forEach((file, index) => {
    const { title, template, name } = getExportProps(readFileSync(file, 'utf-8')) || {};
    const filename = basename(file, '.entry.tsx');

    const entryInfo = {
      name: name || filename,
      title: title || filename,
      entry: file,
    };

    entryInfo.template = template || ESBOOT_TEMPLATE;
    list.push(entryInfo);
  });

  return list;
}

module.exports = getEntryList;
