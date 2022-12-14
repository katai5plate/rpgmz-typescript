import * as _PIXI from "pixi.js";
import "./types/ts/core/JsExtensions";
import _Utils from "./types/ts/core/Utils";
import _Graphics from "./types/ts/core/Graphics";
import _Point from "./types/ts/core/Point";
import _Rectangle from "./types/ts/core/Rectangle";
import _Bitmap from "./types/ts/core/Bitmap";
import _Sprite from "./types/ts/core/Sprite";
import _Tilemap from "./types/ts/core/Tilemap";
import _TilingSprite from "./types/ts/core/TilingSprite";
import _ScreenSprite from "./types/ts/core/ScreenSprite";
import _Window from "./types/ts/core/Window";
import _WindowLayer from "./types/ts/core/WindowLayer";
import _Weather from "./types/ts/core/Weather";
import _ColorFilter from "./types/ts/core/ColorFilter";
import _Stage from "./types/ts/core/Stage";
import _WebAudio from "./types/ts/core/WebAudio";
import _Video from "./types/ts/core/Video";
import _Input from "./types/ts/core/Input";
import _TouchInput from "./types/ts/core/TouchInput";
import _JsonEx from "./types/ts/core/JsonEx";
import _DataManager from "./types/ts/managers/DataManager";
import _ConfigManager from "./types/ts/managers/ConfigManager";
import _StorageManager from "./types/ts/managers/StorageManager";
import _FontManager from "./types/ts/managers/FontManager";
import _ImageManager from "./types/ts/managers/ImageManager";
import _EffectManager from "./types/ts/managers/EffectManager";
import _AudioManager from "./types/ts/managers/AudioManager";
import _SoundManager from "./types/ts/managers/SoundManager";
import _TextManager from "./types/ts/managers/TextManager";
import _ColorManager from "./types/ts/managers/ColorManager";
import _SceneManager from "./types/ts/managers/SceneManager";
import _BattleManager from "./types/ts/managers/BattleManager";
import _PluginManager from "./types/ts/managers/PluginManager";
import _Game_Temp from "./types/ts/objects/Game_Temp";
import _Game_System from "./types/ts/objects/Game_System";
import _Game_Timer from "./types/ts/objects/Game_Timer";
import _Game_Message from "./types/ts/objects/Game_Message";
import _Game_Switches from "./types/ts/objects/Game_Switches";
import _Game_Variables from "./types/ts/objects/Game_Variables";
import _Game_SelfSwitches from "./types/ts/objects/Game_SelfSwitches";
import _Game_Screen from "./types/ts/objects/Game_Screen";
import _Game_Picture from "./types/ts/objects/Game_Picture";
import _Game_Item from "./types/ts/objects/Game_Item";
import _Game_Action from "./types/ts/objects/Game_Action";
import _Game_ActionResult from "./types/ts/objects/Game_ActionResult";
import _Game_BattlerBase from "./types/ts/objects/Game_BattlerBase";
import _Game_Battler from "./types/ts/objects/Game_Battler";
import _Game_Actor from "./types/ts/objects/Game_Actor";
import _Game_Enemy from "./types/ts/objects/Game_Enemy";
import _Game_Actors from "./types/ts/objects/Game_Actors";
import _Game_Unit from "./types/ts/objects/Game_Unit";
import _Game_Party from "./types/ts/objects/Game_Party";
import _Game_Troop from "./types/ts/objects/Game_Troop";
import _Game_Map from "./types/ts/objects/Game_Map";
import _Game_CommonEvent from "./types/ts/objects/Game_CommonEvent";
import _Game_CharacterBase from "./types/ts/objects/Game_CharacterBase";
import _Game_Character from "./types/ts/objects/Game_Character";
import _Game_Player from "./types/ts/objects/Game_Player";
import _Game_Follower from "./types/ts/objects/Game_Follower";
import _Game_Followers from "./types/ts/objects/Game_Followers";
import _Game_Vehicle from "./types/ts/objects/Game_Vehicle";
import _Game_Event from "./types/ts/objects/Game_Event";
import _Game_Interpreter from "./types/ts/objects/Game_Interpreter";
import _Scene_Base from "./types/ts/scenes/Scene_Base";
import _Scene_Boot from "./types/ts/scenes/Scene_Boot";
import _Scene_Title from "./types/ts/scenes/Scene_Title";
import _Scene_Message from "./types/ts/scenes/Scene_Message";
import _Scene_Map from "./types/ts/scenes/Scene_Map";
import _Scene_MenuBase from "./types/ts/scenes/Scene_MenuBase";
import _Scene_Menu from "./types/ts/scenes/Scene_Menu";
import _Scene_ItemBase from "./types/ts/scenes/Scene_ItemBase";
import _Scene_Item from "./types/ts/scenes/Scene_Item";
import _Scene_Skill from "./types/ts/scenes/Scene_Skill";
import _Scene_Equip from "./types/ts/scenes/Scene_Equip";
import _Scene_Status from "./types/ts/scenes/Scene_Status";
import _Scene_Options from "./types/ts/scenes/Scene_Options";
import _Scene_File from "./types/ts/scenes/Scene_File";
import _Scene_Save from "./types/ts/scenes/Scene_Save";
import _Scene_Load from "./types/ts/scenes/Scene_Load";
import _Scene_GameEnd from "./types/ts/scenes/Scene_GameEnd";
import _Scene_Shop from "./types/ts/scenes/Scene_Shop";
import _Scene_Name from "./types/ts/scenes/Scene_Name";
import _Scene_Debug from "./types/ts/scenes/Scene_Debug";
import _Scene_Battle from "./types/ts/scenes/Scene_Battle";
import _Scene_Gameover from "./types/ts/scenes/Scene_Gameover";
import _Sprite_Clickable from "./types/ts/sprites/Sprite_Clickable";
import _Sprite_Button from "./types/ts/sprites/Sprite_Button";
import _Sprite_Character from "./types/ts/sprites/Sprite_Character";
import _Sprite_Battler from "./types/ts/sprites/Sprite_Battler";
import _Sprite_Actor from "./types/ts/sprites/Sprite_Actor";
import _Sprite_Enemy from "./types/ts/sprites/Sprite_Enemy";
import _Sprite_Animation from "./types/ts/sprites/Sprite_Animation";
import _Sprite_AnimationMV from "./types/ts/sprites/Sprite_AnimationMV";
import _Sprite_Battleback from "./types/ts/sprites/Sprite_Battleback";
import _Sprite_Damage from "./types/ts/sprites/Sprite_Damage";
import _Sprite_Gauge from "./types/ts/sprites/Sprite_Gauge";
import _Sprite_Name from "./types/ts/sprites/Sprite_Name";
import _Sprite_StateIcon from "./types/ts/sprites/Sprite_StateIcon";
import _Sprite_StateOverlay from "./types/ts/sprites/Sprite_StateOverlay";
import _Sprite_Weapon from "./types/ts/sprites/Sprite_Weapon";
import _Sprite_Balloon from "./types/ts/sprites/Sprite_Balloon";
import _Sprite_Picture from "./types/ts/sprites/Sprite_Picture";
import _Sprite_Timer from "./types/ts/sprites/Sprite_Timer";
import _Sprite_Destination from "./types/ts/sprites/Sprite_Destination";
import _Spriteset_Base from "./types/ts/sprites/Spriteset_Base";
import _Spriteset_Map from "./types/ts/sprites/Spriteset_Map";
import _Spriteset_Battle from "./types/ts/sprites/Spriteset_Battle";
import _Window_Base from "./types/ts/windows/Window_Base";
import _Window_Scrollable from "./types/ts/windows/Window_Scrollable";
import _Window_Selectable from "./types/ts/windows/Window_Selectable";
import _Window_Command from "./types/ts/windows/Window_Command";
import _Window_HorzCommand from "./types/ts/windows/Window_HorzCommand";
import _Window_Help from "./types/ts/windows/Window_Help";
import _Window_Gold from "./types/ts/windows/Window_Gold";
import _Window_StatusBase from "./types/ts/windows/Window_StatusBase";
import _Window_MenuCommand from "./types/ts/windows/Window_MenuCommand";
import _Window_MenuStatus from "./types/ts/windows/Window_MenuStatus";
import _Window_MenuActor from "./types/ts/windows/Window_MenuActor";
import _Window_ItemCategory from "./types/ts/windows/Window_ItemCategory";
import _Window_ItemList from "./types/ts/windows/Window_ItemList";
import _Window_SkillType from "./types/ts/windows/Window_SkillType";
import _Window_SkillStatus from "./types/ts/windows/Window_SkillStatus";
import _Window_SkillList from "./types/ts/windows/Window_SkillList";
import _Window_EquipStatus from "./types/ts/windows/Window_EquipStatus";
import _Window_EquipCommand from "./types/ts/windows/Window_EquipCommand";
import _Window_EquipSlot from "./types/ts/windows/Window_EquipSlot";
import _Window_EquipItem from "./types/ts/windows/Window_EquipItem";
import _Window_Status from "./types/ts/windows/Window_Status";
import _Window_StatusParams from "./types/ts/windows/Window_StatusParams";
import _Window_StatusEquip from "./types/ts/windows/Window_StatusEquip";
import _Window_Options from "./types/ts/windows/Window_Options";
import _Window_SavefileList from "./types/ts/windows/Window_SavefileList";
import _Window_ShopCommand from "./types/ts/windows/Window_ShopCommand";
import _Window_ShopBuy from "./types/ts/windows/Window_ShopBuy";
import _Window_ShopSell from "./types/ts/windows/Window_ShopSell";
import _Window_ShopNumber from "./types/ts/windows/Window_ShopNumber";
import _Window_ShopStatus from "./types/ts/windows/Window_ShopStatus";
import _Window_NameEdit from "./types/ts/windows/Window_NameEdit";
import _Window_NameInput from "./types/ts/windows/Window_NameInput";
import _Window_NameBox from "./types/ts/windows/Window_NameBox";
import _Window_ChoiceList from "./types/ts/windows/Window_ChoiceList";
import _Window_NumberInput from "./types/ts/windows/Window_NumberInput";
import _Window_EventItem from "./types/ts/windows/Window_EventItem";
import _Window_Message from "./types/ts/windows/Window_Message";
import _Window_ScrollText from "./types/ts/windows/Window_ScrollText";
import _Window_MapName from "./types/ts/windows/Window_MapName";
import _Window_BattleLog from "./types/ts/windows/Window_BattleLog";
import _Window_PartyCommand from "./types/ts/windows/Window_PartyCommand";
import _Window_ActorCommand from "./types/ts/windows/Window_ActorCommand";
import _Window_BattleStatus from "./types/ts/windows/Window_BattleStatus";
import _Window_BattleActor from "./types/ts/windows/Window_BattleActor";
import _Window_BattleEnemy from "./types/ts/windows/Window_BattleEnemy";
import _Window_BattleSkill from "./types/ts/windows/Window_BattleSkill";
import _Window_BattleItem from "./types/ts/windows/Window_BattleItem";
import _Window_TitleCommand from "./types/ts/windows/Window_TitleCommand";
import _Window_GameEnd from "./types/ts/windows/Window_GameEnd";
import _Window_DebugRange from "./types/ts/windows/Window_DebugRange";
import _Window_DebugEdit from "./types/ts/windows/Window_DebugEdit";

