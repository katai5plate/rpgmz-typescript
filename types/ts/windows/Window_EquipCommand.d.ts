/// <reference path="../../../global.d.ts" />
export default class Window_EquipCommand extends Window_HorzCommand {
    constructor(...args: any[]);
    initialize(rect: any): void;
    maxCols(): number;
    makeCommandList(): void;
}
