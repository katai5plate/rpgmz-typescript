/// <reference path="../../../global.d.ts" />
export default class Game_ActionResult {
    constructor(...args: any[]);
    initialize(): void;
    clear(): void;
    addedStateObjects(): any;
    removedStateObjects(): any;
    isStatusAffected(): boolean;
    isHit(): boolean;
    isStateAdded(stateId: any): any;
    pushAddedState(stateId: any): void;
    isStateRemoved(stateId: any): any;
    pushRemovedState(stateId: any): void;
    isBuffAdded(paramId: any): any;
    pushAddedBuff(paramId: any): void;
    isDebuffAdded(paramId: any): any;
    pushAddedDebuff(paramId: any): void;
    isBuffRemoved(paramId: any): any;
    pushRemovedBuff(paramId: any): void;
}
