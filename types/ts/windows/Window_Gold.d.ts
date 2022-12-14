/// <reference path="../../../global.d.ts" />
export default class Window_Gold extends Window_Selectable {
    constructor(...args: any[]);
    initialize(rect: any): void;
    colSpacing(): number;
    refresh(): void;
    value(): any;
    currencyUnit(): any;
    open(): void;
}
