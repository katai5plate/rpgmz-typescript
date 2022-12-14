/// <reference path="../../../global.d.ts" />
/**
 * The point class.
 *
 * @class
 * @extends PIXI.Point
 * @param {number} x - The x coordinate.
 * @param {number} y - The y coordinate.
 */
export default class Point extends PIXI.Point {
    constructor(...args: any[]);
    initialize(x: number, y: number): void;
}
