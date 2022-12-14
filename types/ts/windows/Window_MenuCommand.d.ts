/// <reference path="../../../global.d.ts" />
export default class Window_MenuCommand extends Window_Command {
    _canRepeat: boolean;
    _lastCommandSymbol: null;
    static _lastCommandSymbol: any;
    constructor(...args: any[]);
    initialize(rect: any): void;
    static initCommandPosition(): void;
    makeCommandList(): void;
    addMainCommands(): void;
    addFormationCommand(): void;
    addOriginalCommands(): void;
    addOptionsCommand(): void;
    addSaveCommand(): void;
    addGameEndCommand(): void;
    needsCommand(name: any): any;
    areMainCommandsEnabled(): any;
    isFormationEnabled(): any;
    isOptionsEnabled(): boolean;
    isSaveEnabled(): any;
    isGameEndEnabled(): boolean;
    processOk(): void;
    selectLast(): void;
}
