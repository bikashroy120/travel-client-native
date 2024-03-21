import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AppBar1 = ({ onPress, top, left }) => {
  return (
    <View
      style={{ position: "absolute", top: top, left: left }}
      className={` flex items-center flex-row justify-between w-full`}
    >
      <TouchableOpacity
        onPress={onPress}
        className=" bg-white py-2 px-2 rounded-lg "
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar1;

const styles = StyleSheet.create({});
