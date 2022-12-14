/// <reference path="../../../global.d.ts" />
export default class Scene_Boot extends Scene_Base {
    _databaseLoaded: boolean;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    isReady(): boolean;
    onDatabaseLoaded(): void;
    setEncryptionInfo(): void;
    loadSystemImages(): void;
    loadPlayerData(): void;
    loadGameFonts(): void;
    isPlayerDataLoaded(): boolean;
    start(): void;
    startNormalGame(): void;
    resizeScreen(): void;
    adjustBoxSize(): void;
    adjustWindow(): void;
    screenScale(): any;
    updateDocumentTitle(): void;
    checkPlayerLocation(): void;
}
