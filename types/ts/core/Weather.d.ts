/// <reference path="../../../global.d.ts" />
/**
 * The weather effect which displays rain, storm, or snow.
 *
 * @class
 * @extends PIXI.Container
 */
export default class Weather extends PIXI.Container {
    _width: unknown;
    _height: unknown;
    _sprites: [];
    _rainBitmap: typeof Bitmap;
    _stormBitmap: typeof Bitmap;
    _snowBitmap: typeof Bitmap;
    _dimmerSprite: typeof ScreenSprite;
    constructor(...args: any[]);
    initialize(): void;
    /**
     * Destroys the weather.
     */
    destroy(): void;
    /**
     * Updates the weather for each frame.
     */
    update(): void;
    _createBitmaps(): void;
    _createDimmer(): void;
    _updateDimmer(): void;
    _updateAllSprites(): void;
    _addSprite(): void;
    _removeSprite(): void;
    _updateSprite(sprite: any): void;
    _updateRainSprite(sprite: any): void;
    _updateStormSprite(sprite: any): void;
    _updateSnowSprite(sprite: any): void;
    _rebornSprite(sprite: any): void;
}
