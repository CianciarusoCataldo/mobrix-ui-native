import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from "react-native";

import { AppleComponent } from "./types";
import { appleStages } from "./constants";

const windowWidth = Dimensions.get("window").width;
const dynamicWidth = windowWidth * 0.5;

export const Apple: AppleComponent = ({
  callback = () => {},
  style = {},
  height,
  width,
  start = 0,
  max = appleStages.length,
}) => {
  const [stage, setStage] = useState(start);
  const scale = useRef(new Animated.Value(1)).current;
  const limit = Math.min(max + 1, appleStages.length);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [stage, scale]);

  const handlePress = () => {
    const nextStage = (stage + 1) % limit;
    callback(nextStage);
    setStage(nextStage);
  };

  return (
    <Pressable onPress={handlePress} style={internalStyles.pressableContainer}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Image
          testID="apple-component"
          source={appleStages[stage]}
          style={[
            style,
            {
              width: width || dynamicWidth,
              height: height || dynamicWidth,
            },
          ]}
          resizeMode="contain"
        />
      </Animated.View>
    </Pressable>
  );
};

const internalStyles = StyleSheet.create({
  pressableContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Apple;
