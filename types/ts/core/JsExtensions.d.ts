/// <reference path="../../../global.d.ts" />
interface Array<T> {
    clone: () => any;
    contains: (element: any) => any;
    equals: (array: any) => any;
    remove: (element: any) => any;
}
interface Number {
    clamp: (min: any, max: any) => any;
    mod: (n: any) => any;
    padZero: (length: any) => any;
}
interface String {
    contains: (string: any) => any;
    format: (...args: any) => any;
    padZero: (length: any) => any;
}
