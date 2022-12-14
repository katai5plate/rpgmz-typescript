/// <reference path="../../../global.d.ts" />
export default class Window_ActorCommand extends Window_Command {
    _actor: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    makeCommandList(): void;
    addAttackCommand(): void;
    addSkillCommands(): void;
    addGuardCommand(): void;
    addItemCommand(): void;
    setup(actor: any): void;
    actor(): unknown;
    processOk(): void;
    selectLast(): void;
}
