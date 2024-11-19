import { MbxUiNativeAnimationAttributes, MoBrixAnimation } from "../../types";
export declare const defaultAnimationValues: MbxUiNativeAnimationAttributes;
export declare const animationsMap: Record<MoBrixAnimation, {
    initial: MbxUiNativeAnimationAttributes;
    steps: {
        toValue: any;
        duration?: number;
    }[];
    duration?: number;
}>;
