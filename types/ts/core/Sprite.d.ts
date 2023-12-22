/// <reference path="../../../global.d.ts" />
/**
 * The basic object that is rendered to the game screen.
 *
 * @class
 * @extends PIXI.Sprite
 * @param {Bitmap} bitmap - The image for the sprite.
 */
export default class Sprite extends PIXI.Sprite {
    _bitmap: unknown;
    _frame: unknown;
    _hue: unknown;
    _blendColor: unknown;
    _colorTone: unknown;
    _colorFilter: typeof ColorFilter;
    _blendMode: unknown;
    _hidden: boolean;
    _refreshFrame: boolean;
    static _emptyBaseTexture: any;
    static _counter: number;
    constructor(...args: any[]);
    initialize(bitmap: typeof Bitmap): void;
    /**
     * The image for the sprite.
     *
     * @type Bitmap
     * @name Sprite#bitmap
     */
    get bitmap(): any;
    set bitmap(value: any);
    /**
     * The width of the sprite without the scale.
     *
     * @type number
     * @name Sprite#width
     */
    //@ts-expect-error
    get width(): any;
    set width(value: any);
    /**
     * The height of the sprite without the scale.
     *
     * @type number
     * @name Sprite#height
     */
    //@ts-expect-error
    get height(): any;
    set height(value: any);
    /**
     * The opacity of the sprite (0 to 255).
     *
     * @type number
     * @name Sprite#opacity
     */
    get opacity(): any;
    set opacity(value: any);
    /**
     * The blend mode to be applied to the sprite.
     *
     * @type number
     * @name Sprite#blendMode
     */
    //@ts-expect-error
    get blendMode(): any;
    set blendMode(value: any);
    /**
     * Destroys the sprite.
     */
    destroy(): void;
    /**
     * Updates the sprite for each frame.
     */
    update(): void;
    /**
     * Makes the sprite "hidden".
     */
    hide(): void;
    /**
     * Releases the "hidden" state of the sprite.
     */
    show(): void;
    /**
     * Reflects the "hidden" state of the sprite to the visible state.
     */
    updateVisibility(): void;
    /**
     * Sets the x and y at once.
     *
     * @param {number} x - The x coordinate of the sprite.
     * @param {number} y - The y coordinate of the sprite.
     */
    move(x: number, y: number): void;
    /**
     * Sets the rectagle of the bitmap that the sprite displays.
     *
     * @param {number} x - The x coordinate of the frame.
     * @param {number} y - The y coordinate of the frame.
     * @param {number} width - The width of the frame.
     * @param {number} height - The height of the frame.
     */
    setFrame(x: number, y: number, width: number, height: number): void;
    /**
     * Sets the hue rotation value.
     *
     * @param {number} hue - The hue value (-360, 360).
     */
    setHue(hue: number): void;
    /**
     * Gets the blend color for the sprite.
     *
     * @returns {array} The blend color [r, g, b, a].
     */
    getBlendColor(): any;
    /**
     * Sets the blend color for the sprite.
     *
     * @param {array} color - The blend color [r, g, b, a].
     */
    setBlendColor(color: any[]): void;
    /**
     * Gets the color tone for the sprite.
     *
     * @returns {array} The color tone [r, g, b, gray].
     */
    getColorTone(): any;
    /**
     * Sets the color tone for the sprite.
     *
     * @param {array} tone - The color tone [r, g, b, gray].
     */
    setColorTone(tone: any[]): void;
    _onBitmapChange(): void;
    _onBitmapLoad(bitmapLoaded: any): void;
    _refresh(): void;
    _createColorFilter(): void;
    _updateColorFilter(): void;
}
