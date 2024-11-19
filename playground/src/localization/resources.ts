import commonEn from "@locales/en/common.json";
import commonIt from "@locales/it/common.json";
import homeEn from "@locales/en/home.json";
import homeIt from "@locales/en/home.json";
import settingsEn from "@locales/en/settings.json";
import settingsIt from "@locales/en/settings.json";
import pageTitlesEn from "@locales/en/page-titles.json";
import pageTitlesIt from "@locales/it/page-titles.json";
import { InitOptions } from "i18next";

/**
 * Strings loaded for every language and for every namespace,
 * the `resources` field in {@link https://www.i18next.com/overview/configuration-options}
 */
export default {
  en: {
    common: commonEn,
    home: homeEn,
    settings: settingsEn,
    "page-titles": pageTitlesEn,
  },
  it: {
    common: commonIt,
    home: homeIt,
    settings: settingsIt,
    "page-titles": pageTitlesIt,
  },
} as InitOptions["resources"];
