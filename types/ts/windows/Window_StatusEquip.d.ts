/// <reference path="../../../global.d.ts" />
export default class Window_StatusEquip extends Window_StatusBase {
    _actor: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setActor(actor: any): void;
    maxItems(): any;
    itemHeight(): number;
    drawItem(index: any): void;
    drawItemBackground(): void;
}
