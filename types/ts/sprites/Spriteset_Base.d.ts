/// <reference path="../../../global.d.ts" />
export default class Spriteset_Base extends Sprite {
    _animationSprites: [];
    _baseSprite: typeof Sprite;
    _blackScreen: typeof ScreenSprite;
    _baseColorFilter: typeof ColorFilter;
    _pictureContainer: typeof Sprite;
    _timerSprite: typeof Sprite_Timer;
    _overallColorFilter: typeof ColorFilter;
    constructor(...args: any[]);
    initialize(): void;
    //@ts-expect-error
    destroy(options: any): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    createUpperLayer(): void;
    update(): void;
    createBaseSprite(): void;
    createBaseFilters(): void;
    createPictures(): void;
    pictureContainerRect(): import("../..").Rectangle;
    createTimer(): void;
    createOverallFilters(): void;
    updateBaseFilters(): void;
    updateOverallFilters(): void;
    updatePosition(): void;
    findTargetSprite(): any;
    updateAnimations(): void;
    processAnimationRequests(): void;
    createAnimation(request: any): void;
    createAnimationSprite(targets: any, animation: any, mirror: any, delay: any): void;
    isMVAnimation(animation: any): boolean;
    makeTargetSprites(targets: any): any[];
    lastAnimationSprite(): never;
    isAnimationForEach(animation: any): boolean;
    animationBaseDelay(): number;
    animationNextDelay(): number;
    animationShouldMirror(target: any): any;
    removeAnimation(sprite: any): void;
    removeAllAnimations(): void;
    isAnimationPlaying(): boolean;
}
