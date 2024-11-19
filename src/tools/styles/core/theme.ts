import { Theme } from "../../../types/global/global";

let theme: Record<"main" | "shadow" | "button" | "check", Theme> = {
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
      shadowOpacity: 0.8, // opacità dell'ombra
      // Ombra per Android
      elevation: 15, // elevate per Android
    },
    light: {
      shadowColor: "#000", // colore dell'ombra
    },
    dark: {
      shadowColor: "#000", // colore dell'ombra
    },
  },
  button: {},
  check: {},
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
