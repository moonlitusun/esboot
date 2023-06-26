declare enum PLATFORMS {
    MOBILE = "mobile",
    PC = "pc"
}
declare enum PAGE_TYPE {
    native = "native",
    browser = "browser"
}
declare const _default: {
    pageType: PAGE_TYPE;
    platform: PLATFORMS;
    isMobile: boolean;
    isBrowser: boolean;
    rootPath: string;
    configRootPath: string;
    configRootPathOfPlatfrom: string;
    configRootPathOfPageType: string;
    configJSPath: string;
    pkg: Record<string, string>;
    init(): void;
};
export default _default;
//# sourceMappingURL=app-config.d.ts.map