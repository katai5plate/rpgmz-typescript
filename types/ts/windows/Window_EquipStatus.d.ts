/// <reference path="../../../global.d.ts" />
export default class Window_EquipStatus extends Window_StatusBase {
    _actor: unknown;
    _tempActor: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setActor(actor: any): void;
    colSpacing(): number;
    refresh(): void;
    setTempActor(tempActor: any): void;
    drawAllParams(): void;
    drawItem(x: any, y: any, paramId: any): void;
    drawParamName(x: any, y: any, paramId: any): void;
    drawCurrentParam(x: any, y: any, paramId: any): void;
    drawRightArrow(x: any, y: any): void;
    drawNewParam(x: any, y: any, paramId: any): void;
    rightArrowWidth(): number;
    paramWidth(): number;
    paramX(): number;
    paramY(index: any): number;
}
