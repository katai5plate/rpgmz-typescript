/// <reference path="../../../global.d.ts" />
export default class Window_NumberInput extends Window_Selectable {
    _number: unknown;
    _maxDigits: unknown;
    _canRepeat: boolean;
    _messageWindow: unknown;
    _buttons: [];
    constructor(...args: any[]);
    initialize(): void;
    setMessageWindow(messageWindow: any): void;
    start(): void;
    updatePlacement(): void;
    windowWidth(): number;
    windowHeight(): number;
    //@ts-expect-error
    maxCols(): unknown;
    //@ts-expect-error
    maxItems(): unknown;
    itemWidth(): number;
    itemRect(index: any): any;
    isScrollEnabled(): boolean;
    isHoverEnabled(): boolean;
    createButtons(): void;
    placeButtons(): void;
    totalButtonWidth(): any;
    buttonSpacing(): number;
    buttonY(): any;
    update(): void;
    processDigitChange(): void;
    changeDigit(up: any): void;
    isTouchOkEnabled(): boolean;
    isOkEnabled(): boolean;
    isCancelEnabled(): boolean;
    processOk(): void;
    //@ts-expect-error
    drawItem(index: any): void;
    onButtonUp(): void;
    onButtonDown(): void;
    onButtonOk(): void;
}
