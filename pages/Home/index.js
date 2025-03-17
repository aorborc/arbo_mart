import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../../components/header"; // Import the Header component

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Render the Header Component */}
      <Header />

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light background color
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
