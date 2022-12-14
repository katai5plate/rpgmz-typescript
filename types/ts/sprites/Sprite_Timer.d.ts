/// <reference path="../../../global.d.ts" />
export default class Sprite_Timer extends Sprite {
    _seconds: unknown;
    constructor(...args: any[]);
    initialize(): void;
    destroy(options: any): void;
    createBitmap(): void;
    fontFace(): any;
    fontSize(): any;
    update(): void;
    updateBitmap(): void;
    redraw(): void;
    timerText(): string;
    updatePosition(): void;
    updateVisibility(): void;
}
