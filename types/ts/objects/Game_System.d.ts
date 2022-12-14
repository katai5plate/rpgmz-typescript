/// <reference path="../../../global.d.ts" />
export default class Game_System {
    _saveEnabled: boolean;
    _menuEnabled: boolean;
    _encounterEnabled: boolean;
    _formationEnabled: boolean;
    _battleCount: number;
    _winCount: number;
    _escapeCount: number;
    _saveCount: number;
    _versionId: unknown;
    _savefileId: unknown;
    _framesOnSave: unknown;
    _bgmOnSave: unknown;
    _bgsOnSave: unknown;
    _windowTone: unknown;
    _battleBgm: unknown;
    _victoryMe: unknown;
    _defeatMe: unknown;
    _savedBgm: unknown;
    _walkingBgm: unknown;
    constructor(...args: any[]);
    initialize(): void;
    isJapanese(): any;
    isChinese(): any;
    isKorean(): any;
    isCJK(): any;
    isRussian(): any;
    isSideView(): any;
    isAutosaveEnabled(): any;
    isSaveEnabled(): boolean;
    disableSave(): void;
    enableSave(): void;
    isMenuEnabled(): boolean;
    disableMenu(): void;
    enableMenu(): void;
    isEncounterEnabled(): boolean;
    disableEncounter(): void;
    enableEncounter(): void;
    isFormationEnabled(): boolean;
    disableFormation(): void;
    enableFormation(): void;
    battleCount(): number;
    winCount(): number;
    escapeCount(): number;
    saveCount(): number;
    versionId(): unknown;
    savefileId(): unknown;
    setSavefileId(savefileId: any): void;
    windowTone(): any;
    setWindowTone(value: any): void;
    battleBgm(): any;
    setBattleBgm(value: any): void;
    victoryMe(): any;
    setVictoryMe(value: any): void;
    defeatMe(): any;
    setDefeatMe(value: any): void;
    onBattleStart(): void;
    onBattleWin(): void;
    onBattleEscape(): void;
    onBeforeSave(): void;
    onAfterLoad(): void;
    playtime(): number;
    playtimeText(): string;
    saveBgm(): void;
    replayBgm(): void;
    saveWalkingBgm(): void;
    replayWalkingBgm(): void;
    saveWalkingBgm2(): void;
    mainFontFace(): string;
    numberFontFace(): string;
    mainFontSize(): any;
    windowPadding(): number;
    windowOpacity(): any;
}
