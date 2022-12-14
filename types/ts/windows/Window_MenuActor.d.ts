/// <reference path="../../../global.d.ts" />
export default class Window_MenuActor extends Window_MenuStatus {
    constructor(...args: any[]);
    initialize(rect: any): void;
    processOk(): void;
    selectLast(): void;
    selectForItem(item: any): void;
}
