/// <reference path="../../../global.d.ts" />
export default class Scene_Gameover extends Scene_Base {
    _backSprite: typeof Sprite;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    start(): void;
    update(): void;
    stop(): void;
    terminate(): void;
    playGameoverMusic(): void;
    createBackground(): void;
    adjustBackground(): void;
    isTriggered(): any;
    gotoTitle(): void;
}
