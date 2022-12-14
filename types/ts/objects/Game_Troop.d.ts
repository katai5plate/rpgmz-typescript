/// <reference path="../../../global.d.ts" />
export default class Game_Troop extends Game_Unit {
    _interpreter: typeof Game_Interpreter;
    _troopId: unknown;
    _eventFlags: {};
    _enemies: [];
    _turnCount: number;
    _namesCount: {};
    static LETTER_TABLE_HALF: string[];
    static LETTER_TABLE_FULL: string[];
    constructor(...args: any[]);
    initialize(): void;
    isEventRunning(): any;
    updateInterpreter(): void;
    turnCount(): number;
    members(): [];
    clear(): void;
    troop(): any;
    setup(troopId: any): void;
    makeUniqueNames(): void;
    updatePluralFlags(): void;
    letterTable(): string[];
    enemyNames(): any[];
    meetsConditions(page: any): boolean;
    setupBattleEvent(): void;
    increaseTurn(): void;
    expTotal(): any;
    goldTotal(): number;
    goldRate(): 1 | 2;
    makeDropItems(): any;
    isTpbTurnEnd(): boolean;
}
