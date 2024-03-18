import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AppBar = ({ title,onPress,onPress1 }) => {
  return (
    <View className=" absolute top-4 left-0 flex items-center flex-row justify-between w-full">
      <TouchableOpacity onPress={onPress} className=" bg-white py-2 px-2 rounded-lg ">
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <Text className=" text-[20px] font-semibold">{title}</Text>
      <TouchableOpacity onPress={onPress1} className=" bg-white py-2 px-2 rounded-lg ">
        <AntDesign name="search1" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({});
