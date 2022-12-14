/// <reference path="../../../global.d.ts" />
/**
 * The static class that carries out graphics processing.
 *
 * @namespace
 */
export default class Graphics {
    _width: unknown;
    _height: unknown;
    _defaultScale: unknown;
    _realScale: unknown;
    _errorPrinter: unknown;
    _tickHandler: unknown;
    _canvas: unknown;
    _fpsCounter: typeof Graphics.FPSCounter;
    _loadingSpinner: unknown;
    _stretchEnabled: boolean;
    _app: null;
    _effekseer: unknown;
    _wasLoading: unknown;
    _tickCount: number;
    _frameTime: number;
    _frameStart: unknown;
    _lastLoop: unknown;
    _showFps: boolean;
    _boxDiv: unknown;
    _labelDiv: unknown;
    _numberDiv: unknown;
    static _stretchWidth: () => number;
    static _stretchHeight: () => number;
    static _makeErrorHtml: (name: any, message: any) => string;
    static _defaultStretchMode: () => boolean;
    static _disableContextMenu: () => void;
    static _isFullScreen: () => any;
    static _requestFullScreen: () => void;
    static _cancelFullScreen: () => void;
    static _setupPixi: () => void;
    constructor();
    /**
     * Initializes the graphics system.
     *
     * @returns {boolean} True if the graphics system is available.
     */
    static initialize(): boolean;
    /**
     * Register a handler for tick events.
     *
     * @param {function} handler - The listener function to be added for updates.
     */
    static setTickHandler(handler: (...args: any) => any): void;
    /**
     * Starts the game loop.
     */
    static startGameLoop(): void;
    /**
     * Stops the game loop.
     */
    static stopGameLoop(): void;
    /**
     * Sets the stage to be rendered.
     *
     * @param {Stage} stage - The stage object to be rendered.
     */
    static setStage(stage: typeof Stage): void;
    /**
     * Shows the loading spinner.
     */
    static startLoading(): void;
    /**
     * Erases the loading spinner.
     *
     * @returns {boolean} True if the loading spinner was active.
     */
    static endLoading(): boolean;
    /**
     * Displays the error text to the screen.
     *
     * @param {string} name - The name of the error.
     * @param {string} message - The message of the error.
     * @param {Error} [error] - The error object.
     */
    static printError(name: string, message: string, error: Error | undefined): void;
    /**
     * Displays a button to try to reload resources.
     *
     * @param {function} retry - The callback function to be called when the button
     *                           is pressed.
     */
    static showRetryButton(retry: (...args: any) => any): void;
    /**
     * Erases the loading error text.
     */
    static eraseError(): void;
    /**
     * Converts an x coordinate on the page to the corresponding
     * x coordinate on the canvas area.
     *
     * @param {number} x - The x coordinate on the page to be converted.
     * @returns {number} The x coordinate on the canvas area.
     */
    static pageToCanvasX(x: any): number;
    /**
     * Converts a y coordinate on the page to the corresponding
     * y coordinate on the canvas area.
     *
     * @param {number} y - The y coordinate on the page to be converted.
     * @returns {number} The y coordinate on the canvas area.
     */
    static pageToCanvasY(y: any): number;
    /**
     * Checks whether the specified point is inside the game canvas area.
     *
     * @param {number} x - The x coordinate on the canvas area.
     * @param {number} y - The y coordinate on the canvas area.
     * @returns {boolean} True if the specified point is inside the game canvas area.
     */
    static isInsideCanvas(x: number, y: number): boolean;
    /**
     * Shows the game screen.
     */
    static showScreen(): void;
    /**
     * Hides the game screen.
     */
    static hideScreen(): void;
    /**
     * Changes the size of the game screen.
     *
     * @param {number} width - The width of the game screen.
     * @param {number} height - The height of the game screen.
     */
    static resize(width: number, height: number): void;
    static _createAllElements(): void;
    static _updateAllElements(): void;
    static _onTick(deltaTime: any): void;
    static _canRender(): boolean;
    static _updateRealScale(): void;
    static _createErrorPrinter(): void;
    static _updateErrorPrinter(): void;
    static _createCanvas(): void;
    static _updateCanvas(): void;
    static _updateVideo(): void;
    static _createLoadingSpinner(): void;
    static _createFPSCounter(): void;
    static _centerElement(element: any): void;
    static _applyCanvasFilter(): void;
    static _clearCanvasFilter(): void;
    static _setupEventHandlers(): void;
    static _onWindowResize(): void;
    static _onKeyDown(event: any): void;
    static _switchFPSCounter(): void;
    static _switchStretchMode(): void;
    static _switchFullScreen(): void;
    static _createPixiApp(): void;
    static _createEffekseerContext(): void;
    static FPSCounter(...args: any[]): void;
}
