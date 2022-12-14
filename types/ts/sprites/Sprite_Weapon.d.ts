/// <reference path="../../../global.d.ts" />
export default class Sprite_Weapon extends Sprite {
    _weaponImageId: unknown;
    _animationCount: number;
    _pattern: number;
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    setup(weaponImageId: any): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    loadBitmap(): void;
    updateFrame(): void;
    isPlaying(): boolean;
}
