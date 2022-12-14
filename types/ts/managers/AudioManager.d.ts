/// <reference path="../../../global.d.ts" />
export default class AudioManager {
    _bgmBuffer: null;
    _currentBgm: null;
    _bgsBuffer: null;
    _currentBgs: null;
    _meBuffer: null;
    _seBuffers: [];
    _bgmVolume: unknown;
    _bgsVolume: unknown;
    _meVolume: unknown;
    _seVolume: unknown;
    static _bgmVolume: number;
    static _bgsVolume: number;
    static _meVolume: number;
    static _seVolume: number;
    static _currentBgm: any;
    static _currentBgs: any;
    static _bgmBuffer: any;
    static _bgsBuffer: any;
    static _meBuffer: any;
    static _seBuffers: any[];
    static _staticBuffers: any[];
    static _replayFadeTime: number;
    static _path: string;
    static makeEmptyAudioObject: () => {
        name: string;
        volume: number;
        pitch: number;
    };
    static updateBufferParameters: (buffer: any, configVolume: any, audio: any) => void;
    static audioFileExt: () => string;
    static throwLoadError: (webAudio: any) => never;
    constructor();
    static playBgm(bgm: any, pos: any): void;
    static replayBgm(bgm: any): void;
    static isCurrentBgm(bgm: any): boolean;
    static updateBgmParameters(bgm: any): void;
    static updateCurrentBgm(bgm: any, pos: any): void;
    static stopBgm(): void;
    static fadeOutBgm(duration: any): void;
    static fadeInBgm(duration: any): void;
    static playBgs(bgs: any, pos: any): void;
    static replayBgs(bgs: any): void;
    static isCurrentBgs(bgs: any): boolean;
    static updateBgsParameters(bgs: any): void;
    static updateCurrentBgs(bgs: any, pos: any): void;
    static stopBgs(): void;
    static fadeOutBgs(duration: any): void;
    static fadeInBgs(duration: any): void;
    static playMe(me: any): void;
    static updateMeParameters(me: any): void;
    static fadeOutMe(duration: any): void;
    static stopMe(): void;
    static playSe(se: any): void;
    static updateSeParameters(buffer: any, se: any): void;
    static cleanupSe(): void;
    static stopSe(): void;
    static playStaticSe(se: any): void;
    static loadStaticSe(se: any): void;
    static isStaticSe(se: any): boolean;
    static stopAll(): void;
    static saveBgm(): {
        name: string;
        volume: number;
        pitch: number;
    } | {
        name: any;
        volume: any;
        pitch: any;
        pan: any;
        pos: any;
    };
    static saveBgs(): {
        name: string;
        volume: number;
        pitch: number;
    } | {
        name: any;
        volume: any;
        pitch: any;
        pan: any;
        pos: any;
    };
    static createBuffer(folder: any, name: any): import("../..").WebAudio;
    static checkErrors(): void;
}
