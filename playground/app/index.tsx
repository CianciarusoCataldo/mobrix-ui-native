/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button, setComponentTheme } from "@/src/mobrix-ui-native-preview";

const Home = () => {
  setComponentTheme("button", {
    light: {
      backgroundColor: "red",
      color: "#1b1b1b",
    },
    dark: {
      backgroundColor: "blue",
      color: "#ffffff",
    },
  });

  const [dark, setDark] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [animated, setAnimated] = useState(true);

  return (
    <View style={styles.container}>
      <Button
        onClick={() => {
          setDark(!dark);
        }}
        dark={dark}
        shadow={shadow}
        animated={animated}
      >
        Switch dark
      </Button>
      <Button
        animation="fade-in"
        onClick={() => {
          setShadow(!shadow);
        }}
        dark={dark}
        shadow={shadow}
        animated={animated}
      >
        Switch shadow
      </Button>
      <Button
        animation="fade-in"
        onClick={() => {
          setAnimated(!animated);
        }}
        dark={dark}
        shadow={shadow}
        animated={animated}
      >
        Switch animated
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    width: "100%",
  },
});

export default Home;
