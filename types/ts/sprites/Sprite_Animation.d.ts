/// <reference path="../../../global.d.ts" />
export default class Sprite_Animation extends Sprite {
    _targets: unknown;
    _animation: unknown;
    _mirror: unknown;
    _delay: unknown;
    _previous: unknown;
    _effect: unknown;
    _handle: unknown;
    _playing: boolean;
    _started: boolean;
    _frameIndex: number;
    _maxTimingFrames: unknown;
    _flashColor: unknown;
    _flashDuration: unknown;
    _viewportSize: number;
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    //@ts-expect-error
    destroy(options: any): void;
    setup(targets: any, animation: any, mirror: any, delay: any, previous: any): void;
    update(): void;
    canStart(): boolean;
    shouldWaitForPrevious(): boolean;
    updateEffectGeometry(): void;
    updateMain(): void;
    processSoundTimings(): void;
    processFlashTimings(): void;
    checkEnd(): void;
    updateFlash(): void;
    isPlaying(): boolean;
    setRotation(x: any, y: any, z: any): void;
    _render(renderer: any): void;
    setProjectionMatrix(renderer: any): void;
    setCameraMatrix(): void;
    setViewport(renderer: any): void;
    targetPosition(renderer: any): import("../..").Point;
    targetSpritePosition(sprite: any): any;
    resetViewport(renderer: any): void;
    onBeforeRender(renderer: any): void;
    onAfterRender(renderer: any): void;
}
