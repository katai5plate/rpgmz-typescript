/// <reference path="../../../global.d.ts" />
export default class Window_BattleActor extends Window_BattleStatus {
    constructor(...args: any[]);
    initialize(rect: any): void;
    show(): void;
    hide(): void;
    select(index: any): void;
    processTouch(): void;
}
