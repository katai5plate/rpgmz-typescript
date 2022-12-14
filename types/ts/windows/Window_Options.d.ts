/// <reference path="../../../global.d.ts" />
export default class Window_Options extends Window_Command {
    constructor(...args: any[]);
    initialize(rect: any): void;
    makeCommandList(): void;
    addGeneralOptions(): void;
    addVolumeOptions(): void;
    drawItem(index: any): void;
    statusWidth(): number;
    statusText(index: any): string;
    isVolumeSymbol(symbol: any): any;
    booleanStatusText(value: any): "ON" | "OFF";
    volumeStatusText(value: any): string;
    processOk(): void;
    cursorRight(): void;
    cursorLeft(): void;
    changeVolume(symbol: any, forward: any, wrap: any): void;
    volumeOffset(): number;
    changeValue(symbol: any, value: any): void;
    getConfigValue(symbol: any): any;
    setConfigValue(symbol: any, volume: any): void;
}
