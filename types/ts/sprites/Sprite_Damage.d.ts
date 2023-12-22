/// <reference path="../../../global.d.ts" />
export default class Sprite_Damage extends Sprite {
    _duration: number;
    _flashColor: number[];
    _flashDuration: number;
    _colorType: unknown | number;
    constructor(...args: any[]);
    initialize(): void;
    //@ts-expect-error
    destroy(options: any): void;
    setup(target: any): void;
    setupCriticalEffect(): void;
    fontFace(): any;
    fontSize(): any;
    damageColor(): "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080";
    outlineColor(): string;
    outlineWidth(): number;
    createMiss(): void;
    createDigits(value: any): void;
    createChildSprite(width: any, height: any): import("../..").Sprite;
    createBitmap(width: any, height: any): import("../..").Bitmap;
    update(): void;
    updateChild(sprite: any): void;
    updateFlash(): void;
    updateOpacity(): void;
    isPlaying(): boolean;
}
