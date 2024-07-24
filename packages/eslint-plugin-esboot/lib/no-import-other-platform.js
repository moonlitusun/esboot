const path = require('path');
const { resolve } = require('./resolver-alias');

function extractPlatformAndType(filePath) {
  console.log(filePath, '<-- filePath');
  const regex = /src\/platforms\/([^\/]+)\/(?:_([^\/]+)\/)?/;
  const match = filePath.match(regex);
  if (match) {
    return {
      platform: match[1],
      pageType: match[2],
    };
  }
  return null;
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow imports from other platforms',
      category: 'Best Practices',
      recommended: false,
    },
    messages: {
      noImportOtherPlatforms:
        'Importing from other platforms directory is not allowed.',
      noImportLowLevelPlatforms: 'Disallow importing low-level modules',
    },
    schema: [],
  },
  create(context) {
    const currentFilename = context.getFilename();
    const settings = context.settings['import/resolver'].alias;
    const aliasMap = new Map(settings.map);

    function resolveImportPath(importPath) {
      const resolvedPath = resolve(importPath, currentFilename, {
        map: Array.from(aliasMap.entries()),
        extensions: settings.extensions,
      });

      if (resolvedPath.found) {
        return resolvedPath.path;
      }

      return path.resolve(path.dirname(currentFilename), importPath);
    }

    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;

        const resolvedPath = resolveImportPath(importPath);

        const currInfo = extractPlatformAndType(currentFilename);
        const importInfo = extractPlatformAndType(resolvedPath);

        // 引入文件不在platform中
        if (!importInfo) return;

        const { platform: currPlatform, pageType: currPageType } =
          currInfo || {};
        const { platform: importPlatform, pageType: importPageType } =
          importInfo || {};

        const report = () => {
          context.report({
            node,
            messageId: 'noImportOtherPlatforms',
          });
        };

        const reportLowestModule = () => {
          context.report({
            node,
            messageId: 'noImportLowLevelPlatforms',
          });
        };

        if (!currPlatform && !importPlatform) return;
        console.log(currInfo, importInfo, '<--=== ');

        // 平台之外引入平台内文件
        if (!currPlatform && importPlatform) {
          reportLowestModule();
          return;
        }

        // platform之中引入pageType的内容
        if (currPlatform && !currPageType && importPageType) {
          reportLowestModule();
          return;
        }

        if (currPlatform !== importPlatform) {
          report();
          return;
        }

        if (currPlatform && importPlatform) {
          if (!importPageType && currPageType) return;

          if (importPageType !== currPageType) {
            report();
            return;
          }
        }
      },
    };
  },
};
