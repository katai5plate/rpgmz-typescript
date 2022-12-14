/// <reference path="../../../global.d.ts" />
export default class Scene_MenuBase extends Scene_Base {
    _actor: unknown;
    _backgroundFilter: typeof PIXI.filters.BlurFilter;
    _backgroundSprite: typeof Sprite;
    _helpWindow: typeof Window_Help;
    _cancelButton: typeof Sprite_Button;
    _pageupButton: typeof Sprite_Button;
    _pagedownButton: typeof Sprite_Button;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    update(): void;
    helpAreaTop(): any;
    helpAreaBottom(): any;
    helpAreaHeight(): number;
    mainAreaTop(): any;
    mainAreaBottom(): any;
    mainAreaHeight(): number;
    actor(): unknown;
    updateActor(): void;
    createBackground(): void;
    setBackgroundOpacity(opacity: any): void;
    createHelpWindow(): void;
    helpWindowRect(): import("../..").Rectangle;
    createButtons(): void;
    needsCancelButton(): boolean;
    createCancelButton(): void;
    needsPageButtons(): boolean;
    createPageButtons(): void;
    updatePageButtons(): void;
    arePageButtonsEnabled(): boolean;
    nextActor(): void;
    previousActor(): void;
    onActorChange(): void;
}
