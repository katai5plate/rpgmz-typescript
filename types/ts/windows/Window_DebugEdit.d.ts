/// <reference path="../../../global.d.ts" />
export default class Window_DebugEdit extends Window_Selectable {
    _mode: unknown;
    _topId: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    maxItems(): number;
    //@ts-expect-error
    drawItem(index: any): void;
    itemName(dataId: any): any;
    itemStatus(dataId: any): string;
    setMode(mode: any): void;
    setTopId(id: any): void;
    currentId(): any;
    update(): void;
    updateSwitch(): void;
    updateVariable(): void;
    deltaForVariable(): 0 | 1 | -1 | 10 | -10;
}
