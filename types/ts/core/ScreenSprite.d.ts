/// <reference path="../../../global.d.ts" />
/**
 * The sprite which covers the entire game screen.
 *
 * @class
 * @extends PIXI.Container
 */
export default class ScreenSprite extends PIXI.Container {
    _graphics: typeof PIXI.Graphics;
    _red: unknown;
    _green: unknown;
    _blue: unknown;
    constructor(...args: any[]);
    initialize(): void;
    /**
     * The opacity of the sprite (0 to 255).
     *
     * @type number
     * @name ScreenSprite#opacity
     */
    get opacity(): any;
    set opacity(value: any);
    /**
     * Destroys the screen sprite.
     */
    destroy(): void;
    /**
     * Sets black to the color of the screen sprite.
     */
    setBlack(): void;
    /**
     * Sets white to the color of the screen sprite.
     */
    setWhite(): void;
    /**
     * Sets the color of the screen sprite by values.
     *
     * @param {number} r - The red value in the range (0, 255).
     * @param {number} g - The green value in the range (0, 255).
     * @param {number} b - The blue value in the range (0, 255).
     */
    setColor(r: number, g: number, b: number): void;
}
