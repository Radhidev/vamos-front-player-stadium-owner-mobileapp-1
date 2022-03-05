import { Image,StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,Dimensions } from 'react-native'
import React,{useState} from 'react'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
import stadiums from '../data'
export default function Carrousel() {
  const [imgActive,setimgActive]=useState(0)
  onchange=(nativeEvent)=>{
if(nativeEvent){
const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
if(slide!=imgActive){
    setimgActive(slide)
}
}
  }
    return (
    <SafeAreaView style={styles.container}>
    <View style={styles.wrap}>
   <ScrollView
   onScroll={({nativeEvent})=>onchange(nativeEvent)}
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    horizontal
    style={styles.wrap}
   >
{
  
    stadiums.map((elem,index)=>
    <View>
    <Image
    key={index}
    resizeMode='stretch'
    style={styles.wrap}
    source={{uri:elem.image}}/>
             <Text style={{position:'absolute'}}>Hello</Text>
             
             
             </View>
    )
}

   </ScrollView>
   <View style={styles.wrapDot}>  
   {

 stadiums.map((e,index)=>
 <Text key={e} style={ imgActive==index ? styles.dotActive: styles.dot}>
     ⬤
</Text>
 )
}
</View> 
    </View>

    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
    container:{
    flex:1
    },
    wrap:{
    width:width,
    height:height * 0.25
    },
    wrapDot:{
position:'absolute',
  bottom:0,
  flexDirection:'row',
  alignSelf:'center'
},
dotActive:{
margin:3,
color:'black'
},
dot:{
  margin:3,
  color:'white'
}
})