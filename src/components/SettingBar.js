import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import 'react-native-gesture-handler';

export default function SettingBar () {
  const navigation=useNavigation()
    return (
      <MenuContext style={styles.container}>
        <View>
          <Menu>
            <MenuTrigger>
              <AntDesign name="downcircle" size={24} color="black" />
            </MenuTrigger>

            <MenuOptions>
              <MenuOption>
                <Text onPress={() => navigation.navigate("Login")}>
                  Login
                </Text>
              </MenuOption>
              <MenuOption>
                <Text onPress={() => navigation.navigate("SignUp")}>
                  SignUp
                </Text>
              </MenuOption>
              <MenuOption>
                <Text>Night Mode</Text>
              </MenuOption>
              <MenuOption>
                <Text>Log Out</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </MenuContext>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 3,
    // paddingTop: 10,
    paddingLeft: 350,
    marginTop:-90,
    position:"absolute"
  },
});
