import type { BabelPlugin } from '@@/config/types';

function capitalizeFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
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
        return `rsuite/${capitalizeFirstLetter(name)}`;
      },
      style: (name: string) => {
        if (noImportStyleList.includes(name)) return false;
        return `${name}/styles/index.css`;
      },
    },
  ];
}
