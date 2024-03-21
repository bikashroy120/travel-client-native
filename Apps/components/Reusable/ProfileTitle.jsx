import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const ProfileTitle = ({title,onPress,name}) => {
  return (
    <TouchableOpacity onPress={onPress} className=" bg-white mb-3 shadow-md flex py-3 flex-row items-center rounded-lg justify-between px-4">
        <View className=" flex flex-row items-center gap-2">
            <AntDesign name={name} size={24} color="gray" />
            <Text className=" text-[16px] font-medium text-gray-500">{title}</Text>
        </View>
        <AntDesign name="right" size={24} color="gray" />
    </TouchableOpacity>
  )
}

export default ProfileTitle

const styles = StyleSheet.create({})