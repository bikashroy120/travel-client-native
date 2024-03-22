import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReusableBtn from "../../components/Button/ReusableBtn";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  email: Yup.string().email("Provide a valid email").required("Required"),
});

const SignIn = () => {
  const [show, setShow] = useState(true);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => {
            console.log(value)
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched,
        }) => (
          <View>
            <View>
              <Text className="ml-2 mb-1">Email</Text>
              <View
                style={styles.inputWapper(
                  touched.email ? COLORS.lightBlue : COLORS.lightGrey
                )}
              >
                <MaterialCommunityIcons
                  name="email-outline"
                  size={22}
                  color="gray"
                />
                <TextInput
                  placeholder="Enter email"
                  onFocus={() => {
                    setFieldTouched("email");
                  }}
                  onBlur={() => {
                    setFieldTouched("email", "");
                  }}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1, marginLeft: 7 }}
                />
              </View>
              {touched.email && errors.email && (
                <Text className=" text-red-500">{errors.email}</Text>
              )}
            </View>
            <View>
              <Text className="ml-2 mb-1 mt-4">Password</Text>
              <View
                style={styles.inputWapper(
                  touched.password ? COLORS.lightBlue : COLORS.lightGrey
                )}
              >
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={22}
                  color="gray"
                />
                <TextInput
                  secureTextEntry={show}
                  placeholder="Enter password"
                  onFocus={() => {
                    setFieldTouched("password");
                  }}
                  onBlur={() => {
                    setFieldTouched("password", "");
                  }}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1, marginLeft: 7 }}
                />
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <MaterialCommunityIcons
                    name={show ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text className=" text-red-500">{errors.password}</Text>
              )}
            </View>

            <View className=" mt-7">
              <ReusableBtn
                onPress={handleSubmit}
                btnText={"Select Room"}
                width={"100%"}
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  inputWapper: (borderColor) => ({
    // backgroundColor: COLORS.lightWhite,
    borderColor: borderColor,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 10,
  }),
});
