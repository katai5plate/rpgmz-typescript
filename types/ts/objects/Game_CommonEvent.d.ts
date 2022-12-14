/// <reference path="../../../global.d.ts" />
export default class Game_CommonEvent {
    _commonEventId: unknown;
    _interpreter: null;
    constructor(...args: any[]);
    initialize(commonEventId: any): void;
    event(): any;
    list(): any;
    refresh(): void;
    isActive(): any;
    update(): void;
}
