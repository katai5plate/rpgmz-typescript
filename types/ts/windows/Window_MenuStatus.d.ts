/// <reference path="../../../global.d.ts" />
export default class Window_MenuStatus extends Window_StatusBase {
    _formationMode: unknown;
    _pendingIndex: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    maxItems(): any;
    numVisibleRows(): number;
    itemHeight(): number;
    actor(index: any): any;
    //@ts-expect-error
    drawItem(index: any): void;
    drawPendingItemBackground(index: any): void;
    drawItemImage(index: any): void;
    drawItemStatus(index: any): void;
    processOk(): void;
    isCurrentItemEnabled(): any;
    selectLast(): void;
    formationMode(): unknown;
    setFormationMode(formationMode: any): void;
    pendingIndex(): unknown;
    setPendingIndex(index: any): void;
}
