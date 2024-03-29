/// <reference path="../../../global.d.ts" />
export default class Window_Scrollable extends Window_Base {
    _scrollX: unknown;
    _scrollY: unknown;
    _scrollBaseX: unknown;
    _scrollBaseY: unknown;
    _scrollTargetX: unknown;
    _scrollTargetY: unknown;
    _scrollDuration: unknown;
    _scrollAccelX: unknown;
    _scrollAccelY: unknown;
    _scrollTouching: boolean;
    _scrollLastTouchX: unknown;
    _scrollLastTouchY: unknown;
    _scrollLastCursorVisible: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    clearScrollStatus(): void;
    //@ts-expect-error
    scrollX(): unknown;
    //@ts-expect-error
    scrollY(): unknown;
    scrollBaseX(): unknown;
    scrollBaseY(): unknown;
    //@ts-expect-error
    scrollTo(x: any, y: any): void;
    //@ts-expect-error
    scrollBy(x: any, y: any): void;
    smoothScrollTo(x: any, y: any): void;
    smoothScrollBy(x: any, y: any): void;
    setScrollAccel(x: any, y: any): void;
    overallWidth(): number;
    overallHeight(): number;
    maxScrollX(): number;
    maxScrollY(): number;
    scrollBlockWidth(): number;
    scrollBlockHeight(): number;
    smoothScrollDown(n: any): void;
    smoothScrollUp(n: any): void;
    update(): void;
    processWheelScroll(): void;
    processTouchScroll(): void;
    isWheelScrollEnabled(): boolean;
    isTouchScrollEnabled(): boolean;
    isScrollEnabled(): boolean;
    isTouchedInsideFrame(): any;
    onTouchScrollStart(): void;
    onTouchScroll(): void;
    onTouchScrollEnd(): void;
    updateSmoothScroll(): void;
    updateScrollAccel(): void;
    updateArrows(): void;
    updateOrigin(): void;
    updateScrollBase(baseX: any, baseY: any): void;
    paint(): void;
}
