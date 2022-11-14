import webpack from 'webpack';
import { Environment } from "./helpers/environment";
export interface IOpts {
    env: Environment;
}
declare const getConfig: (opts: IOpts) => webpack.Configuration;
export default getConfig;
//# sourceMappingURL=webpack.config.d.ts.map