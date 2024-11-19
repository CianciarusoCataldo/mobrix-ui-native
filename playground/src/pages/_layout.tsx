import { Tabs } from "expo-router";
import React from "react";

import { usePageTitlesTranslations } from "../hooks/localization";

export default function Layout() {
  const t = usePageTitlesTranslations();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: t("home"), // Titolo personalizzato per la tab "index"
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t("settings"),
        }}
      />
    </Tabs>
  );
}
