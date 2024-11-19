import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import {
  BuilderComponentProps,
  MbxUiNativeAnimatedViewProps,
  MoBrixAnimation,
} from "../../types/global";
import { animationsMap, defaultAnimationValues } from "./constants";

const getAnimatedSequence = (
  value: Animated.AnimatedValue | Animated.AnimatedValueXY,
  animation: MoBrixAnimation
) => {
  return Animated.sequence(
    animationsMap[animation].steps.map((step) =>
      Animated.timing(value, {
        useNativeDriver: true,
        duration: step.duration || animationsMap[animation].duration || 200,
        toValue: step.toValue,
      })
    )
  );
};

const AnimatedMbxView = ({
  children: Children,
  animation,
}: MbxUiNativeAnimatedViewProps) => {
  const initialValues = animation
    ? animationsMap[animation].initial
    : defaultAnimationValues;
  const scale = useRef(new Animated.Value(initialValues.scale)).current;
  const opacity = useRef(new Animated.Value(initialValues.opacity)).current;
  const translatexy = useRef(
    new Animated.ValueXY(initialValues.translate)
  ).current;

  const animations: Record<MoBrixAnimation, Animated.Value | Animated.ValueXY> =
    {
      "fade-in": opacity,
      "fade-out": opacity,
      shake: translatexy,
      scale: scale,
      "slide-in-left": translatexy,
      "slide-in-right": translatexy,
      "slide-in-top": translatexy,
      "slide-in-bottom": translatexy,
      "slide-out-left": translatexy,
      "slide-out-right": translatexy,
      "slide-out-top": translatexy,
      "slide-out-bottom": translatexy,
    };

  useEffect(() => {
    if (animation) {
      opacity.setValue(animationsMap[animation].initial.opacity);
      scale.setValue(animationsMap[animation].initial.scale);
      translatexy.setValue(animationsMap[animation].initial.translate);

      getAnimatedSequence(animations[animation], animation).start();
    }
  }, [animation]);

  const styles = StyleSheet.create({
    main: {
      transform: [
        { scale },
        { translateX: translatexy.x },
        { translateY: translatexy.y },
      ],
      opacity,
    },
  });
  return (
    <Animated.View style={styles.main}>
      <Children
        animate={(anim) => getAnimatedSequence(animations[anim], anim).start()}
      />
    </Animated.View>
  );
};

export default AnimatedMbxView;
