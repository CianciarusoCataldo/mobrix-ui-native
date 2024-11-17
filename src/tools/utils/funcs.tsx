// import "../styles/core/index.css";

import React from "react";
import { StyleSheet, Text } from "react-native";

import {
  BuilderProps,
  BuilderPropsReactive,
  MbxSharedProps,
} from "../../types/global";

import { extractStyles, parseProps } from "./utils";
import { nativeWrappers, properties } from "./constants";
import { getTheme } from "../styles/core/theme";
import AnimatedMbxView from "./AnimatedMbxView";
import { BuilderComponentProps } from "../../types/global";

export const buildMbxStandardComponent = ({
  name,
  Component,
  /* istanbul ignore next */
  mbxProps: cprops = {},
  wrapper = "View",
  styles = [],
  addProps = {},
  animate = "none",
  parseProps = () => ({}),
}: BuilderProps) => {
  const theme = getTheme();
  const baseTheme = extractStyles(theme.main, cprops.dark);
  const activeTheme = extractStyles(theme[name], cprops.dark);

  const standardStyles = StyleSheet.create({
    main: activeTheme,
    extra: styles,
    custom: cprops.style,
    base: baseTheme,
    shadow: cprops.shadow ? extractStyles(theme.shadow, cprops.dark) : {},
    text: {
      color: activeTheme?.color || baseTheme.color,
    },
  });

  const settings = properties[wrapper];

  const NativeWrapper = nativeWrappers[wrapper];

  const Children = (childrenprops: BuilderComponentProps) => {
    const parsedProps = parseProps(childrenprops);
    const props: MbxSharedProps & Record<string, any> = {
      ...cprops.props,
      ...addProps,
      ...parsedProps,
    };

    return (
      <NativeWrapper
        // @ts-ignore
        {...props}
        {...(Component && {
          children:
            typeof Component === "string" ? (
              <Text style={standardStyles.text}>{Component}</Text>
            ) : (
              Component
            ),
        })}
        style={[
          standardStyles.base,
          standardStyles.shadow,
          standardStyles.main,
          standardStyles.extra,
          standardStyles.custom,
        ]}
        key={cprops.key}
        {...(settings.pressable &&
          cprops.animated && {
            activeOpacity: 0.8,
          })}
      />
    );
  };

  return (
    <AnimatedMbxView
      settings={
        cprops.animated && {
          fadeIn: cprops.animation === "fade-in",
          scale: animate === "scale",
        }
      }
      Children={Children}
    />
  );
};

// prettier-ignore
export const getMbxUiReactive = <T=any>({
  defV,
  inpV,
  props,
  Component,
  ...bprops
}: BuilderPropsReactive<T>) => {
  const [value, setValue] = React.useState<T>(inpV || defV);

  const parsed = props ? props(value, setValue) : {};

  /* istanbul ignore next */
  React.useEffect(() => {
    if (
      inpV !== undefined &&
      inpV !== null &&
      value !== inpV
    ) {
      setValue(inpV);
    }
  }, [JSON.stringify(inpV)]);

  return buildMbxStandardComponent({
    Component: Component && Component({ value, setValue }),
    ...bprops,
    ...parsed,
  });
};

const parse = (
  /* istanbul ignore next */
  props,
  callback
) => {
  const input = parseProps(props);
  const bProps = callback(input);
  return {
    mbxProps: input,
    ...bProps,
  };
};

export const buildMbxStandard = (
  /* istanbul ignore next */
  props: Record<string, any>,
  callback: (props: MbxSharedProps) => BuilderProps
) => buildMbxStandardComponent(parse(props, callback));

// prettier-ignore
export const buildMbxReactive = <T=any>(
  props: Record<string, any>,
  callback: (props:MbxSharedProps) => BuilderPropsReactive<T>
) => getMbxUiReactive<T>(parse(props, callback));
