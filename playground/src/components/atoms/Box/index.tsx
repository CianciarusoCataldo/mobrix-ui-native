import React from "react";
import { Text, View } from "react-native";

import { CheckBox } from "@/src/mobrix-ui-native-preview";

const Box = ({
  text,
  onClick,
  value,
  style,
}: {
  text: string;
  onClick: () => void;
  value: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: Record<string, any>;
}) => {
  return (
    <View
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        {text}
      </Text>
      <CheckBox value={value} dark onChange={onClick} />
    </View>
  );
};

export default Box;
