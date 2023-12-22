/// <reference path="../../../global.d.ts" />
export default class Window_StatusParams extends Window_StatusBase {
    _actor: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setActor(actor: any): void;
    maxItems(): number;
    itemHeight(): number;
    //@ts-expect-error
    drawItem(index: any): void;
    drawItemBackground(): void;
}
