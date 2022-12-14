/// <reference path="../../../global.d.ts" />
export default class Scene_Equip extends Scene_MenuBase {
    _statusWindow: typeof Window_EquipStatus;
    _commandWindow: typeof Window_EquipCommand;
    _slotWindow: typeof Window_EquipSlot;
    _itemWindow: typeof Window_EquipItem;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    createStatusWindow(): void;
    statusWindowRect(): import("../..").Rectangle;
    createCommandWindow(): void;
    commandWindowRect(): import("../..").Rectangle;
    createSlotWindow(): void;
    slotWindowRect(): import("../..").Rectangle;
    createItemWindow(): void;
    itemWindowRect(): import("../..").Rectangle;
    statusWidth(): number;
    needsPageButtons(): boolean;
    arePageButtonsEnabled(): boolean;
    refreshActor(): void;
    commandEquip(): void;
    commandOptimize(): void;
    commandClear(): void;
    onSlotOk(): void;
    onSlotCancel(): void;
    onItemOk(): void;
    executeEquipChange(): void;
    onItemCancel(): void;
    onActorChange(): void;
    hideItemWindow(): void;
}
