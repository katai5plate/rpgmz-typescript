/// <reference path="../../../global.d.ts" />
export default class Sprite_Clickable extends Sprite {
    _pressed: boolean;
    _hovered: boolean;
    constructor(...args: any[]);
    initialize(): void;
    update(): void;
    processTouch(): void;
    isPressed(): boolean;
    isClickEnabled(): boolean;
    isBeingTouched(): boolean;
    hitTest(x: any, y: any): boolean;
    onMouseEnter(): void;
    onMouseExit(): void;
    onPress(): void;
    onClick(): void;
}
