import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SIZES } from '../../../constants/theme'

export default function ReusableBtn({onPress,btnText,textColor,width,backgroundColor,borderWidth,borderColor}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyles(width,backgroundColor,borderColor,borderWidth)}>
        <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnText:(textColor)=>({
        fontWeight:"500",
        fontSize:SIZES.medium,
        color:textColor
    }),
    btnStyles:(width,backgroundColor,borderColor,borderWidth)=>({
        width:width,
        backgroundColor:backgroundColor,
        alignItems:"center",
        justifyContent:"center",
        height:45,
        borderRadius:SIZES.small,
        borderColor:borderColor,
        borderWidth:borderWidth
    })
})