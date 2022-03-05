import React from "react";
import { View,StyleSheet,Text, } from 'react-native'
import { Callout,Marker } from 'react-native-maps'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import {Svg, Image as ImageSvg} from 'react-native-svg'

export default function Map({ route }){

    const {lat,lng,name,image} = route.params
    
    return(
        <View style={styles.body}>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
    initialRegion={{
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
  <Marker coordinate={{ latitude: lat, longitude: lng}}>
    <Callout>
    <Svg width={200} height={150}>
        <ImageSvg width={'100%'} height={'100%'}
         preserveAspectRatio="xMidYMid slice" 
         href={{ uri: image }}/></Svg>
        <Text>{name}</Text>
    </Callout>
  </Marker>
  </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    map:{
    width:'100%',
    height:'100%',
    }
})