import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Programa Saúde-2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 20,
    flex: 0.1,
    backgroundColor: "#d6d6d6ff",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#ff0059ff",
    fontWeight: "bold",
  },
});
