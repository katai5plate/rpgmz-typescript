/// <reference path="../../../global.d.ts" />
/**
 * The rectangle class.
 *
 * @class
 * @extends PIXI.Rectangle
 * @param {number} x - The x coordinate for the upper-left corner.
 * @param {number} y - The y coordinate for the upper-left corner.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 */
export default class Rectangle extends PIXI.Rectangle {
    constructor(...args: any[]);
    initialize(x: number, y: number, width: number, height: number): void;
}
