// import React from "react";
import * as React from "react";
import stadiums from "../data";
import { Button,TextInput} from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";


// import SignUp from './SignUp'
// import Event from "./Event";
export default function HomePage({ navigation }) {
// const[searching,setSearching] = useState(false)
// const onSearch = (text) => {
//   if (text)
//   setSearching(true)
//   else
//   setSearching(false)
// }
  return (
   
  <View style={styles.container}>
   
<TextInput style={styles.textInput} placeholder="Search" placeholderTextColor={'black'} />

      <ScrollView>
        {stadiums.map((element, index) => {
          return (
            <View key={index} style={{ margin: 10 }}>
              {/* <Image
                source={{ uri: element.image }}
                style={{ width: 330, height: 100 }}
              /> */}
              {/* <Text>{element.name}</Text>
              <Text>{element.adress}</Text> */}
              {/* <Pressable><Button
              title="Click to show more Info"  
              onPress={() => navigation.navigate('Event')}  
              >
                <Text>Click to show more Info</Text>
              </Button></Pressable> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  textInput:{
    bottom: 10,
    width: 300,
    height: 55,
    left: 30,
    backgroundColor:"white"
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#000080",
  }


});