declare global {
  //@ts-ignore
  var PIXI: typeof _PIXI;
  var Utils: typeof _Utils;
  var Graphics: typeof _Graphics;
  var Point: typeof _Point;
  var Rectangle: typeof _Rectangle;
  var Bitmap: typeof _Bitmap;
  var Sprite: typeof _Sprite;
  var Tilemap: typeof _Tilemap;
  var TilingSprite: typeof _TilingSprite;
  var ScreenSprite: typeof _ScreenSprite;
  //@ts-ignore
  var Window: typeof _Window;
  var WindowLayer: typeof _WindowLayer;
  var Weather: typeof _Weather;
  var ColorFilter: typeof _ColorFilter;
  var Stage: typeof _Stage;
  var WebAudio: typeof _WebAudio;
  var Video: typeof _Video;
  var Input: typeof _Input;
  var TouchInput: typeof _TouchInput;
  var JsonEx: typeof _JsonEx;
  var DataManager: typeof _DataManager;
  var ConfigManager: typeof _ConfigManager;
  //@ts-ignore
  var StorageManager: typeof _StorageManager;
  var FontManager: typeof _FontManager;
  var ImageManager: typeof _ImageManager;
  var EffectManager: typeof _EffectManager;
  var AudioManager: typeof _AudioManager;
  var SoundManager: typeof _SoundManager;
  var TextManager: typeof _TextManager;
  var ColorManager: typeof _ColorManager;
  var SceneManager: typeof _SceneManager;
  var BattleManager: typeof _BattleManager;
  var PluginManager: typeof _PluginManager;
  var Game_Temp: typeof _Game_Temp;
  var Game_System: typeof _Game_System;
  var Game_Timer: typeof _Game_Timer;
  var Game_Message: typeof _Game_Message;
  var Game_Switches: typeof _Game_Switches;
  var Game_Variables: typeof _Game_Variables;
  var Game_SelfSwitches: typeof _Game_SelfSwitches;
  var Game_Screen: typeof _Game_Screen;
  var Game_Picture: typeof _Game_Picture;
  var Game_Item: typeof _Game_Item;
  var Game_Action: typeof _Game_Action;
  var Game_ActionResult: typeof _Game_ActionResult;
  var Game_BattlerBase: typeof _Game_BattlerBase;
  var Game_Battler: typeof _Game_Battler;
  var Game_Actor: typeof _Game_Actor;
  var Game_Enemy: typeof _Game_Enemy;
  var Game_Actors: typeof _Game_Actors;
  var Game_Unit: typeof _Game_Unit;
  var Game_Party: typeof _Game_Party;
  var Game_Troop: typeof _Game_Troop;
  var Game_Map: typeof _Game_Map;
  var Game_CommonEvent: typeof _Game_CommonEvent;
  var Game_CharacterBase: typeof _Game_CharacterBase;
  var Game_Character: typeof _Game_Character;
  var Game_Player: typeof _Game_Player;
  var Game_Follower: typeof _Game_Follower;
  var Game_Followers: typeof _Game_Followers;
  var Game_Vehicle: typeof _Game_Vehicle;
  var Game_Event: typeof _Game_Event;
  var Game_Interpreter: typeof _Game_Interpreter;
  var Scene_Base: typeof _Scene_Base;
  var Scene_Boot: typeof _Scene_Boot;
  var Scene_Title: typeof _Scene_Title;
  var Scene_Message: typeof _Scene_Message;
  var Scene_Map: typeof _Scene_Map;
  var Scene_MenuBase: typeof _Scene_MenuBase;
  var Scene_Menu: typeof _Scene_Menu;
  var Scene_ItemBase: typeof _Scene_ItemBase;
  var Scene_Item: typeof _Scene_Item;
  var Scene_Skill: typeof _Scene_Skill;
  var Scene_Equip: typeof _Scene_Equip;
  var Scene_Status: typeof _Scene_Status;
  var Scene_Options: typeof _Scene_Options;
  var Scene_File: typeof _Scene_File;
  var Scene_Save: typeof _Scene_Save;
  var Scene_Load: typeof _Scene_Load;
  var Scene_GameEnd: typeof _Scene_GameEnd;
  var Scene_Shop: typeof _Scene_Shop;
  var Scene_Name: typeof _Scene_Name;
  var Scene_Debug: typeof _Scene_Debug;
  var Scene_Battle: typeof _Scene_Battle;
  var Scene_Gameover: typeof _Scene_Gameover;
  var Sprite_Clickable: typeof _Sprite_Clickable;
  var Sprite_Button: typeof _Sprite_Button;
  var Sprite_Character: typeof _Sprite_Character;
  var Sprite_Battler: typeof _Sprite_Battler;
  var Sprite_Actor: typeof _Sprite_Actor;
  var Sprite_Enemy: typeof _Sprite_Enemy;
  var Sprite_Animation: typeof _Sprite_Animation;
  var Sprite_AnimationMV: typeof _Sprite_AnimationMV;
  var Sprite_Battleback: typeof _Sprite_Battleback;
  var Sprite_Damage: typeof _Sprite_Damage;
  var Sprite_Gauge: typeof _Sprite_Gauge;
  var Sprite_Name: typeof _Sprite_Name;
  var Sprite_StateIcon: typeof _Sprite_StateIcon;
  var Sprite_StateOverlay: typeof _Sprite_StateOverlay;
  var Sprite_Weapon: typeof _Sprite_Weapon;
  var Sprite_Balloon: typeof _Sprite_Balloon;
  var Sprite_Picture: typeof _Sprite_Picture;
  var Sprite_Timer: typeof _Sprite_Timer;
  var Sprite_Destination: typeof _Sprite_Destination;
  var Spriteset_Base: typeof _Spriteset_Base;
  var Spriteset_Map: typeof _Spriteset_Map;
  var Spriteset_Battle: typeof _Spriteset_Battle;
  var Window_Base: typeof _Window_Base;
  var Window_Scrollable: typeof _Window_Scrollable;
  var Window_Selectable: typeof _Window_Selectable;
  var Window_Command: typeof _Window_Command;
  var Window_HorzCommand: typeof _Window_HorzCommand;
  var Window_Help: typeof _Window_Help;
  var Window_Gold: typeof _Window_Gold;
  var Window_StatusBase: typeof _Window_StatusBase;
  var Window_MenuCommand: typeof _Window_MenuCommand;
  var Window_MenuStatus: typeof _Window_MenuStatus;
  var Window_MenuActor: typeof _Window_MenuActor;
  var Window_ItemCategory: typeof _Window_ItemCategory;
  //@ts-ignore
  var Window_ItemList: typeof _Window_ItemList;
  var Window_SkillType: typeof _Window_SkillType;
  var Window_SkillStatus: typeof _Window_SkillStatus;
  var Window_SkillList: typeof _Window_SkillList;
  var Window_EquipStatus: typeof _Window_EquipStatus;
  var Window_EquipCommand: typeof _Window_EquipCommand;
  var Window_EquipSlot: typeof _Window_EquipSlot;
  var Window_EquipItem: typeof _Window_EquipItem;
  var Window_Status: typeof _Window_Status;
  var Window_StatusParams: typeof _Window_StatusParams;
  var Window_StatusEquip: typeof _Window_StatusEquip;
  var Window_Options: typeof _Window_Options;
  var Window_SavefileList: typeof _Window_SavefileList;
  var Window_ShopCommand: typeof _Window_ShopCommand;
  var Window_ShopBuy: typeof _Window_ShopBuy;
  var Window_ShopSell: typeof _Window_ShopSell;
  var Window_ShopNumber: typeof _Window_ShopNumber;
  var Window_ShopStatus: typeof _Window_ShopStatus;
  var Window_NameEdit: typeof _Window_NameEdit;
  var Window_NameInput: typeof _Window_NameInput;
  var Window_NameBox: typeof _Window_NameBox;
  var Window_ChoiceList: typeof _Window_ChoiceList;
  var Window_NumberInput: typeof _Window_NumberInput;
  var Window_EventItem: typeof _Window_EventItem;
  var Window_Message: typeof _Window_Message;
  var Window_ScrollText: typeof _Window_ScrollText;
  var Window_MapName: typeof _Window_MapName;
  var Window_BattleLog: typeof _Window_BattleLog;
  var Window_PartyCommand: typeof _Window_PartyCommand;
  var Window_ActorCommand: typeof _Window_ActorCommand;
  var Window_BattleStatus: typeof _Window_BattleStatus;
  var Window_BattleActor: typeof _Window_BattleActor;
  var Window_BattleEnemy: typeof _Window_BattleEnemy;
  var Window_BattleSkill: typeof _Window_BattleSkill;
  var Window_BattleItem: typeof _Window_BattleItem;
  var Window_TitleCommand: typeof _Window_TitleCommand;
  var Window_GameEnd: typeof _Window_GameEnd;
  var Window_DebugRange: typeof _Window_DebugRange;
  var Window_DebugEdit: typeof _Window_DebugEdit;
}
