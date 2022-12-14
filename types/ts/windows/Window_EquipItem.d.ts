/// <reference path="../../../global.d.ts" />
export default class Window_EquipItem extends Window_ItemList {
    _actor: unknown;
    _slotId: unknown;
    _statusWindow: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    maxCols(): number;
    colSpacing(): number;
    setActor(actor: any): void;
    setSlotId(slotId: any): void;
    includes(item: any): boolean;
    etypeId(): any;
    isEnabled(): boolean;
    selectLast(): void;
    setStatusWindow(statusWindow: any): void;
    updateHelp(): void;
    playOkSound(): void;
}
