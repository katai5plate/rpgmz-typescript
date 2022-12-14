/// <reference path="../../../global.d.ts" />
export default class Sprite_StateIcon extends Sprite {
    _battler: unknown;
    _iconIndex: unknown;
    _animationCount: unknown;
    _animationIndex: number;
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    loadBitmap(): void;
    setup(battler: any): void;
    update(): void;
    animationWait(): number;
    updateIcon(): void;
    shouldDisplay(): any;
    updateFrame(): void;
}
