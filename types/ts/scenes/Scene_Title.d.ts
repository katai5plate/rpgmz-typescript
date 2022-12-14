/// <reference path="../../../global.d.ts" />
export default class Scene_Title extends Scene_Base {
    _commandWindow: typeof Window_TitleCommand;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    start(): void;
    update(): void;
    isBusy(): any;
    terminate(): void;
    createBackground(): void;
    createForeground(): void;
    drawGameTitle(): void;
    adjustBackground(): void;
    createCommandWindow(): void;
    commandWindowRect(): import("../..").Rectangle;
    commandNewGame(): void;
    commandContinue(): void;
    commandOptions(): void;
    playTitleMusic(): void;
}
