/// <reference path="../../../global.d.ts" />
export default class Sprite_Balloon extends Sprite {
    _target: unknown;
    _balloonId: unknown;
    _duration: number;
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    loadBitmap(): void;
    setup(targetSprite: any, balloonId: any): void;
    update(): void;
    updatePosition(): void;
    updateFrame(): void;
    speed(): number;
    waitTime(): number;
    frameIndex(): number;
    isPlaying(): boolean;
}
