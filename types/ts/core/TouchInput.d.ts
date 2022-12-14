/// <reference path="../../../global.d.ts" />
/**
 * The static class that handles input data from the mouse and touchscreen.
 *
 * @namespace
 */
export default class TouchInput {
    _mousePressed: boolean;
    _screenPressed: boolean;
    _pressedTime: number;
    _clicked: boolean;
    _newState: unknown;
    _currentState: unknown;
    _x: unknown;
    _y: unknown;
    _triggerX: unknown;
    _triggerY: unknown;
    _moved: boolean;
    _date: unknown;
    /**
     * The wait time of the pseudo key repeat in frames.
     *
     * @type number
     */
    static keyRepeatWait: number;
    /**
     * The interval of the pseudo key repeat in frames.
     *
     * @type number
     */
    static keyRepeatInterval: number;
    /**
     * The threshold number of pixels to treat as moved.
     *
     * @type number
     */
    static moveThreshold: number;
    static _createNewState: () => {
        triggered: boolean;
        cancelled: boolean;
        moved: boolean;
        hovered: boolean;
        released: boolean;
        wheelX: number;
        wheelY: number;
    };
    static _onMiddleButtonDown: () => void;
    constructor();
    /**
     * Initializes the touch system.
     */
    static initialize(): void;
    /**
     * Clears all the touch data.
     */
    static clear(): void;
    /**
     * Updates the touch data.
     */
    static update(): void;
    /**
     * Checks whether the mouse button or touchscreen has been pressed and
     * released at the same position.
     *
     * @returns {boolean} True if the mouse button or touchscreen is clicked.
     */
    static isClicked(): any;
    /**
     * Checks whether the mouse button or touchscreen is currently pressed down.
     *
     * @returns {boolean} True if the mouse button or touchscreen is pressed.
     */
    static isPressed(): any;
    /**
     * Checks whether the left mouse button or touchscreen is just pressed.
     *
     * @returns {boolean} True if the mouse button or touchscreen is triggered.
     */
    static isTriggered(): any;
    /**
     * Checks whether the left mouse button or touchscreen is just pressed
     * or a pseudo key repeat occurred.
     *
     * @returns {boolean} True if the mouse button or touchscreen is repeated.
     */
    static isRepeated(): any;
    /**
     * Checks whether the left mouse button or touchscreen is kept depressed.
     *
     * @returns {boolean} True if the left mouse button or touchscreen is long-pressed.
     */
    static isLongPressed(): boolean;
    /**
     * Checks whether the right mouse button is just pressed.
     *
     * @returns {boolean} True if the right mouse button is just pressed.
     */
    static isCancelled(): any;
    /**
     * Checks whether the mouse or a finger on the touchscreen is moved.
     *
     * @returns {boolean} True if the mouse or a finger on the touchscreen is moved.
     */
    static isMoved(): any;
    /**
     * Checks whether the mouse is moved without pressing a button.
     *
     * @returns {boolean} True if the mouse is hovered.
     */
    static isHovered(): any;
    /**
     * Checks whether the left mouse button or touchscreen is released.
     *
     * @returns {boolean} True if the mouse button or touchscreen is released.
     */
    static isReleased(): any;
    static _setupEventHandlers(): void;
    static _onMouseDown(event: any): void;
    static _onLeftButtonDown(event: any): void;
    static _onRightButtonDown(event: any): void;
    static _onMouseMove(event: any): void;
    static _onMouseUp(event: any): void;
    static _onWheel(event: any): void;
    static _onTouchStart(event: any): void;
    static _onTouchMove(event: any): void;
    static _onTouchEnd(event: any): void;
    static _onTouchCancel(): void;
    static _onLostFocus(): void;
    static _onTrigger(x: any, y: any): void;
    static _onCancel(x: any, y: any): void;
    static _onMove(x: any, y: any): void;
    static _onHover(x: any, y: any): void;
    static _onRelease(x: any, y: any): void;
}
