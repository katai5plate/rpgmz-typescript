/// <reference path="../../../global.d.ts" />
export default class Sprite_Button extends Sprite_Clickable {
    _buttonType: unknown;
    _clickHandler: unknown;
    _coldFrame: typeof Rectangle;
    _hotFrame: typeof Rectangle;
    constructor(...args: any[]);
    //@ts-expect-error
    initialize(buttonType: any): void;
    setupFrames(): void;
    blockWidth(): number;
    blockHeight(): number;
    loadButtonImage(): void;
    buttonData(): any;
    update(): void;
    checkBitmap(): void;
    updateFrame(): void;
    updateOpacity(): void;
    setColdFrame(x: any, y: any, width: any, height: any): void;
    setHotFrame(x: any, y: any, width: any, height: any): void;
    setClickHandler(method: any): void;
    onClick(): void;
}
