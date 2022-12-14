/// <reference path="../../../global.d.ts" />
export default class Window_MapName extends Window_Base {
    _showCount: number;
    constructor(...args: any[]);
    initialize(rect: any): void;
    update(): void;
    updateFadeIn(): void;
    updateFadeOut(): void;
    open(): void;
    close(): void;
    refresh(): void;
    drawBackground(x: any, y: any, width: any, height: any): void;
}
