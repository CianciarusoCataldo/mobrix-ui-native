import React from "react";
import { ScrollView } from "react-native";

import "@src/localization";

import {
  Button,
  CheckBox,
  CodeBox,
  Counter,
  Divider,
} from "../mobrix-ui-native-preview";
import ToolBox from "../components/molecules/ToolBox";

export default function Home() {
  // setComponentTheme("check", {
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
      <ToolBox>
        {(props) => (
          <>
            <Counter key="cnt-no-arr" {...props} style={{ marginBottom: 15 }} />
            <Counter {...props} arrows={false} />
          </>
        )}
      </ToolBox>
      <ToolBox wrapperStyle={{ flex: 1 }}>{Divider}</ToolBox>
    </ScrollView>
  );
}
