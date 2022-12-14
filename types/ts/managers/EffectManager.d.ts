/// <reference path="../../../global.d.ts" />
export default class EffectManager {
    _cache: {};
    static _cache: {};
    static _errorUrls: any[];
    static onLoad: () => void;
    static makeUrl: (filename: any) => string;
    constructor();
    static load(filename: any): any;
    static startLoading(url: any): any;
    static clear(): void;
    static onError(url: any): void;
    static checkErrors(): void;
    static throwLoadError(url: any): void;
    static isReady(): boolean;
}
