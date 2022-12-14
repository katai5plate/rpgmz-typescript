/// <reference path="../../../global.d.ts" />
export default class Window_EventItem extends Window_ItemList {
    _messageWindow: unknown;
    _cancelButton: typeof Sprite_Button;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setMessageWindow(messageWindow: any): void;
    createCancelButton(): void;
    start(): void;
    update(): void;
    updateCancelButton(): void;
    updatePlacement(): void;
    placeCancelButton(): void;
    includes(item: any): boolean;
    needsNumber(): any;
    isEnabled(): boolean;
    onOk(): void;
    onCancel(): void;
}
