import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Country({item}) {
  return (
    <TouchableOpacity>
        <View>
            <Image 
                source={{uri:item.imageUrl}}
                style={{width:75,height:75,resizeMode:"cover",borderRadius:14}}
            />
            <Text className="font-bold text-[14px] text-center mt-1">
                {item.country}
            </Text>
        </View>
    </TouchableOpacity>
  )
}