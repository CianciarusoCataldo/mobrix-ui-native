import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import "@src/localization";

import {
  Button,
  CheckBox,
  MbxUiProps,
  MoBrixAnimation,
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
          flexDirection: "row",
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
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
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
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
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
  // setComponentTheme("button", {
  //   light: {
  //     backgroundColor: "red",
  //     color: "#1b1b1b",
  //   },
  //   dark: {
  //     backgroundColor: "blue",
  //     color: "#ffffff",
  //   },
  // });

  return (
    <View style={{ width: "100%", height: "100%", overflow: "scroll" }}>
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
    </View>
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
  },
  button: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
