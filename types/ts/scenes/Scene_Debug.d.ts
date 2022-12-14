/// <reference path="../../../global.d.ts" />
export default class Scene_Debug extends Scene_MenuBase {
    _rangeWindow: typeof Window_DebugRange;
    _editWindow: typeof Window_DebugEdit;
    _debugHelpWindow: typeof Window_Base;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    needsCancelButton(): boolean;
    createRangeWindow(): void;
    rangeWindowRect(): import("../..").Rectangle;
    createEditWindow(): void;
    editWindowRect(): import("../..").Rectangle;
    createDebugHelpWindow(): void;
    debugHelpWindowRect(): import("../..").Rectangle;
    onRangeOk(): void;
    onEditCancel(): void;
    refreshHelpWindow(): void;
    helpText(): string;
}
