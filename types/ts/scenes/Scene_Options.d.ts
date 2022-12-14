/// <reference path="../../../global.d.ts" />
export default class Scene_Options extends Scene_MenuBase {
    _optionsWindow: typeof Window_Options;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    terminate(): void;
    createOptionsWindow(): void;
    optionsWindowRect(): import("../..").Rectangle;
    maxCommands(): number;
    maxVisibleCommands(): number;
}
