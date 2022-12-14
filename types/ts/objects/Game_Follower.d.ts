/// <reference path="../../../global.d.ts" />
export default class Game_Follower extends Game_Character {
    _memberIndex: unknown;
    constructor(...args: any[]);
    initialize(memberIndex: any): void;
    refresh(): void;
    actor(): any;
    isVisible(): any;
    isGathered(): boolean;
    update(): void;
    chaseCharacter(character: any): void;
}
