/// <reference path="../../../global.d.ts" />
export default class Scene_Status extends Scene_MenuBase {
    _profileWindow: typeof Window_Help;
    _statusWindow: typeof Window_Status;
    _statusParamsWindow: typeof Window_StatusParams;
    _statusEquipWindow: typeof Window_StatusEquip;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    helpAreaHeight(): number;
    createProfileWindow(): void;
    profileWindowRect(): import("../..").Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): import("../..").Rectangle;
    createStatusParamsWindow(): void;
    statusParamsWindowRect(): import("../..").Rectangle;
    createStatusEquipWindow(): void;
    statusEquipWindowRect(): import("../..").Rectangle;
    statusParamsWidth(): number;
    statusParamsHeight(): number;
    profileHeight(): number;
    start(): void;
    needsPageButtons(): boolean;
    refreshActor(): void;
    onActorChange(): void;
}
