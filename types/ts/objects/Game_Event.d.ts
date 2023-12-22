/// <reference path="../../../global.d.ts" />
export default class Game_Event extends Game_Character {
    _mapId: unknown;
    _eventId: unknown;
    _moveType: unknown;
    _trigger: unknown;
    _starting: boolean;
    _erased: boolean;
    _pageIndex: unknown;
    _originalPattern: unknown;
    _originalDirection: unknown;
    _prelockDirection: unknown;
    _locked: boolean;
    _interpreter: typeof Game_Interpreter;
    constructor(...args: any[]);
    //@ts-expect-error
    initialize(mapId: any, eventId: any): void;
    initMembers(): void;
    eventId(): unknown;
    event(): any;
    page(): any;
    list(): any;
    isCollidedWithCharacters(x: any, y: any): any;
    isCollidedWithEvents(x: any, y: any): boolean;
    isCollidedWithPlayerCharacters(x: any, y: any): any;
    lock(): void;
    unlock(): void;
    updateStop(): void;
    updateSelfMovement(): void;
    stopCountThreshold(): number;
    moveTypeRandom(): void;
    moveTypeTowardPlayer(): void;
    isNearThePlayer(): boolean;
    moveTypeCustom(): void;
    isStarting(): boolean;
    clearStartingFlag(): void;
    isTriggerIn(triggers: any): any;
    start(): void;
    erase(): void;
    refresh(): void;
    findProperPageIndex(): number;
    meetsConditions(page: any): boolean;
    setupPage(): void;
    clearPageSettings(): void;
    setupPageSettings(): void;
    isOriginalPattern(): boolean;
    resetPattern(): void;
    //@ts-expect-error
    checkEventTriggerTouch(x: any, y: any): void;
    checkEventTriggerAuto(): void;
    update(): void;
    updateParallel(): void;
    locate(x: any, y: any): void;
    forceMoveRoute(moveRoute: any): void;
}
