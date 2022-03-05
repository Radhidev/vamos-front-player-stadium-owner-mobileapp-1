import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import stadiums from "./data";

export default function Category() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.vamos}>VAMOS</Text>
        <TextInput style={styles.input} placeholder="Search for stadium" />
        <Text style={styles.sign}>Signup</Text>
        <Text style={styles.log}>Login</Text>
        <Icon name="navicon" style={styles.category} />
        {/* <StatusBar style="auto" /> */}
        <View
          style={{
            flexDirection: "column",
            padding: 20,
            left: 100,
            height: 50,
          }}
        ></View>
        {/* <View style={{ backgroundColor: "grey", flex: 0.3 , width: 350 ,fontSize:60   }} /> */}
        {stadiums.map((element, index) => {
          return (
            <View key={index} style={{ margin: 10 }}>
              <Image
                source={{ uri: element.image }}
                style={{ width: 330, height: 100 }}
              />
              <Text>{element.name}</Text>
              <Text>{element.adress}</Text>
              <Text>price :{element.price} DT</Text>
              <Text>{element.contact}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    left: 50,
    borderRadius: 15,
    borderColor: "#0C4488",
    width: 250,
    top: 50,
  },
  vamos: {
    color: "#0C4488",
    top: 55,
    fontSize: 27,
    left: 25,
  },
  category: {
    fontSize: 25,
    bottom: 85,
    right: 10,
    color: "#0C4488",
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
