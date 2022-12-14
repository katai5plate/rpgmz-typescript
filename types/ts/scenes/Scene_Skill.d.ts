/// <reference path="../../../global.d.ts" />
export default class Scene_Skill extends Scene_ItemBase {
    _skillTypeWindow: typeof Window_SkillType;
    _statusWindow: typeof Window_SkillStatus;
    _itemWindow: typeof Window_SkillList;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    start(): void;
    createSkillTypeWindow(): void;
    skillTypeWindowRect(): import("../..").Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): import("../..").Rectangle;
    createItemWindow(): void;
    itemWindowRect(): import("../..").Rectangle;
    needsPageButtons(): boolean;
    arePageButtonsEnabled(): boolean;
    refreshActor(): void;
    user(): unknown;
    commandSkill(): void;
    onItemOk(): void;
    onItemCancel(): void;
    playSeForItem(): void;
    useItem(): void;
    onActorChange(): void;
}
