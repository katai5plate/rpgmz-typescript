/// <reference path="../../../global.d.ts" />
export default class ImageManager {
    _cache: {};
    static iconWidth: number;
    static iconHeight: number;
    static faceWidth: number;
    static faceHeight: number;
    static _cache: {};
    static _system: {};
    static _emptyBitmap: import("../..").Bitmap;
    static throwLoadError: (bitmap: any) => never;
    static isObjectCharacter: (filename: any) => any;
    static isBigCharacter: (filename: any) => any;
    static isZeroParallax: (filename: any) => boolean;
    constructor();
    static loadAnimation(filename: any): any;
    static loadBattleback1(filename: any): any;
    static loadBattleback2(filename: any): any;
    static loadEnemy(filename: any): any;
    static loadCharacter(filename: any): any;
    static loadFace(filename: any): any;
    static loadParallax(filename: any): any;
    static loadPicture(filename: any): any;
    static loadSvActor(filename: any): any;
    static loadSvEnemy(filename: any): any;
    static loadSystem(filename: any): any;
    static loadTileset(filename: any): any;
    static loadTitle1(filename: any): any;
    static loadTitle2(filename: any): any;
    static loadBitmap(folder: any, filename: any): any;
    static loadBitmapFromUrl(url: any): any;
    static clear(): void;
    static isReady(): boolean;
}
