/// <reference path="../../../global.d.ts" />
/**
 * The static class that handles input data from the keyboard and gamepads.
 *
 * @namespace
 */
export default class Input {
    _currentState: {};
    _previousState: {};
    _gamepadStates: [];
    _latestButton: unknown;
    _pressedTime: number;
    _preferredAxis: string;
    _date: unknown;
    _virtualButton: unknown;
    /**
     * The wait time of the key repeat in frames.
     *
     * @type number
     */
    static keyRepeatWait: number;
    /**
     * The interval of the key repeat in frames.
     *
     * @type number
     */
    static keyRepeatInterval: number;
    /**
     * A hash table to convert from a virtual key code to a mapped key name.
     *
     * @type Object
     */
    static keyMapper: {
        9: string;
        13: string;
        16: string;
        17: string;
        18: string;
        27: string;
        32: string;
        33: string;
        34: string;
        37: string;
        38: string;
        39: string;
        40: string;
        45: string;
        81: string;
        87: string;
        88: string;
        90: string;
        96: string;
        98: string;
        100: string;
        102: string;
        104: string;
        120: string;
    };
    /**
     * A hash table to convert from a gamepad button to a mapped key name.
     *
     * @type Object
     */
    static gamepadMapper: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        12: string;
        13: string;
        14: string;
        15: string;
    };
    static _shouldPreventDefault: (keyCode: any) => boolean;
    static _makeNumpadDirection: (x: any, y: any) => any;
    static _isEscapeCompatible: (keyName: any) => boolean;
    constructor();
    /**
     * Initializes the input system.
     */
    static initialize(): void;
    /**
     * Clears all the input data.
     */
    static clear(): void;
    /**
     * Updates the input data.
     */
    static update(): void;
    /**
     * Checks whether a key is currently pressed down.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is pressed.
     */
    static isPressed(keyName: string): boolean;
    /**
     * Checks whether a key is just pressed.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is triggered.
     */
    static isTriggered(keyName: string): boolean;
    /**
     * Checks whether a key is just pressed or a key repeat occurred.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is repeated.
     */
    static isRepeated(keyName: string): boolean;
    /**
     * Checks whether a key is kept depressed.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is long-pressed.
     */
    static isLongPressed(keyName: string): boolean;
    static virtualClick(buttonName: any): void;
    static _setupEventHandlers(): void;
    static _onKeyDown(event: any): void;
    static _onKeyUp(event: any): void;
    static _onLostFocus(): void;
    static _pollGamepads(): void;
    static _updateGamepadState(gamepad: any): void;
    static _updateDirection(): void;
    static _signX(): number;
    static _signY(): number;
}
