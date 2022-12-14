/// <reference path="../../../global.d.ts" />
export default class Sprite_StateOverlay extends Sprite {
    _battler: unknown;
    _overlayIndex: unknown;
    _animationCount: number;
    _pattern: number;
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    loadBitmap(): void;
    setup(battler: any): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    updateFrame(): void;
}
