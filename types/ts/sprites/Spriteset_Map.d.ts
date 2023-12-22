/// <reference path="../../../global.d.ts" />
export default class Spriteset_Map extends Spriteset_Base {
    _balloonSprites: [];
    _parallax: typeof TilingSprite;
    _effectsContainer: unknown;
    _tilemap: unknown;
    _tileset: unknown;
    _characterSprites: [];
    _shadowSprite: typeof Sprite;
    _destinationSprite: typeof Sprite_Destination;
    _weather: typeof Weather;
    _parallaxName: unknown;
    constructor(...args: any[]);
    initialize(): void;
    destroy(options: any): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    update(): void;
    hideCharacters(): void;
    createParallax(): void;
    createTilemap(): void;
    loadTileset(): void;
    createCharacters(): void;
    createShadow(): void;
    createDestination(): void;
    createWeather(): void;
    updateTileset(): void;
    updateParallax(): void;
    updateTilemap(): void;
    updateShadow(): void;
    updateWeather(): void;
    updateBalloons(): void;
    processBalloonRequests(): void;
    createBalloon(request: any): void;
    removeBalloon(sprite: any): void;
    removeAllBalloons(): void;
    //@ts-expect-error
    findTargetSprite(target: any): never;
    animationBaseDelay(): number;
}
