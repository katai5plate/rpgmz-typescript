/// <reference path="../../../global.d.ts" />
export default class Scene_Name extends Scene_MenuBase {
    _actorId: unknown;
    _maxLength: unknown;
    _actor: unknown;
    _editWindow: typeof Window_NameEdit;
    _inputWindow: typeof Window_NameInput;
    constructor(...args: any[]);
    initialize(): void;
    prepare(actorId: any, maxLength: any): void;
    create(): void;
    start(): void;
    createEditWindow(): void;
    editWindowRect(): import("../..").Rectangle;
    createInputWindow(): void;
    inputWindowRect(): import("../..").Rectangle;
    onInputOk(): void;
}
