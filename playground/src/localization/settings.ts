import { getLocales } from "expo-localization";
import { InitOptions } from "i18next";

import resources from "./resources";

/** Default language */
const DEFAULT_LANG = "en";

/** i18next settings for Turn me in Apple app, for more details about every i18next setting, go to {@link https://www.i18next.com/overview/configuration-options}  */
export default {
  resources,

  lng: getLocales()[0].languageCode || DEFAULT_LANG,

  fallbackLng: DEFAULT_LANG,

  ns: ["common", "home", "settings", "page-titles"],

  defaultNS: "common",

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },

  /** Set this to true to see detailed logs in your local environment (never commit it) */
  debug: false,
} as InitOptions;
