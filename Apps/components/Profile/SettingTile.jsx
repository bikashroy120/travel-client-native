import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants/theme";

const SettingTile = ({ title,title1 }) => {
  return (
    <TouchableOpacity>
      <View className=" flex flex-row items-center mt-3 justify-between border-b-[2px] border-gray-300 pb-2 ">
        <Text className=" text-[18px] mt-[-5px] font-semibold text-gray-500">
          {title}
        </Text>

        {title === "Language" ? (
          <View className=" flex flex-row items-center gap-2">
            <Image
              source={require("../../../assets/images/USA.png")}
              style={{ width: 30, height: 20, resizeMode: "cover" }}
            />
            <Text className=" text-[17px] font-semibold text-gray-500">
              English
            </Text>
            <AntDesign name="right" size={22} color={"gray"} />
          </View>
        ) : (
          <View className=" flex flex-row items-center gap-2">
            <Text className=" text-[17px] font-semibold text-gray-500">
              {title1}
            </Text>
            <AntDesign name="right" size={22} color={"gray"} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SettingTile;

const styles = StyleSheet.create({});
