import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const HotelCard = ({ item }) => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>navigation.navigate("hotels-details")}>
      <View className=" bg-white p-2 rounded-lg">
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            width: 170,
            height: 150,
            resizeMode: "cover",
            borderRadius: 14,
          }}
        />
        <View className="mt-2">
          <Text className="font-semibold text-[17px] mb-1">{item?.title}</Text>
          <Text className=" font-medium text-gray-400 text-[14px] mb-1">
            {item?.location}
          </Text>
          <View className=" flex-row items-center  gap-2">
            <AntDesign name="star" size={20} color={COLORS.lightRed} />
            <Text style={{ color: COLORS.lightRed }} className=" font-semibold">
              {item?.rating}
            </Text>
            <Text className=" font-medium text-gray-400 text-[14px]">
              ({item?.review})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({});
