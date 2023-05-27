import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Everett-Regular", fontSize: 30 }}>
        Homepage
      </Text>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
