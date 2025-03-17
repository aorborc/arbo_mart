import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

const PanDetailsScreen = ( {route,navigation}) => {

    const { gstData,CrmID } = route.params;
    console.log(gstData)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Great! we got your business details</Text>
      <View style={styles.subContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.businessName}>{gstData?.business_name}</Text>
        <Text style={styles.address}>
        {gstData?.contact_details.principal.address}
        </Text>
        <Text style={styles.details}>PAN : {gstData?.pan_number}</Text>
        <Text style={styles.details}>GST : {gstData?.gstin}</Text>
        <Text style={styles.businessName}>{gstData?.business_name}</Text>
        <Text style={styles.Phone}> {gstData?.contact_details.principal.mobile}</Text>
      </View>
      
      <TouchableOpacity 
       style={styles.button}
       onPress={() => navigation.navigate("PhotoUploadPage", { CrmID })}
       >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default PanDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: width * 0.05,
    justifyContent: "flex-start",
    paddingTop: height * 0.08, 
    paddingBottom: height * 0.05, 

  },
  header: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginBottom: height * 0.04,
  },
  detailsContainer: {
    backgroundColor: "#222",
    padding: width * 0.04,
    borderRadius: 8,
   
  },
  businessName: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },
  address: {
    fontSize: width * 0.035,
    color: "#FFFFFF",
    marginBottom: height * 0.015,
  },
  details: {
    fontSize: width * 0.035,
    color: "#FFFFFF",
    marginBottom: height * 0.005,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: height * 0.015,
    alignItems: "center",
    borderRadius: 5,
    marginTop: height * 0.03,
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
  Phone:{
    fontSize: width * 0.035,
    color: "#FFFFFF",
    marginTop: height * 0.005,
    marginBottom: height * 0.01,
  },
  subContainer:{
    flexDirection:"column",
    flex:1,
    justifyContent:"space-between"
  }
});