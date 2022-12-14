/// <reference path="../../../global.d.ts" />
export default class Window_ChoiceList extends Window_Command {
    _background: unknown;
    _canRepeat: boolean;
    _messageWindow: unknown;
    _cancelButton: typeof Sprite_Button;
    constructor(...args: any[]);
    initialize(): void;
    setMessageWindow(messageWindow: any): void;
    createCancelButton(): void;
    start(): void;
    update(): void;
    updateCancelButton(): void;
    selectDefault(): void;
    updatePlacement(): void;
    updateBackground(): void;
    placeCancelButton(): void;
    windowX(): number;
    windowY(): any;
    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    maxLines(): 4 | 8;
    maxChoiceWidth(): number;
    makeCommandList(): void;
    drawItem(index: any): void;
    isCancelEnabled(): boolean;
    needsCancelButton(): boolean;
    callOkHandler(): void;
    callCancelHandler(): void;
}
