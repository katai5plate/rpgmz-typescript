/// <reference path="../../../global.d.ts" />
/**
 * The static class that handles JSON with object information.
 *
 * @namespace
 */
export default class JsonEx {
    /**
     * The maximum depth of objects.
     *
     * @type number
     * @default 100
     */
    static maxDepth: number;
    constructor();
    /**
     * Converts an object to a JSON string with object information.
     *
     * @param {object} object - The object to be converted.
     * @returns {string} The JSON string.
     */
    static stringify(object: object): string;
    /**
     * Parses a JSON string and reconstructs the corresponding object.
     *
     * @param {string} json - The JSON string.
     * @returns {object} The reconstructed object.
     */
    static parse(json: string): any;
    /**
     * Makes a deep copy of the specified object.
     *
     * @param {object} object - The object to be copied.
     * @returns {object} The copied object.
     */
    static makeDeepCopy(object: object): any;
    static _encode(value: any, depth: any): any;
    static _decode(value: any): any;
}
