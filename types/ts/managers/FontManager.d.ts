/// <reference path="../../../global.d.ts" />
export default class FontManager {
    static _urls: {};
    static _states: {};
    static makeUrl: (filename: any) => string;
    constructor();
    static load(family: any, filename: any): void;
    static isReady(): boolean;
    static startLoading(family: any, url: any): void;
    static throwLoadError(family: any): void;
}
