import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import settings from "./settings";

/** Avoid multiple i18next init */
if (!i18n.isInitialized) {
  /** Init an i18next instance with our custom settings inside `settings` file (it is separated from this file to make it more reusable) */
  i18n.use(initReactI18next).init(settings);
}

/** Turn me in apple i18next instance */
export default i18n;
