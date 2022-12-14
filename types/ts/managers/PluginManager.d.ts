/// <reference path="../../../global.d.ts" />
export default class PluginManager {
    static _scripts: any[];
    static _errorUrls: any[];
    static _parameters: {};
    static _commands: {};
    static makeUrl: (filename: any) => string;
    static throwLoadError: (url: any) => never;
    constructor();
    static setup(plugins: any): void;
    static parameters(name: any): any;
    static setParameters(name: any, parameters: any): void;
    static loadScript(filename: any): void;
    static onError(e: any): void;
    static checkErrors(): void;
    static registerCommand(pluginName: any, commandName: any, func: any): void;
    static callCommand(self: any, pluginName: any, commandName: any, args: any): void;
}
