import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Box from "../../atoms/Box";

import {
  Button,
  MbxUiProps,
  MoBrixAnimation,
} from "@/src/mobrix-ui-native-preview";

const ToolBox = ({
  children: Children,
  addProps = {},
  name,
}: {
  children: (props: MbxUiProps & Record<string, unknown>) => JSX.Element;
  addProps?: Record<string, unknown>;
  name?: string;
}) => {
  const [dark, setDark] = useState(false);
  const [a11y, setA11y] = useState(true);
  const [shadow, setShadow] = useState(false);
  const [animated, setAnimated] = useState(true);
  const [background, enableBackground] = useState(true);
  const [animation, setAnimation] = useState<number>(0);

  const animations: (MoBrixAnimation | undefined)[] = [
    undefined,
    "fade-in",
    "fade-out",
    "slide-in-left",
    "slide-in-right",
    "slide-in-top",
    "slide-in-bottom",
    "slide-out-left",
    "slide-out-right",
    "slide-out-top",
    "slide-out-bottom",
    "shake",
    "scale",
  ];

  return (
    <View style={[internalStyles.main, internalStyles.container]}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 15,
        }}
      >
        {name || Children.name}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Box
          style={internalStyles.box}
          value={dark}
          text="Dark"
          onClick={() => {
            setDark(!dark);
          }}
        />
        <Box
          style={internalStyles.box}
          value={shadow}
          text="Shadow"
          onClick={() => {
            setShadow(!shadow);
          }}
        />

        <Box
          style={internalStyles.box}
          value={background}
          onClick={() => {
            enableBackground(!background);
          }}
          text="Background"
        />

        <Box
          style={internalStyles.box}
          value={a11y}
          onClick={() => {
            setA11y(!a11y);
          }}
          text="A11y"
        />

        <Box
          style={internalStyles.box}
          value={animated}
          onClick={() => {
            setAnimated(!animated);
          }}
          text="Animated"
        />
        <Button
          dark
          style={internalStyles.animationButton}
          onClick={() => {
            setAnimation((animation + 1) % animations.length);
          }}
        >
          Change animation
        </Button>
        <Text
          style={{ fontWeight: "bold" }}
        >{`Actual : ${animations[animation]}`}</Text>
      </View>
      <View
        style={[
          internalStyles.container,
          {
            marginTop: 50,
            marginBottom: 20,
          },
        ]}
      >
        <Children
          dark={dark}
          shadow={shadow}
          animated={animated}
          animation={animations[animation]}
          background={background}
          a11y={a11y}
          {...addProps}
        />
      </View>
    </View>
  );
};

const internalStyles = StyleSheet.create({
  box: {
    marginTop: 10,
    marginBottom: 10,
  },
  animationButton: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    backgroundColor: "#adafaa",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default ToolBox;
