import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./components/SignUp";
import Login from "./components/Login";
import { createStackNavigator } from "@react-navigation/stack";
// import  StackNavigator  from "./components/StackNavigator";
// import BottomTabNavigator from './components/TabNavigator' 
// import DrawerNavigator from "./components/DrawerNavigation";

// const Drawer = createDrawerNavigator();
import HomePage from "../src/components/HomePage";
import SettingBar from "./components/SettingBar";
import Map from "./components/Map"
// import stadiums from "./data";
const Stack = createStackNavigator()



const  App = () => {
  return (
    <NavigationContainer>
    {/* <BottomTabNavigator/> */}

    {/* <DrawerNavigator/> */}
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SettingBar" component={SettingBar} />
        <Stack.Screen name="SignUp" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Map" component={Map} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "73%",
  },

  sign: {
    left: 270,
    bottom: 45,
    fontSize: 17,
    color: "#0C4488",
  },
  log: {
    left: 335,
    bottom: 65,
    fontSize: 17,
    color: "#0C4488",
  },
});
