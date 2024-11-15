import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

const AnimatedMbxView = ({
  internalOnPress,
  Children,
  settings,
}: {
  internalOnPress: () => void;
  settings: {
    fadeIn?: boolean;
    scale?: boolean;
    pressable?: boolean;
  };
  Children: ({
    internalOnPress,
  }: {
    internalOnPress?: () => void;
  }) => JSX.Element;
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1, // Opacità finale
      duration: 300, // Durata in millisecondi
      useNativeDriver: true, // Usa il driver nativo per migliori performance
    }).start();
  }, [opacity]);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onPress = () => {
    startAnimation();
    internalOnPress();
  };

  return (
    <Animated.View
      style={{
        ...{ ...(settings.scale && { transform: [{ scale }] }) },
        ...{ ...(settings.fadeIn && { opacity }) },
      }}
    >
      <Children internalOnPress={onPress} />
    </Animated.View>
  );
};

export default AnimatedMbxView;
