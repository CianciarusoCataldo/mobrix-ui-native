/** Required to init i18next */
import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { usePageTitlesTranslations } from "@/src/hooks/localization";

export default function Settings() {
  const t = usePageTitlesTranslations();

  return (
    <View style={styles.container}>
      <Text>{t("settings")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
