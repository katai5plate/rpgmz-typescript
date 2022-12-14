/// <reference path="../../../global.d.ts" />
export default class Game_Variables {
    _data: [];
    constructor(...args: any[]);
    initialize(): void;
    clear(): void;
    value(variableId: any): never;
    setValue(variableId: any, value: any): void;
    onChange(): void;
}
