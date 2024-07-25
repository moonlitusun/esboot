import type { BabelPlugin } from '@@/config/types';

function capitalizeFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function isFirstLetterUppercase(word: string) {
  if (!word) return false;
  return /^[A-Z]/.test(word.charAt(7));
}

const defaultNoCssComp = ['CustomProvider', 'Whisper'];
export function getImportPluginsOfRsuite(
  noCssCompList?: string[]
): BabelPlugin {
  const noImportStyleList = [...defaultNoCssComp, ...(noCssCompList || [])].map(
    (name) => `rsuite/${name}`
  );

  return [
    require.resolve('babel-plugin-import'),
    {
      libraryName: 'rsuite',
      camel2DashComponentName: false,
      customName: (name: string) => {
        return `rsuite/${name}`;
      },
      style: (name: string) => {
        if (!isFirstLetterUppercase(name)) return false;
        if (noImportStyleList.includes(name)) return false;
        return `${name}/styles/index.css`;
      },
    },
  ];
}
