/// <reference path="../../../global.d.ts" />
export default class Window_SkillStatus extends Window_StatusBase {
    _actor: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setActor(actor: any): void;
    refresh(): void;
}
