import React from "react";
import { View } from "react-native";
import Header from "./src/components/Header/Header";
import Main from "./src/components/Main/Main";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Main />
    </View>
  );
}
