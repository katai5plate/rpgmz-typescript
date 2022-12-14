/// <reference path="../../../global.d.ts" />
export default class Window_BattleEnemy extends Window_Selectable {
    _enemies: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    maxCols(): number;
    maxItems(): any;
    enemy(): any;
    enemyIndex(): any;
    drawItem(index: any): void;
    show(): void;
    hide(): void;
    refresh(): void;
    select(index: any): void;
    processTouch(): void;
}
