import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { BuilderComponentProps } from "../../types/global";

const AnimatedMbxView = ({
  Children,
  settings,
}: {
  settings: {
    fadeIn?: boolean;
    scale?: boolean;
    pressable?: boolean;
  };
  Children: ({ animations }: BuilderComponentProps) => JSX.Element;
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

  const styles = StyleSheet.create({
    main: {
      ...{ ...(settings.scale && { transform: [{ scale }] }) },
      ...{ ...(settings.fadeIn && { opacity }) },
    },
  });
  return (
    <Animated.View style={styles.main}>
      <Children animations={{ startScale: startAnimation }} />
    </Animated.View>
  );
};

export default AnimatedMbxView;
