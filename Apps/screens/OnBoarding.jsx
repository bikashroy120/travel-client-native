import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import Slides from "../components/OnBord/Slides";

export default function OnBoarding() {
  const slides = [
    {
      id: 1,
      image: require("../../assets/images/1.png"),
      title: "Find the perfect place to stay",
    },
    {
      id: 2,
      image: require("../../assets/images/2.png"),
      title: "Discover the world",
    },
    {
      id: 3,
      image: require("../../assets/images/3.png"),
      title: "Find the best Hotels in the world",
    },
  ];

  return (
    <FlatList 
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=><Slides item={item}/>}
    />
  );
}
