/// <reference path="../../../global.d.ts" />
export default class Scene_Save extends Scene_File {
    constructor(...args: any[]);
    initialize(): void;
    mode(): string;
    helpWindowText(): any;
    firstSavefileId(): any;
    onSavefileOk(): void;
    executeSave(savefileId: any): void;
    onSaveSuccess(): void;
    onSaveFailure(): void;
}
