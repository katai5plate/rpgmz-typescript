/// <reference path="../../../global.d.ts" />
export default class Spriteset_Battle extends Spriteset_Base {
    _battlebackLocated: boolean;
    _backgroundFilter: typeof PIXI.filters.BlurFilter;
    _backgroundSprite: typeof Sprite;
    _battleField: typeof Sprite;
    _effectsContainer: unknown;
    _enemySprites: unknown;
    _actorSprites: [];
    constructor(...args: any[]);
    initialize(): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    createBackground(): void;
    createBattleback(): void;
    createBattleField(): void;
    battleFieldOffsetY(): number;
    update(): void;
    updateBattleback(): void;
    createEnemies(): void;
    compareEnemySprite(a: any, b: any): number;
    createActors(): void;
    updateActors(): void;
    //@ts-expect-error
    findTargetSprite(target: any): any;
    battlerSprites(): any;
    isEffecting(): any;
    isAnyoneMoving(): any;
    isBusy(): any;
}
