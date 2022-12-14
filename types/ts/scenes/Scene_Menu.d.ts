/// <reference path="../../../global.d.ts" />
export default class Scene_Menu extends Scene_MenuBase {
    _commandWindow: unknown;
    _goldWindow: typeof Window_Gold;
    _statusWindow: typeof Window_MenuStatus;
    constructor(...args: any[]);
    initialize(): void;
    helpAreaHeight(): number;
    create(): void;
    start(): void;
    createCommandWindow(): void;
    commandWindowRect(): import("../..").Rectangle;
    createGoldWindow(): void;
    goldWindowRect(): import("../..").Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): import("../..").Rectangle;
    commandItem(): void;
    commandPersonal(): void;
    commandFormation(): void;
    commandOptions(): void;
    commandSave(): void;
    commandGameEnd(): void;
    onPersonalOk(): void;
    onPersonalCancel(): void;
    onFormationOk(): void;
    onFormationCancel(): void;
}
