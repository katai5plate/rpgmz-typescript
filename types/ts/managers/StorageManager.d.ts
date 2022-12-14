/// <reference path="../../../global.d.ts" />
export default class StorageManager {
    _forageKeysUpdated: boolean;
    _forageKeys: unknown;
    static _forageKeys: any[];
    static _forageKeysUpdated: boolean;
    static isLocalMode: () => boolean;
    static objectToJson: (object: any) => Promise<unknown>;
    static jsonToObject: (json: any) => Promise<unknown>;
    static jsonToZip: (json: any) => Promise<unknown>;
    static zipToJson: (zip: any) => Promise<unknown>;
    static fsMkdir: (path: any) => void;
    static fsRename: (oldPath: any, newPath: any) => void;
    static fsUnlink: (path: any) => void;
    static fsReadFile: (path: any) => any;
    static fsWriteFile: (path: any, data: any) => void;
    static fileDirectoryPath: () => any;
    static forageKey: (saveName: any) => string;
    static forageTestKey: () => string;
    constructor();
    static saveObject(saveName: any, object: any): Promise<any>;
    static loadObject(saveName: any): any;
    static saveZip(saveName: any, zip: any): any;
    static loadZip(saveName: any): any;
    static exists(saveName: any): any;
    static remove(saveName: any): any;
    static saveToLocalFile(saveName: any, zip: any): Promise<unknown>;
    static loadFromLocalFile(saveName: any): Promise<unknown>;
    static localFileExists(saveName: any): any;
    static removeLocalFile(saveName: any): void;
    static saveToForage(saveName: any, zip: any): any;
    static loadFromForage(saveName: any): any;
    static forageExists(saveName: any): boolean;
    static removeForage(saveName: any): any;
    static updateForageKeys(): any;
    static forageKeysUpdated(): boolean;
    static filePath(saveName: any): string;
}
