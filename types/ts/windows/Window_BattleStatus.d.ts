/// <reference path="../../../global.d.ts" />
export default class Window_BattleStatus extends Window_StatusBase {
    _bitmapsReady: number;
    constructor(...args: any[]);
    initialize(rect: any): void;
    extraHeight(): number;
    maxCols(): number;
    itemHeight(): number;
    maxItems(): any;
    rowSpacing(): number;
    updatePadding(): void;
    actor(index: any): any;
    selectActor(actor: any): void;
    update(): void;
    preparePartyRefresh(): void;
    performPartyRefresh(): void;
    drawItem(index: any): void;
    drawItemImage(index: any): void;
    drawItemStatus(index: any): void;
    faceRect(index: any): import("../..").Rectangle;
    nameX(rect: any): any;
    nameY(rect: any): number;
    stateIconX(rect: any): number;
    stateIconY(rect: any): any;
    basicGaugesX(rect: any): any;
    basicGaugesY(rect: any): number;
}
