import type { Configuration, WebpackPluginInstance, EntryObject, RuleSetRule } from 'webpack';
export interface CustomConfiguration extends Configuration {
    plugins: WebpackPluginInstance[];
    entry: EntryObject;
    module: {
        rules: RuleSetRule[];
    };
}
export interface UserOpts {
    mfsu?: boolean;
    copy?: any;
}
export interface ApplyOpts {
    config: CustomConfiguration;
    isDev: boolean;
    userOpts: UserOpts;
    mfsuInstance: any;
}
//# sourceMappingURL=types.d.ts.map