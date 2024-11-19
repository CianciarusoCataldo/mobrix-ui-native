import { Theme } from "../../../types/global/global";

let theme: Record<"main" | "shadow" | "button" | "check" | "code", Theme> = {
  main: {
    light: {
      backgroundColor: "#e9e9e9",
      color: "#1b1b1b",
    },
    dark: {
      backgroundColor: "#1d232e",
      color: "#ffffff",
    },
  },
  shadow: {
    common: {
      shadowOpacity: 0.8,
      elevation: 15,
    },
    light: {
      shadowColor: "#000",
    },
    dark: {
      shadowColor: "#000",
    },
  },
  button: {},
  check: {},
  code: {},
};

export const setTheme = (newTheme: typeof theme) => {
  theme = newTheme;
};

export const setComponentTheme = (
  component: keyof typeof theme,
  newTheme: { light?: Record<string, any>; dark?: Record<string, any> }
) => {
  theme[component] = newTheme;
};

export const getTheme = () => theme;
