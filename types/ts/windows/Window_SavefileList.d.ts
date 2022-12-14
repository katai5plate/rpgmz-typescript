/// <reference path="../../../global.d.ts" />
export default class Window_SavefileList extends Window_Selectable {
    _mode: unknown;
    _autosave: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setMode(mode: any, autosave: any): void;
    maxItems(): number;
    numVisibleRows(): number;
    itemHeight(): number;
    drawItem(index: any): void;
    indexToSavefileId(index: any): any;
    savefileIdToIndex(savefileId: any): number;
    isEnabled(savefileId: any): boolean;
    savefileId(): any;
    selectSavefile(savefileId: any): void;
    drawTitle(savefileId: any, x: any, y: any): void;
    drawContents(info: any, rect: any): void;
    drawPartyCharacters(info: any, x: any, y: any): void;
    drawPlaytime(info: any, x: any, y: any, width: any): void;
    playOkSound(): void;
}
