import { Theme } from "../../../types/global/global";

let theme: Record<
  "main" | "shadow" | "button" | "check" | "code" | "count" | "dvd",
  Theme
> = {
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
  count: {},
  dvd: {},
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

export const extractStyles = (
  { dark: darkTheme = {}, light = {}, common = {} }: Theme,
  dark: boolean
) => (dark ? { ...common, ...darkTheme } : { ...common, ...light });

export const extractAttribute = (
  attribute: string,
  key: keyof typeof theme,
  dark: boolean
) => {
  const mainTheme = extractStyles(theme.main, dark);
  const subTheme = extractStyles(theme[key] || {}, dark);

  return subTheme[attribute] || mainTheme[attribute];
};
// dark
//   ? darkTheme[attribute] || theme.main.dark[attribute]
//   : light[attribute] || theme.main.light[attribute];
