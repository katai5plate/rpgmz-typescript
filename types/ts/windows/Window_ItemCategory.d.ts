/// <reference path="../../../global.d.ts" />
export default class Window_ItemCategory extends Window_HorzCommand {
    _itemWindow: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    maxCols(): number;
    update(): void;
    makeCommandList(): void;
    needsCommand(name: any): any;
    setItemWindow(itemWindow: any): void;
    needsSelection(): boolean;
}
