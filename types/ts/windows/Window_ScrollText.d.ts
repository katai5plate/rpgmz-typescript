/// <reference path="../../../global.d.ts" />
export default class Window_ScrollText extends Window_Base {
    _reservedRect: unknown;
    _text: null;
    _allTextHeight: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    update(): void;
    startMessage(): void;
    refresh(): void;
    updatePlacement(): void;
    contentsHeight(): number;
    updateMessage(): void;
    scrollSpeed(): number;
    isFastForward(): any;
    fastForwardRate(): number;
    terminateMessage(): void;
}
