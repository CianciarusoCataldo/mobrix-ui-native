// import "../styles/core/index.css";

import React, { useEffect, useRef } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Animated,
} from "react-native";
import {
  BuilderProps,
  BuilderPropsReactive,
  MbxSharedProps,
  Wrappers,
} from "../../types/global";

import { D_PROPS, properties } from "./constants";
import { getTheme } from "../styles/core/theme";
import { Theme } from "../../types/global/global";
import AnimatedMbxView from "./AnimatedMbxView";

const wrappers: Record<Wrappers, any> = {
  Button,
  TouchableOpacity,
  Pressable,
  Text,
  View,
};

export const extractStyles = (
  { dark: darkTheme = {}, light = {}, common = {} }: Theme,
  dark: boolean
) => (dark ? { ...common, ...darkTheme } : { ...common, ...light });

export const parseProps = (props: MbxSharedProps): MbxSharedProps => ({
  ...D_PROPS,
  ...props,
  ...(props.unstyled && {
    shadow: false,
    background: false,
    animated: false,
    hover: false,
  }),
  ...(props.disabled && {
    animated: false,
    hover: false,
    a11y: false,
    active: false,
  }),
  ...(!props.animated && {
    animation: undefined,
  }),
});

const getMbxUiStandard = ({
  name,
  Component,
  /* istanbul ignore next */
  mbxProps: cprops = {},
  wrapper = "View",
  styles = [],
  addProps = {},
  animate = "none",
  onPress: pressCallback = () => {},
}: BuilderProps) => {
  const Wrapper = wrapper;
  const props: MbxSharedProps & Record<string, any> = {
    ...cprops.props,
    ...addProps,
  };
  const scale = useRef(new Animated.Value(1)).current;
  const settings = properties[wrapper];

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onPress = () => {
    startAnimation();
    pressCallback();
  };
  const theme = getTheme();
  const baseTheme = extractStyles(theme.main, cprops.dark);
  const activeTheme = extractStyles(theme[name], cprops.dark);

  const standardStyles = StyleSheet.create({
    main: activeTheme,
    extra: styles,
    custom: cprops.style,
    base: baseTheme,
    shadow: cprops.shadow ? extractStyles(theme.shadow, cprops.shadow) : {},
    text: {
      color: activeTheme?.color || baseTheme.color,
    },
  });

  const NativeWrapper = wrappers[Wrapper];

  const FinalComponent = ({
    internalOnPress = () => {},
  }: {
    internalOnPress?: () => void;
  }) => (
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
      {...(settings.pressable && {
        onPress: () => {
          internalOnPress();
          onPress();
        },
        activeOpacity: 0.8,
      })}
    />
  );

  return cprops.animated ? (
    <AnimatedMbxView
      settings={{
        fadeIn: cprops.animation === "fade-in",
        scale: animate === "scale",
      }}
      internalOnPress={onPress}
      Children={FinalComponent}
    />
  ) : (
    <FinalComponent />
  );
};

// prettier-ignore
const getMbxUiReactive = <T=any>({
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

  return getMbxUiStandard({
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
) => getMbxUiStandard(parse(props, callback));

// prettier-ignore
export const buildMbxReactive = <T=any>(
  props: Record<string, any>,
  callback: (props:MbxSharedProps) => BuilderPropsReactive<T>
) => getMbxUiReactive<T>(parse(props, callback));
