import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/Reusable/AppBar";
import { FontAwesome } from "@expo/vector-icons";
import ReuseAbleTile from "../components/Reusable/ReuseAbleTile";
import PopulerList from "../components/Reusable/PopulerList";
import ReusableBtn from "../components/Button/ReusableBtn";
import { COLORS, SIZES } from "../../constants/theme";

const CountryDetails = () => {
  const navigation = useNavigation();
  const country = {
    _id: "64c62bfc65af9f8c969a8d04",
    country: "USA",
    description:
      "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
    popular: [
      {
        _id: "64c631650298a05640539adc",
        title: "Walt Disney World",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
        rating: 4.7,
        review: "1204 Reviews",
        location: "Orlando, USA",
      },
      {
        _id: "64d062a3de20d7c932f1f70a",
        title: "Statue of Liberty",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
        rating: 4.8,
        review: "1452 Reviews",
        location: "Liberty Island, New York Harbor",
      },
    ],
    region: "North America, USA",
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={{ uri: country?.imageUrl }}
          style={{
            width: "100%",
            height: 320,
            resizeMode: "cover",
            borderRadius: 14,
          }}
        />
        <View className=" absolute top-0 left-0 w-[90%] items-center justify-center flex-row flex-1 mx-5">
          <AppBar
            title={country?.country}
            onPress={() => navigation.goBack()}
            onPress1={() => navigation.navigate("hotelsSearch")}
            top={40}
            left={0}
          />
        </View>
        <View className="mx-5 mt-5">
          <Text className=" text-[25px] font-bold text-gray-600">
            {country?.region}
          </Text>
          <Text className=" text-[16px] text-justify leading-[18px] font-medium text-gray-500">
            {country?.description}
          </Text>

          <View className=" flex-row items-center justify-between">
            <Text className=" text-[20px] font-bold text-gray-600">
              Popular Destinations
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Recommend")}>
              <FontAwesome name="list-ul" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <PopulerList data={country?.popular} />

          <View className="mb-3">
            <ReusableBtn
              onPress={() => navigation.navigate("Bottom")}
              btnText={"Find Best Hotels"}
              width={(SIZES.width - 40)}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f8",
  },
});
