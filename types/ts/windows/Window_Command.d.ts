/// <reference path="../../../global.d.ts" />
export default class Window_Command extends Window_Selectable {
    _list: [];
    constructor(...args: any[]);
    initialize(rect: any): void;
    maxItems(): 0;
    clearCommandList(): void;
    makeCommandList(): void;
    addCommand(name: any, symbol: any, enabled?: boolean, ext?: any): void;
    commandName(index: any): any;
    commandSymbol(index: any): any;
    isCommandEnabled(index: any): any;
    currentData(): any;
    isCurrentItemEnabled(): any;
    currentSymbol(): any;
    currentExt(): any;
    findSymbol(symbol: any): number;
    selectSymbol(symbol: any): void;
    findExt(ext: any): number;
    selectExt(ext: any): void;
    //@ts-expect-error
    drawItem(index: any): void;
    itemTextAlign(): string;
    isOkEnabled(): boolean;
    callOkHandler(): void;
    refresh(): void;
}
