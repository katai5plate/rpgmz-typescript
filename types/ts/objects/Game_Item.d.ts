/// <reference path="../../../global.d.ts" />
export default class Game_Item {
    _dataClass: unknown | string;
    _itemId: unknown;
    constructor(...args: any[]);
    initialize(item: any): void;
    isSkill(): boolean;
    isItem(): boolean;
    isUsableItem(): boolean;
    isWeapon(): boolean;
    isArmor(): boolean;
    isEquipItem(): boolean;
    isNull(): boolean;
    itemId(): unknown;
    object(): any;
    setObject(item: any): void;
    setEquip(isWeapon: any, itemId: any): void;
}
