/// <reference path="../../../global.d.ts" />
export default class ConfigManager {
    _isLoaded: boolean;
    static alwaysDash: boolean;
    static commandRemember: boolean;
    static touchUI: boolean;
    static _isLoaded: boolean;
    static readFlag: (config: any, name: any, defaultValue: any) => any;
    static readVolume: (config: any, name: any) => any;
    constructor();
    static load(): void;
    static save(): void;
    static isLoaded(): boolean;
    static makeData(): {};
    static applyData(config: any): void;
}
