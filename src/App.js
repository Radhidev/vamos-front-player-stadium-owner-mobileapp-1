import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./components/SignUp";
import Login from "./components/Login";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../src/components/HomePage";
import SettingBar from "./components/SettingBar";
import Map from "./components/Map"



const Stack = createStackNavigator()
const  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SettingBar" component={SettingBar} />
        <Stack.Screen name="SignUp" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

