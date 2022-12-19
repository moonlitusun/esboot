import InjectBodyPlugin from 'inject-body-webpack-plugin';

import ip from '@@/helpers/ip';
import config from '@@/helpers/app-config';

import { ApplyOpts } from './types';

const { relativeStaticConfigPath, isBrowser, pkg } = config;

export const addInjectBodyPlugin = async (applyOpts: ApplyOpts) => {
  const { config, isDev } = applyOpts;

  config.plugins.push(
    // @ts-ignore
    new InjectBodyPlugin({
      position: 'start',
      content: `
      <script>
        function getUrlParam(name) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
          var r = window.location.search.substr(1).match(reg);
          if (r != null) return decodeURI(r[2]);
          return null;
        }

        var theme = getUrlParam('theme');

        if (theme) {
          document.documentElement.className = theme;
        }
      <\/script>

      ${
        !isBrowser && isDev
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