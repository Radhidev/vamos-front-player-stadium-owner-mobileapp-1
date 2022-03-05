import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const input = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "700%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    padding: 9,
    paddingHorizontal: 10,
    marginVertical: 5,
  },

  input: {},
});
export default input;
