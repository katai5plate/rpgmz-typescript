/// <reference path="../../../global.d.ts" />
export default class Game_Unit {
    _inBattle: boolean;
    constructor(...args: any[]);
    initialize(): void;
    inBattle(): boolean;
    members(): any[];
    aliveMembers(): any[];
    deadMembers(): any[];
    movableMembers(): any[];
    clearActions(): void;
    agility(): number;
    tgrSum(): any;
    randomTarget(): any;
    randomDeadTarget(): any;
    smoothTarget(index: any): any;
    smoothDeadTarget(index: any): any;
    clearResults(): void;
    onBattleStart(advantageous: any): void;
    onBattleEnd(): void;
    makeActions(): void;
    select(activeMember: any): void;
    isAllDead(): boolean;
    substituteBattler(): any;
    tpbBaseSpeed(): number;
    tpbReferenceTime(): 60 | 240;
    updateTpb(): void;
}
