import React from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const AccountHeader = ({ onBackPress }) => {
  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
         <Image source={require("../assets/icons/Back Page Light.png")} style={styles.backIcon} />
        </TouchableOpacity>
      <View style={styles.leftSection}>
        <Text style={styles.companyName}>Comma India Pvt. Ltd.</Text>
        <Text style={styles.userInfo}>+917448459121 - Vijay</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.logo}>ARBO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24, // Adjust width as needed
    height: 24, // Adjust height as needed
    tintColor: "white", // If the image supports tinting
  },
  leftSection: {
    flex: 2,
    justifyContent: "center",
  },
  rightSection: {
    flex: 1,
    alignItems: "flex-end",
  },
  companyName: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userInfo: {
    color: "white",
    fontWeight: "600",
  },
  logo: {
    color: "white",
    fontSize: 35,
    fontWeight: "800",
  },
});

export default AccountHeader;
