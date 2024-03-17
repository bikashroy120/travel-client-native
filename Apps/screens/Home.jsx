import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Places from "../components/Home/Places";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 mx-5">
      <View>
        <View className="flex-row items-center justify-between">
          <Text className=" text-[20px] font-semibold text-gray-600">Hey User!</Text>
          <TouchableOpacity className=" bg-white py-2 px-2 rounded-lg ">
            <AntDesign name="search1" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View>
            <Text className=" font-semibold text-[18px] mt-4 mb-3">
                Places
            </Text>
            <Places />
        </View>
      </View>
    </SafeAreaView>
  );
}
