// import "../styles/core/index.css";

import React from "react";
import { AccessibilityProps, StyleSheet, Text } from "react-native";

import {
  BuilderProps,
  BuilderPropsReactive,
  MbxSharedProps,
} from "../../types/global";

import { extractStyles, parseProps } from "./utils";
import { nativeWrappers } from "./constants";
import { getTheme } from "../styles/core/theme";
import { MbxUiNativeAnimatedViewProps } from "../../types/global/new";

import AnimatedMbxView from "../animations-manager/AnimatedMbxView";

export const buildMbxStandardComponent = ({
  name,
  Component,
  /* istanbul ignore next */
  mbxProps: cprops = {},
  wrapper = "View",
  styles = [],
  addProps = {},
  parseProps = () => ({}),
}: BuilderProps) => {
  const theme = getTheme();
  const baseTheme = extractStyles(theme.main, cprops.dark);
  const activeTheme = extractStyles(theme[name] || {}, cprops.dark);

  const standardStyles = StyleSheet.create({
    main: activeTheme,
    extra: styles,
    custom: cprops.style,
    base: baseTheme,
    shadow: cprops.shadow ? extractStyles(theme.shadow, cprops.dark) : {},
    text: {
      color: activeTheme?.color || baseTheme.color,
    },
    background: cprops.background ? {} : { backgroundColor: "transparent" },
  });

  const NativeWrapper = nativeWrappers[wrapper];

  const Children: MbxUiNativeAnimatedViewProps["children"] = ({ animate }) => {
    const parsedProps = parseProps({
      funcs: { animate },
    });
    const props: MbxSharedProps & Record<string, any> = {
      ...cprops.props,
      ...addProps,
      ...parsedProps,
    };

    const a11yProps: AccessibilityProps = cprops.a11y
      ? {}
      : {
          importantForAccessibility: "no",
          accessible: false,
        };
    return (
      <NativeWrapper
        // @ts-ignore
        {...props}
        {...(Component && {
          children:
            typeof Component === "string" ? (
              <Text {...a11yProps} style={standardStyles.text}>
                {Component}
              </Text>
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
          standardStyles.background,
        ]}
        key={cprops.key}
        focusable={cprops.a11y}
        {...a11yProps}
        {...(cprops.animated && {
          activeOpacity: 0.8,
        })}
      />
    );
  };

  return (
    <AnimatedMbxView animation={cprops.animation}>{Children}</AnimatedMbxView>
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
