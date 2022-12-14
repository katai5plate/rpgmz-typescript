/// <reference path="../../../global.d.ts" />
export default class Window_NameEdit extends Window_StatusBase {
    _actor: unknown;
    _maxLength: unknown;
    _name: unknown;
    _index: unknown;
    _defaultName: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setup(actor: any, maxLength: any): void;
    name(): unknown;
    restoreDefault(): boolean;
    add(ch: any): boolean;
    back(): boolean;
    faceWidth(): number;
    charWidth(): any;
    left(): number;
    itemRect(index: any): import("../..").Rectangle;
    underlineRect(index: any): import("../..").Rectangle;
    underlineColor(): any;
    drawUnderline(index: any): void;
    drawChar(index: any): void;
    refresh(): void;
}
