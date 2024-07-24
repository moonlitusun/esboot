const path = require('path');
const { resolve } = require('./resolver-alias');

function extractPlatformAndType(filePath) {
  const regex = /src\/platforms\/(mobile|pc)\/(?:_(browser|native)\/)?/;
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
      noImportOtherPlatforms: 'Disallow importing other platforms',
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

        // console.log(importPath, importInfo, '<-- import info');
        // console.log(resolvedPath, currInfo, '<-- curr ino');
        // When import file is not platfrom's file
        if (!importInfo) return;

        const { platform: currPlatform, pageType: currPageType } =
          currInfo || {};
        const { platform: importPlatform, pageType: importPageType } =
          importInfo || {};

        const reportNoImportOtherPlatforms = () => {
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
        // console.log(currInfo, importInfo, '<--=== ');

        // Import files from within the platform outside of the platform
        if (!currPlatform && importPlatform) {
          reportLowestModule();
          return;
        }

        // Import pageType content from within the platform
        if (currPlatform && !currPageType && importPageType) {
          reportLowestModule();
          return;
        }

        // Not same platform
        if (currPlatform !== importPlatform) {
          reportNoImportOtherPlatforms();
          return;
        }

        if (currPlatform && importPlatform) {
          if (!importPageType && currPageType) return;

          // Not same pageType
          if (importPageType !== currPageType) {
            reportNoImportOtherPlatforms();
            return;
          }
        }
      },
    };
  },
};
