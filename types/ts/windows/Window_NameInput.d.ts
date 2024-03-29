/// <reference path="../../../global.d.ts" />
export default class Window_NameInput extends Window_Selectable {
    _editWindow: unknown;
    _page: number;
    _index: number;
    static LATIN1: string[];
    static LATIN2: string[];
    static RUSSIA: string[];
    static JAPAN1: string[];
    static JAPAN2: string[];
    static JAPAN3: string[];
    constructor(...args: any[]);
    initialize(rect: any): void;
    setEditWindow(editWindow: any): void;
    table(): string[][];
    maxCols(): number;
    maxItems(): number;
    itemWidth(): number;
    groupSpacing(): number;
    character(): string;
    isPageChange(): boolean;
    isOk(): boolean;
    itemRect(index: any): import("../..").Rectangle;
    //@ts-expect-error
    drawItem(index: any): void;
    updateCursor(): void;
    isCursorMovable(): any;
    cursorDown(wrap: any): void;
    cursorUp(wrap: any): void;
    cursorRight(wrap: any): void;
    cursorLeft(wrap: any): void;
    cursorPagedown(): void;
    cursorPageup(): void;
    processCursorMove(): void;
    processHandling(): void;
    isCancelEnabled(): boolean;
    processCancel(): void;
    processJump(): void;
    processBack(): void;
    processOk(): void;
    onNameAdd(): void;
    onNameOk(): void;
}
