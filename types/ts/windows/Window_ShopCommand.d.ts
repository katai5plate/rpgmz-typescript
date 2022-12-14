/// <reference path="../../../global.d.ts" />
export default class Window_ShopCommand extends Window_HorzCommand {
    _purchaseOnly: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setPurchaseOnly(purchaseOnly: any): void;
    maxCols(): number;
    makeCommandList(): void;
}
