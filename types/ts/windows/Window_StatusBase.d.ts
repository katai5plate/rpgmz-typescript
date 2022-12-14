/// <reference path="../../../global.d.ts" />
export default class Window_StatusBase extends Window_Selectable {
    _additionalSprites: {};
    constructor(...args: any[]);
    initialize(rect: any): void;
    loadFaceImages(): void;
    refresh(): void;
    hideAdditionalSprites(): void;
    placeActorName(actor: any, x: any, y: any): void;
    placeStateIcon(actor: any, x: any, y: any): void;
    placeGauge(actor: any, type: any, x: any, y: any): void;
    createInnerSprite(key: any, spriteClass: any): any;
    placeTimeGauge(actor: any, x: any, y: any): void;
    placeBasicGauges(actor: any, x: any, y: any): void;
    gaugeLineHeight(): number;
    drawActorCharacter(actor: any, x: any, y: any): void;
    drawActorFace(actor: any, x: any, y: any, width: any, height: any): void;
    drawActorName(actor: any, x: any, y: any, width?: number): void;
    drawActorClass(actor: any, x: any, y: any, width?: number): void;
    drawActorNickname(actor: any, x: any, y: any, width?: number): void;
    drawActorLevel(actor: any, x: any, y: any): void;
    drawActorIcons(actor: any, x: any, y: any, width?: number): void;
    drawActorSimpleStatus(actor: any, x: any, y: any): void;
    actorSlotName(actor: any, index: any): any;
}
