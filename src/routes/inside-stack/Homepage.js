import { ScrollView, StyleSheet, Text, Image } from "react-native";
import React, { useContext, useCallback } from "react";
import { AuthContext } from "../../../context/authContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Homepage = () => {
  const { data } = useContext(AuthContext);
  const index = Math.floor(Math.random() * 8);
  const [fontsLoaded] = useFonts({
    "Everett-Regular": require("../../../assets/fonts/TWKEverett-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  console.log(data.result[index].posterURLs.original);
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <ScrollView style={styles.card}>
          <Image
            style={styles.img}
            source={{
              uri: data.result[index].posterURLs.original,
            }}
          />
          <Text style={styles.header}>{data.result[index].title}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#f0f0f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    marginVertical: 30,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "red",
  },
  img: {
    width: "100%",
    overflow: "hidden",
    height: 300,
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    fontFamily: "Everett-Regular",
    fontSize: 23,
    top: -20,
  },
});
