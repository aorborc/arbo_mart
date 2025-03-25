import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // Make sure to install react-native-linear-gradient
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
   const navigation= useNavigation()
  return (
   <View style={styles.container}>
     <View style={{flex:2,paddingLeft:15}}> 
        <Image source={require("../assets/ARBO_Mart_Logo.png")} style={{height:"60%", width:"60%"}} resizeMode="contain" />
        <Text>{"City, State, Country " }</Text>
     </View>
     <View style={{flex:1, justifyContent:"center", alignItems:"flex-end", paddingRight:15}}>
         <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
          <Icon name="user-circle" size={35} color="#fff" />
        </TouchableOpacity>
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
    container:{
        height:60,
        flexDirection:"row"
    }
});

export default Header;