/// <reference path="../../../global.d.ts" />
export default class Game_Switches {
    _data: [];
    constructor(...args: any[]);
    initialize(): void;
    clear(): void;
    value(switchId: any): boolean;
    setValue(switchId: any, value: any): void;
    onChange(): void;
}
