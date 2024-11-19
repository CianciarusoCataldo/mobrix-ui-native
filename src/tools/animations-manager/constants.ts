import { MbxUiNativeAnimationAttributes, MoBrixAnimation } from "../../types";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const defaultAnimationValues: MbxUiNativeAnimationAttributes = {
  opacity: 1,
  translate: { x: 0, y: 0 },
  scale: 1,
};

export const animationsMap: Record<
  MoBrixAnimation,
  {
    initial: MbxUiNativeAnimationAttributes;
    steps: { toValue: any; duration?: number }[];
    duration?: number;
  }
> = {
  "fade-in": {
    initial: {
      ...defaultAnimationValues,
      opacity: 0,
    },
    steps: [{ toValue: 1 }],
    duration: 200,
  },
  "fade-out": {
    initial: defaultAnimationValues,
    steps: [{ toValue: 0 }],
    duration: 200,
  },
  "slide-in-bottom": {
    initial: {
      ...defaultAnimationValues,
      translate: { x: 0, y: height },
    },
    steps: [{ toValue: defaultAnimationValues.translate }],
  },
  "slide-in-left": {
    initial: {
      ...defaultAnimationValues,
      translate: { x: -width, y: 0 },
    },
    steps: [{ toValue: defaultAnimationValues.translate }],
  },
  "slide-in-right": {
    initial: {
      ...defaultAnimationValues,
      translate: { x: width, y: 0 },
    },
    steps: [{ toValue: defaultAnimationValues.translate }],
  },
  "slide-in-top": {
    initial: {
      ...defaultAnimationValues,
      translate: { x: 0, y: -height },
    },
    steps: [{ toValue: defaultAnimationValues.translate }],
  },
  "slide-out-bottom": {
    initial: defaultAnimationValues,
    steps: [{ toValue: { x: 0, y: height } }],
  },
  "slide-out-left": {
    initial: defaultAnimationValues,
    steps: [{ toValue: { x: -width, y: 0 } }],
  },
  "slide-out-right": {
    initial: defaultAnimationValues,
    steps: [{ toValue: { x: width, y: 0 } }],
  },
  "slide-out-top": {
    initial: defaultAnimationValues,
    steps: [{ toValue: { y: -height, x: 0 } }],
  },
  scale: {
    initial: defaultAnimationValues,
    steps: [
      {
        toValue: 0.95,
      },
      {
        toValue: 1,
      },
    ],
  },
  shake: {
    initial: defaultAnimationValues,
    steps: [
      {
        toValue: { x: -10, y: -5 },
      },
      {
        toValue: { x: 10, y: 5 },
      },
      {
        toValue: { x: -10, y: 5 },
      },
      {
        toValue: { x: 10, y: -5 },
      },
      {
        toValue: { x: 0, y: 0 }, // Torna al centro
      },
    ],
    duration: 50,
  },
};
