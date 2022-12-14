/// <reference path="../../../global.d.ts" />
export default class Scene_File extends Scene_MenuBase {
    _helpWindow: typeof Window_Help;
    _listWindow: typeof Window_SavefileList;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    helpAreaHeight(): number;
    start(): void;
    savefileId(): any;
    isSavefileEnabled(savefileId: any): any;
    createHelpWindow(): void;
    helpWindowRect(): import("../..").Rectangle;
    createListWindow(): void;
    listWindowRect(): import("../..").Rectangle;
    mode(): any;
    needsAutosave(): any;
    activateListWindow(): void;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
}
