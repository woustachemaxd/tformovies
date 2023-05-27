import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderElem = () => {
  return (
    <>
      <View style={styles.container}></View>
    </>
  );
};

export default HeaderElem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 100,
  },
  text: {
    color: "white",
    fontFamily: "Everett-Regular",
    fontSize: 30,
  },
});
