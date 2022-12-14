/// <reference path="../../../global.d.ts" />
export default class Window_NameBox extends Window_Base {
    _name: unknown;
    _messageWindow: unknown;
    constructor(...args: any[]);
    initialize(): void;
    setMessageWindow(messageWindow: any): void;
    setName(name: any): void;
    clear(): void;
    start(): void;
    updatePlacement(): void;
    updateBackground(): void;
    windowWidth(): number;
    windowHeight(): number;
    refresh(): void;
}
