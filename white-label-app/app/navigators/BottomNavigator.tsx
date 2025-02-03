// BottomNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../HomeScreen";
import MapScreen from "../(tabs)/CarScreen";

const BottomTab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Map" component={MapScreen} />
    </BottomTab.Navigator>
  );
};
