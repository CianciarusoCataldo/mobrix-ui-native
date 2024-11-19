import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import "@src/localization";

import {
  Button,
  CheckBox,
  CodeBox,
  MbxUiProps,
  MoBrixAnimation,
  setComponentTheme,
} from "../mobrix-ui-native-preview";

const ToolBox = ({
  children: Children,
  addProps = {},
}: {
  children: (props: MbxUiProps & Record<string, unknown>) => JSX.Element;
  addProps?: Record<string, unknown>;
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
    <View style={[styles.main, styles.container]}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <Button
          dark
          style={styles.button}
          onClick={() => {
            setDark(!dark);
          }}
        >
          Enable/disable dark mode
        </Button>
        <Button
          dark
          style={styles.button}
          onClick={() => {
            setShadow(!shadow);
          }}
        >
          Enable/disable shadow
        </Button>
        <Button
          dark
          style={styles.button}
          onClick={() => {
            enableBackground(!background);
          }}
        >
          Enable/disable background
        </Button>
        <Button
          dark
          style={styles.button}
          onClick={() => {
            setA11y(!a11y);
          }}
        >
          Enable/disable a11y
        </Button>
        <Button
          dark
          style={styles.button}
          onClick={() => {
            setAnimated(!animated);
          }}
        >
          Enable/disable animations
        </Button>
        <Button
          dark
          style={styles.button}
          onClick={() => {
            setAnimation((animation + 1) % animations.length);
          }}
        >
          {`Change animation
      
      Actual : ${animations[animation]}`}
        </Button>
      </View>
      <View style={styles.container}>
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

export default function Home() {
  setComponentTheme("check", {
    light: {
      backgroundColor: "red",
      color: "#1b1b1b",
    },
    dark: {
      backgroundColor: "blue",
      color: "#ffffff",
    },
  });

  return (
    <ScrollView style={{ width: "100%", height: "100%", overflow: "scroll" }}>
      <ToolBox
        addProps={{
          onClick: () => {
            alert("Button clicked");
          },
          children: "Button component",
        }}
      >
        {Button}
      </ToolBox>
      <ToolBox>{CheckBox}</ToolBox>
      <ToolBox addProps={{ value: "npm i mobrix-ui-native" }}>
        {CodeBox}
      </ToolBox>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    backgroundColor: "#adafaa",
    paddingTop: 20,
    paddingBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
