export declare const vFuncs: {
    readonly txt: (value: any) => string;
    readonly nmb: (value: any) => number;
    readonly bol: (value: any) => boolean;
};
export declare const fldfn: {
    readonly text: readonly [import("../../..").InputComponent, "txt"];
    readonly numeric: readonly [import("../../..").CounterComponent, "nmb"];
    readonly boolean: readonly [import("../../..").CheckBoxComponent, "bol"];
    readonly checkbox: readonly [import("../../..").CheckBoxComponent, "bol"];
    readonly radio: readonly [import("../../..").RadioButtonComponent, "bol"];
    readonly toggle: readonly [import("../../..").ToggleComponent, "bol"];
    readonly rater: readonly [import("../../..").RaterComponent, "nmb"];
    readonly slider: readonly [import("../../..").SliderComponent, "nmb"];
    readonly counter: readonly [import("../../..").CounterComponent, "nmb"];
    readonly input: readonly [import("../../..").InputComponent, "txt"];
    readonly password: readonly [import("../../../types/components/atoms/psw").PasswordComponent, "txt"];
};
