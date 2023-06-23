import InjectBodyPlugin from 'inject-body-webpack-plugin';

import ip from '@@/helpers/ip';
import esbootConfig from '@@/config';

import { ApplyOpts } from '../types';

export const addInjectBodyPlugin = async (applyOpts: ApplyOpts) => {
  const { isBrowser, isMobile } = esbootConfig.extralConfig;
  const { config, isDev } = applyOpts;

  config.plugins.push(
    // @ts-ignore
    new InjectBodyPlugin({
      position: 'start',
      content: `
      ${
        !isBrowser && isMobile && isDev
          ? `<script>
        window.brigeMockHost = "http://${ip}";
        window.brigeMockPort = ${process.env.BRIDGE_MOCK_PORT || 3000};
        <\/script>`
          : ''
      }
      `,
    })
  );
};

// <script src="${relativeStaticConfigPath}?v=${
//   // jenkins build verison
//   process.env.BUILD_VERSION || pkg.version
// }"><\/script>
