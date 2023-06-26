import { Environment } from "./environment";
export interface IOpts {
    env: Environment;
}
declare const getWebpackConfig: (opts: IOpts) => Promise<any>;
export default getWebpackConfig;
//# sourceMappingURL=config.d.ts.map