/// <reference path="../../../global.d.ts" />
export default class TextManager {
    static basic: (basicId: any) => any;
    static param: (paramId: any) => any;
    static command: (commandId: any) => any;
    static message: (messageId: any) => any;
    static getter: (method: any, param: any) => {
        get(): any;
        configurable: boolean;
    };
    constructor();
}
