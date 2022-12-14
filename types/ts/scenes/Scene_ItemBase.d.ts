/// <reference path="../../../global.d.ts" />
export default class Scene_ItemBase extends Scene_MenuBase {
    _actorWindow: typeof Window_MenuActor;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    createActorWindow(): void;
    actorWindowRect(): import("../..").Rectangle;
    item(): any;
    user(): any;
    isCursorLeft(): boolean;
    showActorWindow(): void;
    hideActorWindow(): void;
    isActorWindowActive(): any;
    onActorOk(): void;
    onActorCancel(): void;
    determineItem(): void;
    useItem(): void;
    activateItemWindow(): void;
    itemTargetActors(): any;
    canUse(): any;
    isItemEffectsValid(): any;
    applyItem(): void;
    checkCommonEvent(): void;
}
