import stadiums from "../data";
import { Searchbar } from "react-native-paper";
import SettingBar from "./SettingBar"
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Button,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

export default function HomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const SignInn = () => {
    console.warn("working");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.vamos}>VAMOS</Text>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <SettingBar style={{marginLeft:50,postion:"absolute"}}/>
      {/* <Pressable onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.sign}>Signup</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.log}>Login</Text>
      </Pressable> */}
      {/* <Icon name="navicon" style={styles.category} /> */}
      {/* <StatusBar style="auto" /> */}
      <View
        style={{
          flexDirection: "column",
          padding: 20,
          left: 100,
          height: 50,
        }}
      ></View>
      <ScrollView>
        <View >
        {stadiums.map((element, index) => {
          return (
            <View key={index} style={{ margin: 10 }}>
            <TouchableHighlight onPress={() => {
                 navigation.navigate('Map',{
                   city: element.adress,
                   lat: element.lat,
                   lng: element.lng,
                   name: element.name,
                   image: element.image,
                 })
              }}>
              <Image
                source={{ uri: element.image }}
                style={{ width: 330 ,height:70}}
              /></TouchableHighlight>
              <Text>{element.name}</Text>
              <Text>{element.adress}</Text>
            </View>
          );
        })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    top: 30,
    width: 250,
    left: 60,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  vamos: {
    color: "#0C4488",
    top: -10,
    fontSize: 27,
    left: 1,
  },
  category: {
    fontSize: 25,
    bottom: 105,
    right: 10,
    color: "#0C4488",
  },

  sign: {
    left: 270,
    bottom: 56,
    fontSize: 17,
    color: "#0C4488",
  },
  log: {
    left: 335,
    bottom: 80,
    fontSize: 17,
    color: "#0C4488",
  },
});
