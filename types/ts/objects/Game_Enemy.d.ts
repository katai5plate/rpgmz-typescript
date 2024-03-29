/// <reference path="../../../global.d.ts" />
export default class Game_Enemy extends Game_Battler {
    _enemyId: unknown;
    _letter: unknown;
    _plural: unknown;
    _screenX: unknown;
    _screenY: unknown;
    constructor(...args: any[]);
    //@ts-expect-error
    initialize(enemyId: any, x: any, y: any): void;
    initMembers(): void;
    setup(enemyId: any, x: any, y: any): void;
    isEnemy(): boolean;
    friendsUnit(): any;
    opponentsUnit(): any;
    index(): any;
    isBattleMember(): boolean;
    enemyId(): unknown;
    enemy(): any;
    traitObjects(): any;
    //@ts-expect-error
    paramBase(paramId: any): any;
    exp(): any;
    gold(): any;
    makeDropItems(): any;
    dropItemRate(): 1 | 2;
    itemObject(kind: any, dataId: any): any;
    isSpriteVisible(): boolean;
    screenX(): unknown;
    screenY(): unknown;
    battlerName(): any;
    battlerHue(): any;
    originalName(): any;
    name(): any;
    isLetterEmpty(): boolean;
    setLetter(letter: any): void;
    setPlural(plural: any): void;
    performActionStart(action: any): void;
    //@ts-expect-error
    performAction(action: any): void;
    performActionEnd(): void;
    performDamage(): void;
    performCollapse(): void;
    transform(enemyId: any): void;
    meetsCondition(action: any): any;
    meetsTurnCondition(param1: any, param2: any): boolean;
    meetsHpCondition(param1: any, param2: any): boolean;
    meetsMpCondition(param1: any, param2: any): boolean;
    meetsStateCondition(param: any): boolean;
    meetsPartyLevelCondition(param: any): boolean;
    meetsSwitchCondition(param: any): any;
    isActionValid(action: any): any;
    selectAction(actionList: any, ratingZero: any): any;
    selectAllActions(actionList: any): void;
    makeActions(): void;
}
