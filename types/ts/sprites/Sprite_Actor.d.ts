/// <reference path="../../../global.d.ts" />
export default class Sprite_Actor extends Sprite_Battler {
    _battlerName: unknown;
    _motion: unknown;
    _motionCount: number;
    _pattern: number;
    _mainSprite: typeof Sprite;
    _shadowSprite: typeof Sprite;
    _weaponSprite: typeof Sprite_Weapon;
    _stateSprite: typeof Sprite_StateOverlay;
    _actor: unknown;
    static MOTIONS: {
        walk: {
            index: number;
            loop: boolean;
        };
        wait: {
            index: number;
            loop: boolean;
        };
        chant: {
            index: number;
            loop: boolean;
        };
        guard: {
            index: number;
            loop: boolean;
        };
        damage: {
            index: number;
            loop: boolean;
        };
        evade: {
            index: number;
            loop: boolean;
        };
        thrust: {
            index: number;
            loop: boolean;
        };
        swing: {
            index: number;
            loop: boolean;
        };
        missile: {
            index: number;
            loop: boolean;
        };
        skill: {
            index: number;
            loop: boolean;
        };
        spell: {
            index: number;
            loop: boolean;
        };
        item: {
            index: number;
            loop: boolean;
        };
        escape: {
            index: number;
            loop: boolean;
        };
        victory: {
            index: number;
            loop: boolean;
        };
        dying: {
            index: number;
            loop: boolean;
        };
        abnormal: {
            index: number;
            loop: boolean;
        };
        sleep: {
            index: number;
            loop: boolean;
        };
        dead: {
            index: number;
            loop: boolean;
        };
    };
    constructor(...args: any[]);
    initialize(battler: any): void;
    initMembers(): void;
    mainSprite(): typeof import("../..").Sprite;
    createMainSprite(): void;
    createShadowSprite(): void;
    createWeaponSprite(): void;
    createStateSprite(): void;
    setBattler(battler: any): void;
    moveToStartPosition(): void;
    setActorHome(index: any): void;
    update(): void;
    updateShadow(): void;
    updateMain(): void;
    setupMotion(): void;
    setupWeaponAnimation(): void;
    startMotion(motionType: any): void;
    updateTargetPosition(): void;
    shouldStepForward(): any;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updateMotion(): void;
    updateMotionCount(): void;
    motionSpeed(): number;
    refreshMotion(): void;
    startEntryMotion(): void;
    stepForward(): void;
    stepBack(): void;
    retreat(): void;
    onMoveEnd(): void;
    damageOffsetX(): number;
    damageOffsetY(): any;
}
