/// <reference path="../../../global.d.ts" />
export default class Game_Temp {
    _isPlaytest: unknown;
    _destinationX: unknown;
    _destinationY: unknown;
    _touchTarget: unknown;
    _touchState: unknown;
    _needsBattleRefresh: boolean;
    _commonEventQueue: [];
    _animationQueue: [];
    _balloonQueue: [];
    _lastActionData: number[];
    constructor(...args: any[]);
    initialize(): void;
    isPlaytest(): unknown;
    setDestination(x: any, y: any): void;
    clearDestination(): void;
    isDestinationValid(): boolean;
    destinationX(): unknown;
    destinationY(): unknown;
    setTouchState(target: any, state: any): void;
    clearTouchState(): void;
    touchTarget(): unknown;
    touchState(): unknown;
    requestBattleRefresh(): void;
    clearBattleRefreshRequest(): void;
    isBattleRefreshRequested(): boolean;
    reserveCommonEvent(commonEventId: any): void;
    retrieveCommonEvent(): any;
    clearCommonEventReservation(): void;
    isCommonEventReserved(): boolean;
    requestAnimation(targets: any, animationId: any, mirror?: boolean): void;
    retrieveAnimation(): never;
    requestBalloon(target: any, balloonId: any): void;
    retrieveBalloon(): never;
    lastActionData(type: any): number;
    setLastActionData(type: any, value: any): void;
    setLastUsedSkillId(skillID: any): void;
    setLastUsedItemId(itemID: any): void;
    setLastSubjectActorId(actorID: any): void;
    setLastSubjectEnemyIndex(enemyIndex: any): void;
    setLastTargetActorId(actorID: any): void;
    setLastTargetEnemyIndex(enemyIndex: any): void;
}
