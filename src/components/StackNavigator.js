import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import HomePage from "../screens/HomePage";
import SignUp from './SignUp';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "black",
  header: null,
};
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
const SignUpStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};



export  { StackNavigator ,SignUpStackNavigator};