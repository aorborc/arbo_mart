import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Animated } from "react-native";
import { useLoader } from "../utils/context/LoaderContext";



const Loader = () => {
  const { loading, message } = useLoader();

  if (!loading) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white", 
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  container: {
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "500",
    color: "black",
  },
});

export default Loader;