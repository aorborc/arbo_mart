import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";

const { height, width } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const slides = [
    {
      id: 1,
      title: "Made In Bharat",
      description: "Proudly manufactured and sourced in India for global standards",
      image: require("../assets/icons/MADE IN BHARAT-05.png"), 
    },
    {
      id: 2,
      title: "2500+ Products,One Trusted Brand",
      description: "Wide range of premium bathware product at your fingertips",
      image: require("../assets/icons/BASIN WITH FAUCET-05.png"),
    },
    {
      id: 3,
      title: "24/7 Support Anytime / Anywhere",
      description: "Offer a 7-year warranty on our products",
      image: require("../assets/icons/ARBO CARE-05.png"),
    },
    {
      id: 4,
      title: "Instant Dispatch - Superfast Delivery",
      description: "Fast-track logistics to ensure on-time deliveries",
      image: require("../assets/icons/FAST DELIVERY-01.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      </View>

      <SwiperFlatList 
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={0}
        showPagination
        paginationStyle={styles.paginationContainer} 
        paginationStyleItemInactive={styles.inactiveDot} 
        paginationStyleItemActive={styles.activeDot} 
        data={slides}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View>
            {item.image && <Image source={item.image} style={styles.image} />}
            </View>
            <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
{/* navigation.navigate("SignIn")}  MainTabs*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() =>navigation.navigate("MainTabs")} >
          <Text style={styles.buttonText}>Login / Register</Text>
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

  },
  logoContainer: {
    alignItems: "center",
   paddingTop:20
  
  },
  logo: {
    width: width * 0.7, 
    height: height * 0.2, 
    resizeMode: "contain",

  },
  slide: {
    width: width,
    height: height * 0.55, 
    alignItems: "center",
    justifyContent:"space-evenly",
    paddingVertical: 0,
    
  },
  image: {
    width: width * 0.7,
    height: height * 0.4, 
    resizeMode: "contain",


  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#333",

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
    bottom: height * 0.12,
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
    justifyContent: "center", 
    width: width,  
  },
  loginButton: {
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "90%",  
    alignItems: "center", 
    justifyContent: "center", 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});