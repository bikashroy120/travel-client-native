import { View, Text, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopBooking from "../screens/top/TopBooking";
import TopTrips from "../screens/top/TopTrips";
import TopInfo from "../screens/top/TopInfo";
import { COLORS } from "../../constants/theme";
import AppBar from "../components/Reusable/AppBar";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
const TobTab = () => {
  const navigation = useNavigation();

  const item = {
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: "100%",
              height: 305,
              resizeMode: "cover",
            }}
          />
          <View className=" absolute top-0 left-0 w-[90%] items-center justify-center flex-row flex-1 mx-5">
            <AppBar
              title={""}
              onPress={() => navigation.goBack()}
              onPress1={() => {}}
              top={40}
              left={0}
              icon="logout"
            />
          </View>
          <View className="absolute top-[35%] left-[35%]">
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "cover",
                borderWidth: 2,
                borderColor: "#fff",
              }}
              className="rounded-full border-[5px] border-white"
            />
          </View>
          <View className=" absolute top-[70%] flex flex-col items-center justify-center left-0 right-0 w-full">
            <Text style={{backgroundColor:COLORS.lightBlue}} className=" text-white py-1 font-semibold px-4 rounded-full bg-gray-700 w-auto">
                Bikash Roy
            </Text>
            <Text style={{backgroundColor:COLORS.lightBlue}} className=" text-white mt-2 py-1 font-semibold px-4 rounded-full bg-gray-700 w-auto">
                bikashroy@gmail.com
            </Text>
          </View>
        </View>
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBooking} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TobTab;
