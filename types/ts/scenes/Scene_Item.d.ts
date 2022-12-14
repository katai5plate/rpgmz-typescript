/// <reference path="../../../global.d.ts" />
export default class Scene_Item extends Scene_ItemBase {
    _categoryWindow: typeof Window_ItemCategory;
    _itemWindow: typeof Window_ItemList;
    constructor(...args: any[]);
    initialize(): void;
    create(): void;
    createCategoryWindow(): void;
    categoryWindowRect(): import("../..").Rectangle;
    createItemWindow(): void;
    itemWindowRect(): import("../..").Rectangle;
    user(): any;
    onCategoryOk(): void;
    onItemOk(): void;
    onItemCancel(): void;
    playSeForItem(): void;
    useItem(): void;
}
