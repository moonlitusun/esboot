import { resolve } from 'path';
import esbootConfig from '@@/config';

interface AnyObject {
  [key: string]: any;
}

function langPickFn(obj: AnyObject, paths: string[]): AnyObject {
  const result: AnyObject = {};

  paths.forEach((path) => {
    const keys = path.split('.');
    let current = obj;
    let temp = result;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        if (current && current[key] !== undefined) {
          temp[key] = current[key];
        }
      } else {
        if (!temp[key]) {
          temp[key] = {};
        }
        temp = temp[key];
        current = current ? current[key] : undefined;
      }
    });
  });

  return result;
}

export default function (this: any, source: string): string {
  let jsonData = JSON.parse(source);
  const { rootPath } = esbootConfig.compileTimeConfig;
  const module = this._module;

  if (resolve(rootPath, 'lang') === module.context) {
    try {
      const chunk = module.resourceResolveData.context.issuer;
      const { langJsonPicker } = esbootConfig.compileTimeConfig._entry[chunk] || {};

      if (langJsonPicker) {
        jsonData = langPickFn(jsonData, langJsonPicker);
      }
    } catch (err) {}
  }

  return `export default ${JSON.stringify(jsonData)}`;
}
