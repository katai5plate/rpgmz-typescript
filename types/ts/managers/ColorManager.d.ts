/// <reference path="../../../global.d.ts" />
export default class ColorManager {
    _windowskin: unknown;
    static damageColor: (colorType: any) => "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080";
    static outlineColor: () => string;
    static dimColor1: () => string;
    static dimColor2: () => string;
    static itemBackColor1: () => string;
    static itemBackColor2: () => string;
    constructor();
    static loadWindowskin(): void;
    static textColor(n: any): any;
    static normalColor(): any;
    static systemColor(): any;
    static crisisColor(): any;
    static deathColor(): any;
    static gaugeBackColor(): any;
    static hpGaugeColor1(): any;
    static hpGaugeColor2(): any;
    static mpGaugeColor1(): any;
    static mpGaugeColor2(): any;
    static mpCostColor(): any;
    static powerUpColor(): any;
    static powerDownColor(): any;
    static ctGaugeColor1(): any;
    static ctGaugeColor2(): any;
    static tpGaugeColor1(): any;
    static tpGaugeColor2(): any;
    static tpCostColor(): any;
    static pendingColor(): any;
    static hpColor(actor: any): any;
    static mpColor(): any;
    static tpColor(): any;
    static paramchangeTextColor(change: any): any;
}
