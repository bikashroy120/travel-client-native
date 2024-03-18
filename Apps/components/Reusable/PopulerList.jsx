import { View, Text, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ReuseAbleTile from "./ReuseAbleTile";

const PopulerList = ({data}) => {
  const navigation = useNavigation()
  return (
    <View className="mt-3">
      <FlatList
        data={data}
        keyExtractor={(item) => item?._id}
        renderItem={({ item, index }) => (
          <View className="mb-3">
            <ReuseAbleTile
              item={item}
              onPress={() => navigation.navigate("place-details")}
            />
          </View>
        )}
      />
    </View>
  );
};

export default PopulerList;
