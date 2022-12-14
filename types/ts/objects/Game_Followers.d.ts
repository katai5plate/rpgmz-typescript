/// <reference path="../../../global.d.ts" />
export default class Game_Followers {
    _visible: boolean;
    _gathering: boolean;
    _data: [];
    constructor(...args: any[]);
    initialize(): void;
    setup(): void;
    isVisible(): boolean;
    show(): void;
    hide(): void;
    data(): any;
    reverseData(): any;
    follower(index: any): never;
    refresh(): void;
    update(): void;
    updateMove(): void;
    jumpAll(): void;
    synchronize(x: any, y: any, d: any): void;
    gather(): void;
    areGathering(): boolean;
    visibleFollowers(): never[];
    areMoving(): boolean;
    areGathered(): boolean;
    isSomeoneCollided(x: any, y: any): boolean;
}
