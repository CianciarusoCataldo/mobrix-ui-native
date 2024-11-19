import { useTranslation } from "react-i18next";

/**
 * Get an i18next T function for a specific namespace
 *
 * @param ns namespace
 */
const getTFunction = (ns: string) => {
  const { t } = useTranslation(ns);
  return t;
};

/**
 * Get an i18next T function for the `common` namespace
 *
 * @returns an i18next TFunction for `common` namespace
 */
export const useCommonTranslations = () => getTFunction("common");

/**
 * Get an i18next T function for the `home` namespace
 *
 * @returns an i18next TFunction for `home` namespace
 */
export const useHomeTranslations = () => getTFunction("home");

/**
 * Get an i18next T function for `settings` namespace
 *
 * @returns an i18next TFunction for `settings` namespace
 */
export const useSettingsTranslations = () => getTFunction("settings");

/**
 * Get an i18next T function for `page-titles` namespace
 *
 * @returns an i18next TFunction for `page-titles` namespace
 */
export const usePageTitlesTranslations = () => getTFunction("page-titles");
