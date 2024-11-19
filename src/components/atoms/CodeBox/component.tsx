import React from "react";
import { Image, Text, View } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

import {
  BuilderComponent,
  CodeBlock,
  CodeBoxProps,
  MbxUiComponent,
  SupportedEnvironment,
} from "../../../types";

import { getCode } from "./utils";

import { copyIcon } from "../../../assets";
import Button from "../Button";

const cdbComponent: MbxUiComponent<CodeBoxProps, BuilderComponent[]> = ({
  value = "",
  environment = "terminal",
  copyButton = true,
  disabled,
  hover,
  active,
  a11y,
}) => {
  const parse: (inp: string, env: SupportedEnvironment) => CodeBlock[] =
    value.length > 0 ? getCode : (inp, e) => [{ value: inp }];

  return [
    <Button
      a11y={a11y}
      key="cd_cp"
      onClick={() => value && Clipboard.setString(value)}
      hide={!copyButton}
      disabled={disabled}
      hover={hover}
      active={active}
      shadow={false}
      style={{ width: 25, height: 25, marginLeft: "auto" }}
      background={false}
    >
      <Image source={copyIcon} style={{ width: 25, height: 25 }} />
    </Button>,
    <View key="cd_cd">
      {value.split("\n").map((codl, lIndex) => (
        <Text style={{ margin: 0 }} key={`cd_l_${lIndex}`}>
          {parse(codl, environment).map((cBlock, bIndex) =>
            cBlock.code === " " ? (
              ` `
            ) : (
              <Text
                key={`cdb_bl_${bIndex}`}
                style={{ color: cBlock.color || "inherit" }}
              >
                {cBlock.code}
              </Text>
            )
          )}
        </Text>
      ))}
    </View>,
  ];
};

export default cdbComponent;
