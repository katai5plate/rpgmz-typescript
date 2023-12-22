/// <reference path="../../../global.d.ts" />
/**
 * The window in the game.
 *
 * @class
 * @extends PIXI.Container
 */
export default class Window extends PIXI.Container {
    _isWindow: boolean;
    _windowskin: unknown;
    _width: number;
    _height: number;
    _cursorRect: typeof Rectangle;
    _openness: unknown;
    _animationCount: number;
    _padding: unknown;
    _margin: unknown;
    _colorTone: (unknown | number)[];
    _innerChildren: [];
    _container: typeof PIXI.Container;
    _backSprite: typeof Sprite;
    _frameSprite: typeof Sprite;
    _contentsBackSprite: typeof Sprite;
    _cursorSprite: typeof Sprite;
    _contentsSprite: typeof Sprite;
    _downArrowSprite: typeof Sprite;
    _upArrowSprite: typeof Sprite;
    _pauseSignSprite: typeof Sprite;
    _clientArea: typeof Sprite;
    constructor(...args: any[]);
    initialize(): void;
    /**
     * The image used as a window skin.
     *
     * @type Bitmap
     * @name Window#windowskin
     */
    get windowskin(): any;
    set windowskin(value: any);
    /**
     * The bitmap used for the window contents.
     *
     * @type Bitmap
     * @name Window#contents
     */
    get contents(): any;
    set contents(value: any);
    /**
     * The bitmap used for the window contents background.
     *
     * @type Bitmap
     * @name Window#contentsBack
     */
    get contentsBack(): any;
    set contentsBack(value: any);
    /**
     * The width of the window in pixels.
     *
     * @type number
     * @name Window#width
     */
    //@ts-expect-error
    get width(): any;
    set width(value: any);
    /**
     * The height of the window in pixels.
     *
     * @type number
     * @name Window#height
     */
    //@ts-expect-error
    get height(): any;
    set height(value: any);
    /**
     * The size of the padding between the frame and contents.
     *
     * @type number
     * @name Window#padding
     */
    get padding(): any;
    set padding(value: any);
    /**
     * The size of the margin for the window background.
     *
     * @type number
     * @name Window#margin
     */
    get margin(): any;
    set margin(value: any);
    /**
     * The opacity of the window without contents (0 to 255).
     *
     * @type number
     * @name Window#opacity
     */
    get opacity(): any;
    set opacity(value: any);
    /**
     * The opacity of the window background (0 to 255).
     *
     * @type number
     * @name Window#backOpacity
     */
    get backOpacity(): any;
    set backOpacity(value: any);
    /**
     * The opacity of the window contents (0 to 255).
     *
     * @type number
     * @name Window#contentsOpacity
     */
    get contentsOpacity(): any;
    set contentsOpacity(value: any);
    /**
     * The openness of the window (0 to 255).
     *
     * @type number
     * @name Window#openness
     */
    get openness(): any;
    set openness(value: any);
    /**
     * The width of the content area in pixels.
     *
     * @readonly
     * @type number
     * @name Window#innerWidth
     */
    get innerWidth(): number;
    /**
     * The height of the content area in pixels.
     *
     * @readonly
     * @type number
     * @name Window#innerHeight
     */
    get innerHeight(): number;
    /**
     * The rectangle of the content area.
     *
     * @readonly
     * @type Rectangle
     * @name Window#innerRect
     */
    get innerRect(): import("./Rectangle").default;
    /**
     * Destroys the window.
     */
    destroy(): void;
    /**
     * Updates the window for each frame.
     */
    update(): void;
    /**
     * Sets the x, y, width, and height all at once.
     *
     * @param {number} x - The x coordinate of the window.
     * @param {number} y - The y coordinate of the window.
     * @param {number} width - The width of the window.
     * @param {number} height - The height of the window.
     */
    move(x: number, y: number, width: number, height: number): void;
    /**
     * Checks whether the window is completely open (openness == 255).
     *
     * @returns {boolean} True if the window is open.
     */
    isOpen(): boolean;
    /**
     * Checks whether the window is completely closed (openness == 0).
     *
     * @returns {boolean} True if the window is closed.
     */
    isClosed(): boolean;
    /**
     * Sets the position of the command cursor.
     *
     * @param {number} x - The x coordinate of the cursor.
     * @param {number} y - The y coordinate of the cursor.
     * @param {number} width - The width of the cursor.
     * @param {number} height - The height of the cursor.
     */
    setCursorRect(x: number, y: number, width: number, height: number): void;
    /**
     * Moves the cursor position by the given amount.
     *
     * @param {number} x - The amount of horizontal movement.
     * @param {number} y - The amount of vertical movement.
     */
    moveCursorBy(x: number, y: number): void;
    /**
     * Moves the inner children by the given amount.
     *
     * @param {number} x - The amount of horizontal movement.
     * @param {number} y - The amount of vertical movement.
     */
    moveInnerChildrenBy(x: number, y: number): void;
    /**
     * Changes the color of the background.
     *
     * @param {number} r - The red value in the range (-255, 255).
     * @param {number} g - The green value in the range (-255, 255).
     * @param {number} b - The blue value in the range (-255, 255).
     */
    setTone(r: number, g: number, b: number): void;
    /**
     * Adds a child between the background and contents.
     *
     * @param {object} child - The child to add.
     * @returns {object} The child that was added.
     */
    addChildToBack(child: object): PIXI.DisplayObject;
    /**
     * Adds a child to the client area.
     *
     * @param {object} child - The child to add.
     * @returns {object} The child that was added.
     */
    addInnerChild(child: object): any;
    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform(): void;
    /**
     * Draws the window shape into PIXI.Graphics object. Used by WindowLayer.
     */
    drawShape(graphics: any): void;
    _createAllParts(): void;
    _createContainer(): void;
    _createBackSprite(): void;
    _createFrameSprite(): void;
    _createClientArea(): void;
    _createContentsBackSprite(): void;
    _createCursorSprite(): void;
    _createContentsSprite(): void;
    _createArrowSprites(): void;
    _createPauseSignSprites(): void;
    _onWindowskinLoad(): void;
    _refreshAllParts(): void;
    _refreshBack(): void;
    _refreshFrame(): void;
    _refreshCursor(): void;
    _setRectPartsGeometry(sprite: any, srect: any, drect: any, m: any): void;
    _refreshArrows(): void;
    _refreshPauseSign(): void;
    _updateClientArea(): void;
    _updateFrame(): void;
    _updateContentsBack(): void;
    _updateCursor(): void;
    _makeCursorAlpha(): number;
    _updateContents(): void;
    _updateArrows(): void;
    _updatePauseSign(): void;
    _updateFilterArea(): void;
}
