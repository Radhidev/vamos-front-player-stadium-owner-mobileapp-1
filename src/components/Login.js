import { View,Text,StyleSheet,useWindowDimensions,Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import firebase from "firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const unsubscribe = useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }});
    return unsubscribe;
  }, []);
  const handlesLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("login with ", user.email);
      })
      .catch((error) => error.message);
  };
  return (
    <View style={styles.root}>
      <Input placeholder="email" value={email} setValue={setEmail} />
      <Input
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}/>
      <Pressable onPress={handlesLogin} style={styles.container}>
        <Text style={styles.text}>Login </Text>
      </Pressable>
    </View>
  )};


const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 180,
  },
  container: {
    backgroundColor: "#3B71F3",
    width: "700%",
    padding: 13,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});



export default Login;