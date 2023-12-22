/// <reference path="../../../global.d.ts" />
export default class Window_DebugRange extends Window_Selectable {
    _maxSwitches: unknown;
    _maxVariables: unknown;
    _editWindow: unknown;
    static lastTopRow: number;
    static lastIndex: number;
    constructor(...args: any[]);
    initialize(rect: any): void;
    maxItems(): any;
    update(): void;
    mode(index: any): "switch" | "variable";
    topId(index: any): number;
    isSwitchMode(index: any): boolean;
    //@ts-expect-error
    drawItem(index: any): void;
    isCancelTriggered(): boolean;
    processCancel(): void;
    setEditWindow(editWindow: any): void;
}
