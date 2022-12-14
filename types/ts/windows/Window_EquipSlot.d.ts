/// <reference path="../../../global.d.ts" />
export default class Window_EquipSlot extends Window_StatusBase {
    _actor: unknown;
    _statusWindow: unknown;
    _itemWindow: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setActor(actor: any): void;
    update(): void;
    maxItems(): any;
    item(): any;
    itemAt(index: any): any;
    drawItem(index: any): void;
    slotNameWidth(): number;
    isEnabled(index: any): any;
    isCurrentItemEnabled(): any;
    setStatusWindow(statusWindow: any): void;
    setItemWindow(itemWindow: any): void;
    updateHelp(): void;
}
