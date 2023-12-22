/// <reference path="../../../global.d.ts" />
export default class Window_SkillList extends Window_Selectable {
    _actor: unknown;
    _stypeId: unknown;
    _data: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setActor(actor: any): void;
    setStypeId(stypeId: any): void;
    maxCols(): number;
    colSpacing(): number;
    maxItems(): any;
    item(): any;
    itemAt(index: any): any;
    isCurrentItemEnabled(): any;
    includes(item: any): boolean;
    isEnabled(item: any): any;
    makeItemList(): void;
    selectLast(): void;
    //@ts-expect-error
    drawItem(index: any): void;
    costWidth(): any;
    drawSkillCost(skill: any, x: any, y: any, width: any): void;
    updateHelp(): void;
    refresh(): void;
}
