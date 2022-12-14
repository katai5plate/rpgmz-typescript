/// <reference path="../../../global.d.ts" />
/**
 * The root object of the display tree.
 *
 * @class
 * @extends PIXI.Container
 */
export default class Stage extends PIXI.Container {
    constructor(...args: any[]);
    initialize(): void;
    /**
     * Destroys the stage.
     */
    destroy(): void;
}
