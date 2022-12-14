/// <reference path="../../../global.d.ts" />
export default class Sprite_AnimationMV extends Sprite {
    _targets: unknown;
    _animation: unknown;
    _mirror: unknown;
    _delay: unknown;
    _rate: number;
    _duration: number;
    _flashColor: unknown;
    _flashDuration: unknown;
    _screenFlashDuration: unknown;
    _hidingDuration: unknown;
    _cellSprites: [];
    _screenFlashSprite: typeof ScreenSprite;
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    setup(targets: any, animation: any, mirror: any, delay: any): void;
    setupRate(): void;
    setupDuration(): void;
    update(): void;
    updateFlash(): void;
    updateScreenFlash(): void;
    absoluteX(): number;
    absoluteY(): number;
    updateHiding(): void;
    isPlaying(): boolean;
    loadBitmaps(): void;
    isReady(): any;
    createCellSprites(): void;
    createScreenFlashSprite(): void;
    updateMain(): void;
    updatePosition(): void;
    updateFrame(): void;
    currentFrameIndex(): number;
    updateAllCellSprites(frame: any): void;
    updateCellSprite(sprite: any, cell: any): void;
    processTimingData(timing: any): void;
    startFlash(color: any, duration: any): void;
    startScreenFlash(color: any, duration: any): void;
    startHiding(duration: any): void;
    onEnd(): void;
}
