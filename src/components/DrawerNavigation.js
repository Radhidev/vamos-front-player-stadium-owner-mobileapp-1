import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Football from "../screens/Football";
import Basketball from "../screens/Basketball";
import Handball from "../screens/Handball";
import Tennis from "../screens/Tennis";
import LogOut from "./LogOut";



const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="VAMOS" component={TabNavigator} options={{ headerStyle: {backgroundColor: '#9acd32'}}} />
      <Drawer.Screen name="Football" component={Football}  />
      <Drawer.Screen name="Basketball" component={Basketball} />
      <Drawer.Screen name="Handball" component={Handball} />
      <Drawer.Screen name="Tennis" component={Tennis} />
      <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;