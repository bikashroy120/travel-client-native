import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignIn from "./SignIn";
import Signup from "./Signup";

const Tab = createMaterialTopTabNavigator();
const AuthTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <View className="h-[80px]"></View>
        <Image
          source={require("../../../assets/images/bg2.png")}
          className="w-full h-[250px] "
          style={{ resizeMode: "contain" }}
        />
        <View style={{height:600}}>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={SignIn} />
            <Tab.Screen name="Registration" component={Signup} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTab;

const styles = StyleSheet.create({});
