import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";

const { height, width } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const slides = [
    {
      id: 1,
      title: "Buy in bulk",
      description: "Buy products in bulk or in whole-sale from the suppliers",
      image: require("../assets/favicon.png"), 
    },
    {
      id: 2,
      title: "Supports your Regional Language",
      description: "Now read it in your regional language",
      image: require("../assets/ARBO Mart Logo.png"),
    },
    {
      id: 3,
      title: "Connect with the best wholesaler",
      description: "Connect to 10-15 wholesalers to procure inputs",
      image: require("../assets/ARBO Mart Logo.png"),
    },
    {
      id: 4,
      title: "High quality products",
      description: "Discover the best quality products, best in price and logistics",
      image: require("../assets/ARBO Mart Logo.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <SwiperFlatList 
  index={0}
  showPagination
  paginationStyle={styles.paginationContainer} 
  paginationStyleItemInactive={styles.inactiveDot} 
  paginationStyleItemActive={styles.activeDot} 
  data={slides}
  renderItem={({ item }) => (
    <View style={styles.slide}>
      {item.image && <Image source={item.image} style={styles.image} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
        )}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  slide: {
    width: width,
    height: height * 0.65, 
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width * 0.7,
    height: height * 0.3, 
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 10,
  },
  paginationContainer: {
    position: "absolute",
    bottom: height * 0.15,
  },
  dot: {
    width: 15,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: "#333",
  },
  activeDot: {
  width: 10,
  height: 10,
  borderRadius: 20,
  marginHorizontal: 5,
  backgroundColor: "red", 
},

inactiveDot: {
  width: 8,
  height: 8,
  borderRadius: 20,
  marginHorizontal: 5,
  backgroundColor: "#888", 
},
  buttonContainer: {
    position: "absolute",
    bottom: 40, 
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: width,
  },
  loginButton: {
    // backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  registerButton: {
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
