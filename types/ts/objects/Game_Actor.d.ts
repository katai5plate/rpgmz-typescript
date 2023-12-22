/// <reference path="../../../global.d.ts" />
export default class Game_Actor extends Game_Battler {
    _actorId: unknown;
    _name: unknown;
    _nickname: unknown;
    _classId: unknown;
    _level: unknown;
    _characterName: unknown;
    _characterIndex: unknown;
    _faceName: unknown;
    _faceIndex: unknown;
    _battlerName: unknown;
    _exp: {};
    _skills: [];
    _equips: [];
    _actionInputIndex: number;
    _lastMenuSkill: typeof Game_Item;
    _lastBattleSkill: typeof Game_Item;
    _lastCommandSymbol: unknown;
    _profile: unknown;
    _stateSteps: {};
    constructor(...args: any[]);
    get level(): unknown;
    //@ts-expect-error
    initialize(actorId: any): void;
    initMembers(): void;
    setup(actorId: any): void;
    actorId(): unknown;
    actor(): any;
    name(): unknown;
    setName(name: any): void;
    nickname(): unknown;
    setNickname(nickname: any): void;
    profile(): unknown;
    setProfile(profile: any): void;
    characterName(): unknown;
    characterIndex(): unknown;
    faceName(): unknown;
    faceIndex(): unknown;
    battlerName(): unknown;
    clearStates(): void;
    eraseState(stateId: any): void;
    resetStateCounts(stateId: any): void;
    initImages(): void;
    expForLevel(level: any): number;
    initExp(): void;
    currentExp(): any;
    currentLevelExp(): number;
    nextLevelExp(): number;
    nextRequiredExp(): number;
    maxLevel(): any;
    isMaxLevel(): boolean;
    initSkills(): void;
    initEquips(equips: any): void;
    equipSlots(): any[];
    equips(): any[];
    weapons(): any[];
    armors(): any[];
    hasWeapon(weapon: any): boolean;
    hasArmor(armor: any): boolean;
    isEquipChangeOk(slotId: any): boolean;
    changeEquip(slotId: any, item: any): void;
    forceChangeEquip(slotId: any, item: any): void;
    tradeItemWithParty(newItem: any, oldItem: any): boolean;
    changeEquipById(etypeId: any, itemId: any): void;
    isEquipped(item: any): boolean;
    discardEquip(item: any): void;
    releaseUnequippableItems(forcing: any): void;
    clearEquipments(): void;
    optimizeEquipments(): void;
    bestEquipItem(slotId: any): any;
    calcEquipItemPerformance(item: any): any;
    //@ts-expect-error
    isSkillWtypeOk(skill: any): boolean;
    isWtypeEquipped(wtypeId: any): boolean;
    refresh(): void;
    hide(): void;
    isActor(): boolean;
    friendsUnit(): any;
    opponentsUnit(): any;
    index(): any;
    isBattleMember(): any;
    isFormationChangeOk(): boolean;
    currentClass(): any;
    isClass(gameClass: any): boolean;
    skillTypes(): any;
    skills(): any[];
    usableSkills(): any[];
    traitObjects(): any;
    attackElements(): any;
    hasNoWeapons(): boolean;
    bareHandsElementId(): number;
    //@ts-expect-error
    paramBase(paramId: any): any;
    paramPlus(paramId: any): any;
    attackAnimationId1(): any;
    attackAnimationId2(): any;
    bareHandsAnimationId(): number;
    changeExp(exp: any, show: any): void;
    levelUp(): void;
    levelDown(): void;
    findNewSkills(lastSkills: any): any[];
    displayLevelUp(newSkills: any): void;
    gainExp(exp: any): void;
    finalExpRate(): number;
    benchMembersExpRate(): 0 | 1;
    shouldDisplayLevelUp(): boolean;
    changeLevel(level: any, show: any): void;
    learnSkill(skillId: any): void;
    forgetSkill(skillId: any): void;
    isLearnedSkill(skillId: any): boolean;
    hasSkill(skillId: any): boolean;
    changeClass(classId: any, keepExp: any): void;
    setCharacterImage(characterName: any, characterIndex: any): void;
    setFaceImage(faceName: any, faceIndex: any): void;
    setBattlerImage(battlerName: any): void;
    isSpriteVisible(): any;
    performActionStart(action: any): void;
    //@ts-expect-error
    performAction(action: any): void;
    performActionEnd(): void;
    performAttack(): void;
    performDamage(): void;
    performEvasion(): void;
    performMagicEvasion(): void;
    performCounter(): void;
    performCollapse(): void;
    performVictory(): void;
    performEscape(): void;
    makeActionList(): any[];
    makeAutoBattleActions(): void;
    makeConfusionActions(): void;
    makeActions(): void;
    onPlayerWalk(): void;
    updateStateSteps(state: any): void;
    showAddedStates(): void;
    showRemovedStates(): void;
    stepsForTurn(): number;
    turnEndOnMap(): void;
    checkFloorEffect(): void;
    executeFloorDamage(): void;
    basicFloorDamage(): number;
    maxFloorDamage(): any;
    performMapDamage(): void;
    clearActions(): void;
    inputtingAction(): never;
    selectNextCommand(): boolean;
    selectPreviousCommand(): boolean;
    lastSkill(): any;
    lastMenuSkill(): any;
    setLastMenuSkill(skill: any): void;
    lastBattleSkill(): any;
    setLastBattleSkill(skill: any): void;
    lastCommandSymbol(): unknown;
    setLastCommandSymbol(symbol: any): void;
    testEscape(item: any): any;
    meetsUsableItemConditions(item: any): any;
    onEscapeFailure(): void;
}
