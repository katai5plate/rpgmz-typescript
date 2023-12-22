/// <reference path="../../../global.d.ts" />
export default class Game_Vehicle extends Game_Character {
    _type: string;
    _mapId: unknown;
    _altitude: number;
    _driving: boolean;
    _bgm: unknown;
    constructor(...args: any[]);
    //@ts-expect-error
    initialize(type: any): void;
    initMembers(): void;
    isBoat(): boolean;
    isShip(): boolean;
    isAirship(): boolean;
    resetDirection(): void;
    initMoveSpeed(): void;
    vehicle(): any;
    loadSystemSettings(): void;
    refresh(): void;
    setLocation(mapId: any, x: any, y: any): void;
    pos(x: any, y: any): any;
    isMapPassable(x: any, y: any, d: any): any;
    getOn(): void;
    getOff(): void;
    setBgm(bgm: any): void;
    playBgm(): void;
    syncWithPlayer(): void;
    screenY(): number;
    shadowX(): number;
    shadowY(): number;
    shadowOpacity(): number;
    canMove(): boolean;
    update(): void;
    updateAirship(): void;
    updateAirshipAltitude(): void;
    maxAltitude(): number;
    isLowest(): boolean;
    isHighest(): boolean;
    isTakeoffOk(): any;
    isLandOk(x: any, y: any, d: any): boolean;
}
