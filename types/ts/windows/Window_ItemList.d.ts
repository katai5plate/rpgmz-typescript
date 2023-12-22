/// <reference path="../../../global.d.ts" />
export default class Window_ItemList extends Window_Selectable {
    _category: unknown;
    _data: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setCategory(category: any): void;
    maxCols(): number;
    colSpacing(): number;
    maxItems(): any;
    item(): any;
    itemAt(index: any): any;
    isCurrentItemEnabled(): any;
    includes(item: any): any;
    needsNumber(): any;
    isEnabled(item: any): any;
    makeItemList(): void;
    selectLast(): void;
    //@ts-expect-error
    drawItem(index: any): void;
    numberWidth(): any;
    drawItemNumber(item: any, x: any, y: any, width: any): void;
    updateHelp(): void;
    refresh(): void;
}
