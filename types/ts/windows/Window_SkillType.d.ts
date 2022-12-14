/// <reference path="../../../global.d.ts" />
export default class Window_SkillType extends Window_Command {
    _actor: unknown;
    _skillWindow: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setActor(actor: any): void;
    makeCommandList(): void;
    update(): void;
    setSkillWindow(skillWindow: any): void;
    selectLast(): void;
}
