import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'

const HotalMap = ({coordinates}) => {
  return (
    <TouchableOpacity onPress={()=>{}}>
        <MapView style={styles.container} region={coordinates}>
            <Marker coordinate={coordinates} title={coordinates?.title}/>
        </MapView>
    </TouchableOpacity>
  )
}

export default HotalMap

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        height:120,
        width:"100%",
        borderRadius:12
    }
})