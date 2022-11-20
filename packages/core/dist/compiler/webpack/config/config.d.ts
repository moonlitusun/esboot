import { Environment } from "./environment";
import { CustomConfiguration } from './types';
export interface IOpts {
    env: Environment;
}
declare const getConfig: (opts: IOpts) => Promise<CustomConfiguration>;
export default getConfig;
//# sourceMappingURL=config.d.ts.map