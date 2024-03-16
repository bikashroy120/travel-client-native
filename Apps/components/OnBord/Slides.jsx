import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS, SIZES} from "../../../constants/theme"
import ReusableBtn from '../Button/ReusableBtn'
import { useNavigation } from '@react-navigation/native'

const Slides = ({item}) => {

    const navigation = useNavigation()

  return (
    <View>
        <Image source={item.image} style={styles.image}/>
        <View className=" absolute bottom-5 left-0 z-50 p-5">
            <Text className=" text-white text-[30px] mb-8 font-semibold">{item.title}</Text>
            <ReusableBtn 
                onPress={()=>navigation.navigate("Bottom")}
                btnText={"Let's go"}
                width={(SIZES.width -50)/2.2}
                backgroundColor={COLORS.red}
                borderColor={COLORS.red}
                borderWidth={0}
                textColor={COLORS.white}
            />
        </View>
    </View>
  )
}

export default Slides

const styles = StyleSheet.create({
    image:{
        resizeMode:"cover",
        width:SIZES.width,
        height:"100%"
    }
})