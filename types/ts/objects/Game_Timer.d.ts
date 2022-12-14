/// <reference path="../../../global.d.ts" />
export default class Game_Timer {
    _frames: unknown;
    _working: boolean;
    constructor(...args: any[]);
    initialize(): void;
    update(sceneActive: any): void;
    start(count: any): void;
    stop(): void;
    isWorking(): boolean;
    seconds(): number;
    frames(): unknown;
    onExpire(): void;
}
