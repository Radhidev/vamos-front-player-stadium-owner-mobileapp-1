import React,{Component} from "react";
import { Text, View, StyleSheet,Picker } from "react-native";


export default class SettingBar extends Component {
 state={gender:''};
 showGender=(option)=>{
   if(option!=='disabled'){
     this.setState({gender:option});
   }
 }
    render() {
      return (
      <View style={styles.body}>
     <Picker
    //  onValueChange={this.showGender}
    //  selectedValue={this.state.gender}
     >
     <Picker.Item label="Settings" value="disabled" color="#aaa"/>
     <Picker.Item label="Log in" value="male" />
     <Picker.Item label="Sign up" value="female" />
     <Picker.Item label="Dark Mode" value="none" />
     </Picker>
      </View>
      )
    }
    }


    
const styles = StyleSheet.create({
body: {
    flex: 1,
    margin:30
  }});
