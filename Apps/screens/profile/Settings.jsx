import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar1 from "../../components/Reusable/AppBar1";
import { useNavigation } from "@react-navigation/native";
import SettingTile from "../../components/Profile/SettingTile";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <AppBar1 top={10} left={20} onPress={() => navigation.goBack()} />
      </View>
      <View className="mt-14 px-5">
        <Text className=" text-[18px] mb-1 font-semibold text-gray-600">
          Account Setting
        </Text>
        <SettingTile title="Language"/>
        <SettingTile title="Country" title1={"USA"}/>
        <SettingTile title="Currency" title1={"USD"}/>

        <Text className=" text-[18px] mb-1 mt-6 font-semibold text-gray-600">
          Support
        </Text>
        <SettingTile title="Get Help" />
        <SettingTile title="Give a feedback"/>

        <Text className=" text-[18px] mb-1 mt-6 font-semibold text-gray-600">
          Legal
        </Text>
        <SettingTile title="Terms of Service" />
        <SettingTile title="Privacy Policy"/>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
