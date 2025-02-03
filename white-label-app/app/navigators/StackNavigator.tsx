import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { HomeScreen } from "../HomeScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return <HomeScreen />;
};
