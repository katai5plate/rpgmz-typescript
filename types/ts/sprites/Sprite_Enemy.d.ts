/// <reference path="../../../global.d.ts" />
export default class Sprite_Enemy extends Sprite_Battler {
    _enemy: unknown;
    _appeared: boolean;
    _battlerName: unknown;
    _battlerHue: unknown;
    _effectType: unknown;
    _effectDuration: unknown;
    _shake: number;
    _stateIconSprite: typeof Sprite_StateIcon;
    constructor(...args: any[]);
    initialize(battler: any): void;
    initMembers(): void;
    createStateIconSprite(): void;
    setBattler(battler: any): void;
    update(): void;
    updateBitmap(): void;
    loadBitmap(name: any): void;
    setHue(hue: any): void;
    updateFrame(): void;
    updatePosition(): void;
    updateStateSprite(): void;
    initVisibility(): void;
    setupEffect(): void;
    startEffect(effectType: any): void;
    startAppear(): void;
    startDisappear(): void;
    startWhiten(): void;
    startBlink(): void;
    startCollapse(): void;
    startBossCollapse(): void;
    startInstantCollapse(): void;
    updateEffect(): void;
    isEffecting(): boolean;
    revertToNormal(): void;
    updateWhiten(): void;
    updateBlink(): void;
    updateAppear(): void;
    updateDisappear(): void;
    updateCollapse(): void;
    updateBossCollapse(): void;
    updateInstantCollapse(): void;
    damageOffsetX(): any;
    damageOffsetY(): number;
}