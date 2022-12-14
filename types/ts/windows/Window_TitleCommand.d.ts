/// <reference path="../../../global.d.ts" />
export default class Window_TitleCommand extends Window_Command {
    _lastCommandSymbol: null;
    static _lastCommandSymbol: any;
    constructor(...args: any[]);
    initialize(rect: any): void;
    static initCommandPosition(): void;
    makeCommandList(): void;
    isContinueEnabled(): any;
    processOk(): void;
    selectLast(): void;
}
