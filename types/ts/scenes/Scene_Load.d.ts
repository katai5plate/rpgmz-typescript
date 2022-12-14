/// <reference path="../../../global.d.ts" />
export default class Scene_Load extends Scene_File {
    _loadSuccess: boolean;
    constructor(...args: any[]);
    initialize(): void;
    terminate(): void;
    mode(): string;
    helpWindowText(): any;
    firstSavefileId(): any;
    onSavefileOk(): void;
    executeLoad(savefileId: any): void;
    onLoadSuccess(): void;
    onLoadFailure(): void;
    reloadMapIfUpdated(): void;
}
