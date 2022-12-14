/// <reference path="../../../global.d.ts" />
export default class Scene_Message extends Scene_Base {
    _messageWindow: typeof Window_Message;
    _scrollTextWindow: typeof Window_ScrollText;
    _goldWindow: typeof Window_Gold;
    _nameBoxWindow: typeof Window_NameBox;
    _choiceListWindow: typeof Window_ChoiceList;
    _numberInputWindow: typeof Window_NumberInput;
    _eventItemWindow: typeof Window_EventItem;
    constructor(...args: any[]);
    initialize(): void;
    isMessageWindowClosing(): any;
    createAllWindows(): void;
    createMessageWindow(): void;
    messageWindowRect(): import("../..").Rectangle;
    createScrollTextWindow(): void;
    scrollTextWindowRect(): import("../..").Rectangle;
    createGoldWindow(): void;
    goldWindowRect(): import("../..").Rectangle;
    createNameBoxWindow(): void;
    createChoiceListWindow(): void;
    createNumberInputWindow(): void;
    createEventItemWindow(): void;
    eventItemWindowRect(): import("../..").Rectangle;
    associateWindows(): void;
}
