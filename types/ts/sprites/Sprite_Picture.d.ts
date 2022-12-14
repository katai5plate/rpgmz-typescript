/// <reference path="../../../global.d.ts" />
export default class Sprite_Picture extends Sprite_Clickable {
    _pictureId: unknown;
    _pictureName: unknown;
    constructor(...args: any[]);
    initialize(pictureId: any): void;
    picture(): any;
    update(): void;
    updateBitmap(): void;
    updateOrigin(): void;
    updatePosition(): void;
    updateScale(): void;
    updateTone(): void;
    updateOther(): void;
    loadBitmap(): void;
}
