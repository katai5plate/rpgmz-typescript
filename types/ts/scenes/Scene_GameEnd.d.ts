/// <reference path="../../../global.d.ts" />
export default class Scene_GameEnd extends Scene_MenuBase {
    _commandWindow: typeof Window_GameEnd;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    stop(): void;
    createBackground(): void;
    createCommandWindow(): void;
    commandWindowRect(): import("../..").Rectangle;
    commandToTitle(): void;
}
