import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/Reusable/AppBar";
import { useNavigation } from "@react-navigation/native";
import { Rating } from "react-native-stock-star-rating";
import HotalMap from "../components/Reusable/HotalMap";
import { FontAwesome } from "@expo/vector-icons";
import ReusableBtn from "../components/Button/ReusableBtn";
import { COLORS, SIZES } from "../../constants/theme";

const HotelSDetails = () => {
  const navigation = useNavigation();

  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    rating: 4.8,
    review: "2312 Reviews",
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 0,
  };

  let coordinates = {
    id: hotel?._id,
    title: hotel?.title,
    latitude: hotel?.latitude,
    longitude: hotel?.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
          <AppBar
            title={"Hotel Details"}
            onPress={() => navigation.goBack()}
            onPress1={() => navigation.navigate("Search")}
            top={10}
            left={0}
          />

          <View className="mt-16">
            <Image
              source={{ uri: hotel?.imageUrl }}
              style={{
                width: "100%",
                height: 215,
                resizeMode: "cover",
                borderRadius: 14,
              }}
            />

            <View className=" bg-white p-3 rounded-xl mx-4 absolute bottom-[-45px]  right-0 left-0 shadow-md">
              <Text className="text-[20px] font-bold">{hotel?.title}</Text>
              <Text className="text-[15px] text-gray-400 mt-1 mb-1 font-medium">
                {hotel?.location}
              </Text>
              <View className=" flex-row items-center justify-between">
                <Rating
                  maxStars={5}
                  stars={hotel?.rating}
                  bordered={false}
                  color={"#fd9942"}
                />
                <Text className="text-[15px] text-gray-400 mt-2  font-medium">
                  {hotel?.review}
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-16">
            <Text className=" text-[20px] text-gray-700 mb-3 font-semibold">
              Description
            </Text>
            <Text className=" text-[16px] text-justify leading-[18px] font-medium text-gray-500">
              {hotel?.description}
            </Text>

            <Text className=" text-[20px] text-gray-700 mb-3 mt-3 font-semibold">
              Location
            </Text>
            <HotalMap coordinates={coordinates} />
          </View>

          <View className=" flex-row items-center justify-between">
            <Text className=" text-[20px] font-bold text-gray-600">
              Reviews
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Recommend")}>
              <FontAwesome name="list-ul" size={22} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View className=" bg-white flex flex-row items-center justify-between py-4 px-5 shadow-md">
            <View>
                <Text className="font-bold text-[19px] text-gray-700">$ {hotel?.price}</Text>
                <Text className=" font-medium text-[15px] text-gray-500">Jun-01 - Dec-01</Text>
            </View>
            <ReusableBtn
              onPress={() => navigation.navigate("Bottom")}
              btnText={"Select Room"}
              width={(SIZES.width - 200)}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelSDetails;
