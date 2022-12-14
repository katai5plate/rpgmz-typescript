/// <reference path="../../../global.d.ts" />
export default class Sprite_Battleback extends TilingSprite {
    constructor(...args: any[]);
    initialize(type: any): void;
    adjustPosition(): void;
    battleback1Bitmap(): any;
    battleback2Bitmap(): any;
    battleback1Name(): any;
    battleback2Name(): any;
    overworldBattleback1Name(): string;
    overworldBattleback2Name(): string;
    normalBattleback1Name(): string;
    normalBattleback2Name(): string;
    terrainBattleback1Name(type: any): "Wasteland" | "DirtField" | "Desert" | "Lava1" | "Lava2" | "Snowfield" | "Clouds" | "PoisonSwamp";
    terrainBattleback2Name(type: any): "Wasteland" | "Desert" | "Snowfield" | "Clouds" | "PoisonSwamp" | "Forest" | "Cliff" | "Lava";
    defaultBattleback1Name(): string;
    defaultBattleback2Name(): string;
    shipBattleback1Name(): string;
    shipBattleback2Name(): string;
    autotileType(z: any): any;
}
