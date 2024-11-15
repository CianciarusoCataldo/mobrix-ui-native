import { Theme } from "../../../types/global/global";

let theme: Record<"main" | "shadow" | "button", Theme> = {
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
      shadowOffset: { width: 0, height: 4 }, // offset dell'ombra
      shadowOpacity: 0.5, // opacità dell'ombra
      shadowRadius: 2, // raggio dell'ombra
      // Ombra per Android
      elevation: 25, // elevate per Android
    },
    light: {
      shadowColor: "#000", // colore dell'ombra
    },
    dark: {
      shadowColor: "#000", // colore dell'ombra
    },
  },
  button: {},
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
