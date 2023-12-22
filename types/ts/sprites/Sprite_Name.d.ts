/// <reference path="../../../global.d.ts" />
export default class Sprite_Name extends Sprite {
    _battler: unknown;
    _name: unknown;
    _textColor: unknown;
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    //@ts-expect-error
    destroy(options: any): void;
    createBitmap(): void;
    bitmapWidth(): number;
    bitmapHeight(): number;
    fontFace(): any;
    fontSize(): any;
    setup(battler: any): void;
    update(): void;
    updateBitmap(): void;
    //@ts-expect-error
    name(): any;
    textColor(): any;
    outlineColor(): string;
    outlineWidth(): number;
    redraw(): void;
    setupFont(): void;
}
