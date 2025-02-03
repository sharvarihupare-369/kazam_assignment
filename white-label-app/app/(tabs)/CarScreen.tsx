import React from "react";
import { View } from "react-native";
import { DrawerNavigator } from "../navigators/DrawerComponent";

export default function CarScreen() {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator/>
    </View>
  );
}
