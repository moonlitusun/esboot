import path from 'path';

const getEntryList = require(path.resolve(__dirname, "@/compiler/webpack/helpers/entry"));

const createEntry = () => entryList.reduce((prev, curr) => {
  prev[curr.name] = curr.entry;
  return prev;
}, {});