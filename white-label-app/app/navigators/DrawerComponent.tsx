import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { DummyScreen1 } from "../DummyScreen1";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#121212",
          width: 240,
        },
        drawerContentStyle: {
          backgroundColor: "#121212",
        },
        drawerActiveTintColor: "#00ff00",
        drawerInactiveTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#1e1e1e",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <Drawer.Screen name="Car" component={StackNavigator} />
      <Drawer.Screen name="DummyScreen 1  " component={DummyScreen1} />
    </Drawer.Navigator>
  );
};
