/// <reference path="../../../global.d.ts" />
export default class Sprite_Battler extends Sprite_Clickable {
    _battler: unknown;
    _damages: [];
    _homeX: unknown;
    _homeY: unknown;
    _offsetX: unknown;
    _offsetY: unknown;
    _targetOffsetX: unknown;
    _targetOffsetY: unknown;
    _movementDuration: unknown;
    _selectionEffectCount: number;
    constructor(...args: any[]);
    //@ts-expect-error
    initialize(battler: any): void;
    initMembers(): void;
    setBattler(battler: any): void;
    checkBattler(battler: any): boolean;
    mainSprite(): this;
    setHome(x: any, y: any): void;
    update(): void;
    updateVisibility(): void;
    updateMain(): void;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updatePosition(): void;
    updateDamagePopup(): void;
    updateSelectionEffect(): void;
    setupDamagePopup(): void;
    createDamageSprite(): void;
    destroyDamageSprite(sprite: any): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
    startMove(x: any, y: any, duration: any): void;
    onMoveEnd(): void;
    isEffecting(): boolean;
    isMoving(): boolean;
    inHomePosition(): boolean;
    onMouseEnter(): void;
    onPress(): void;
    onClick(): void;
}
