/// <reference path="../../../global.d.ts" />
export default class Sprite_Destination extends Sprite {
    _frameCount: number;
    constructor(...args: any[]);
    initialize(): void;
    //@ts-expect-error
    destroy(options: any): void;
    update(): void;
    createBitmap(): void;
    updatePosition(): void;
    updateAnimation(): void;
}
