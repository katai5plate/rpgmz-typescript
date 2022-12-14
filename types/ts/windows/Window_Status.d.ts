/// <reference path="../../../global.d.ts" />
export default class Window_Status extends Window_StatusBase {
    _actor: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setActor(actor: any): void;
    refresh(): void;
    drawBlock1(): void;
    block1Y(): number;
    drawBlock2(): void;
    block2Y(): number;
    drawBasicInfo(x: any, y: any): void;
    drawExpInfo(x: any, y: any): void;
    expTotalValue(): any;
    expNextValue(): any;
}
