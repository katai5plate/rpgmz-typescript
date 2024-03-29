/// <reference path="../../../global.d.ts" />
export default class Sprite_Gauge extends Sprite {
    _battler: unknown;
    _statusType: unknown;
    _value: number;
    _maxValue: number;
    _targetValue: unknown;
    _targetMaxValue: unknown;
    _duration: unknown;
    _flashingCount: number;
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    //@ts-expect-error
    destroy(options: any): void;
    createBitmap(): void;
    bitmapWidth(): number;
    bitmapHeight(): number;
    textHeight(): number;
    gaugeHeight(): number;
    gaugeX(): number;
    labelY(): number;
    labelFontFace(): any;
    labelFontSize(): number;
    valueFontFace(): any;
    valueFontSize(): number;
    setup(battler: any, statusType: any): void;
    update(): void;
    updateBitmap(): void;
    updateTargetValue(value: any, maxValue: any): void;
    smoothness(): 5 | 20;
    updateGaugeAnimation(): void;
    updateFlashing(): void;
    flashingColor1(): number[];
    flashingColor2(): number[];
    isValid(): any;
    currentValue(): any;
    currentMaxValue(): any;
    label(): any;
    gaugeBackColor(): any;
    gaugeColor1(): any;
    gaugeColor2(): any;
    labelColor(): any;
    labelOutlineColor(): string;
    labelOutlineWidth(): number;
    valueColor(): any;
    valueOutlineColor(): string;
    valueOutlineWidth(): number;
    redraw(): void;
    drawGauge(): void;
    drawGaugeRect(x: any, y: any, width: any, height: any): void;
    gaugeRate(): number;
    drawLabel(): void;
    setupLabelFont(): void;
    measureLabelWidth(): number;
    labelOpacity(): 255 | 160;
    drawValue(): void;
    setupValueFont(): void;
}
