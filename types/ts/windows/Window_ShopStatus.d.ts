/// <reference path="../../../global.d.ts" />
export default class Window_ShopStatus extends Window_StatusBase {
    _item: unknown;
    _pageIndex: number;
    constructor(...args: any[]);
    initialize(rect: any): void;
    refresh(): void;
    setItem(item: any): void;
    isEquipItem(): any;
    drawPossession(x: any, y: any): void;
    drawEquipInfo(x: any, y: any): void;
    statusMembers(): any;
    pageSize(): number;
    maxPages(): number;
    drawActorEquipInfo(x: any, y: any, actor: any): void;
    drawActorParamChange(x: any, y: any, actor: any, item1: any): void;
    paramId(): 2 | 3;
    currentEquippedItem(actor: any, etypeId: any): any;
    update(): void;
    updatePage(): void;
    isPageChangeEnabled(): boolean;
    isPageChangeRequested(): boolean;
    changePage(): void;
}
