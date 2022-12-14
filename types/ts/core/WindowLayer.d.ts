/// <reference path="../../../global.d.ts" />
/**
 * The layer which contains game windows.
 *
 * @class
 * @extends PIXI.Container
 */
export default class WindowLayer extends PIXI.Container {
    constructor(...args: any[]);
    initialize(): void;
    /**
     * Updates the window layer for each frame.
     */
    update(): void;
    /**
     * Renders the object using the WebGL renderer.
     *
     * @param {PIXI.Renderer} renderer - The renderer.
     */
    render(renderer: PIXI.Renderer): void;
}
