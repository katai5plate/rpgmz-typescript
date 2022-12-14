/// <reference path="../../../global.d.ts" />
export default class Window_ShopBuy extends Window_Selectable {
    _money: unknown;
    _shopGoods: unknown;
    _data: [];
    _price: [];
    _statusWindow: unknown;
    constructor(...args: any[]);
    initialize(rect: any): void;
    setupGoods(shopGoods: any): void;
    maxItems(): 0 | 1;
    item(): any;
    itemAt(index: any): any;
    setMoney(money: any): void;
    isCurrentItemEnabled(): boolean;
    price(item: any): never;
    isEnabled(item: any): boolean;
    refresh(): void;
    makeItemList(): void;
    goodsToItem(goods: any): any;
    drawItem(index: any): void;
    priceWidth(): number;
    setStatusWindow(statusWindow: any): void;
    updateHelp(): void;
}
