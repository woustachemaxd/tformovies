import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./routes/outside-stack/Signup";
import Signin from "./routes/outside-stack/SignIn";
import Homepage from "./routes/inside-stack/Homepage";
import { AuthContext } from "../context/authContext";
const Stack = createNativeStackNavigator();

const AppNav = () => {
  const { TestValue } = useContext(AuthContext);

  if (TestValue == false) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
    );
  }
};

export default AppNav;

const styles = StyleSheet.create({});
