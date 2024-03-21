import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileTitle from '../../components/Reusable/ProfileTitle'
import { useNavigation } from '@react-navigation/native'

const TopInfo = () => {
  const navigation = useNavigation()
  return (
    <View className="p-5">
      <View className="">
        <ProfileTitle title="Personal Information" name={"user"} onPress={()=>{}}/>
        <ProfileTitle title="Payments" name={"creditcard"} onPress={()=>{}}/>
        <ProfileTitle title="Settings" name={"setting"} onPress={()=>navigation.navigate("setting")}/>
      </View>
    </View>
  )
}

export default TopInfo

const styles = StyleSheet.create({})