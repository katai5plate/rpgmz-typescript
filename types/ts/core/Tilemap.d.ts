/// <reference path="../../../global.d.ts" />
/**
 * The tilemap which displays 2D tile-based game map.
 *
 * @class
 * @extends PIXI.Container
 */
export default class Tilemap extends PIXI.Container {
    _width: unknown;
    _height: unknown;
    _margin: number;
    _mapWidth: unknown;
    _mapHeight: unknown;
    _mapData: unknown;
    _bitmaps: unknown;
    _needsBitmapsUpdate: boolean;
    _needsRepaint: boolean;
    _lastAnimationFrame: unknown;
    _lastStartX: unknown;
    _lastStartY: unknown;
    _lowerLayer: typeof Tilemap.Layer;
    _upperLayer: typeof Tilemap.Layer;
    _elements: [];
    _indexBuffer: unknown;
    _indexArray: unknown;
    _vertexBuffer: unknown;
    _vertexArray: typeof Float32Array;
    _vao: null;
    _needsTexturesUpdate: boolean;
    _needsVertexUpdate: boolean;
    _images: unknown;
    _state: unknown;
    _shader: unknown;
    _internalTextures: [];
    _clearBuffer: typeof Uint8Array;
    static TILE_ID_B: number;
    static TILE_ID_C: number;
    static TILE_ID_D: number;
    static TILE_ID_E: number;
    static TILE_ID_A5: number;
    static TILE_ID_A1: number;
    static TILE_ID_A2: number;
    static TILE_ID_A3: number;
    static TILE_ID_A4: number;
    static TILE_ID_MAX: number;
    static FLOOR_AUTOTILE_TABLE: number[][][];
    static WALL_AUTOTILE_TABLE: number[][][];
    static WATERFALL_AUTOTILE_TABLE: number[][][];
    constructor(...args: any[]);
    initialize(): void;
    /**
     * The width of the tilemap.
     *
     * @type number
     * @name Tilemap#width
     */
    get width(): any;
    set width(value: any);
    /**
     * The height of the tilemap.
     *
     * @type number
     * @name Tilemap#height
     */
    get height(): any;
    set height(value: any);
    /**
     * Destroys the tilemap.
     */
    destroy(): void;
    /**
     * Sets the tilemap data.
     *
     * @param {number} width - The width of the map in number of tiles.
     * @param {number} height - The height of the map in number of tiles.
     * @param {array} data - The one dimensional array for the map data.
     */
    setData(width: number, height: number, data: any[]): void;
    /**
     * Checks whether the tileset is ready to render.
     *
     * @type boolean
     * @returns {boolean} True if the tilemap is ready.
     */
    isReady(): boolean;
    /**
     * Updates the tilemap for each frame.
     */
    update(): void;
    /**
     * Sets the bitmaps used as a tileset.
     *
     * @param {array} bitmaps - The array of the tileset bitmaps.
     */
    setBitmaps(bitmaps: any[]): void;
    /**
     * Forces to repaint the entire tilemap.
     */
    refresh(): void;
    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform(): void;
    _createLayers(): void;
    _updateBitmaps(): void;
    _addAllSpots(startX: any, startY: any): void;
    _addSpot(startX: any, startY: any, x: any, y: any): void;
    _addSpotTile(tileId: any, dx: any, dy: any): void;
    _addTile(layer: any, tileId: any, dx: any, dy: any): void;
    _addNormalTile(layer: any, tileId: any, dx: any, dy: any): void;
    _addAutotile(layer: any, tileId: any, dx: any, dy: any): void;
    _addTableEdge(layer: any, tileId: any, dx: any, dy: any): void;
    _addShadow(layer: any, shadowBits: any, dx: any, dy: any): void;
    _readMapData(x: any, y: any, z: any): any;
    _isHigherTile(tileId: any): number;
    _isTableTile(tileId: any): number;
    _isOverpassPosition(): boolean;
    _sortChildren(): void;
    _compareChildOrder(a: any, b: any): number;
    static isVisibleTile(tileId: any): boolean;
    static isAutotile(tileId: any): boolean;
    static getAutotileKind(tileId: any): number;
    static getAutotileShape(tileId: any): number;
    static makeAutotileId(kind: any, shape: any): any;
    static isSameKindTile(tileID1: any, tileID2: any): boolean;
    static isTileA1(tileId: any): boolean;
    static isTileA2(tileId: any): boolean;
    static isTileA3(tileId: any): boolean;
    static isTileA4(tileId: any): boolean;
    static isTileA5(tileId: any): boolean;
    static isWaterTile(tileId: any): boolean;
    static isWaterfallTile(tileId: any): boolean;
    static isGroundTile(tileId: any): boolean;
    static isShadowingTile(tileId: any): boolean;
    static isRoofTile(tileId: any): boolean;
    static isWallTopTile(tileId: any): boolean;
    static isWallSideTile(tileId: any): boolean;
    static isWallTile(tileId: any): boolean;
    static isFloorTypeAutotile(tileId: any): boolean;
    static isWallTypeAutotile(tileId: any): boolean;
    static isWaterfallTypeAutotile(tileId: any): boolean;
    static Layer(...args: any[]): void;
    static Renderer(...args: any[]): void;
}
