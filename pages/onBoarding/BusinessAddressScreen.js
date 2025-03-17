import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useToken } from "../../utils/context/TokenContext";
import { updateLeads } from "../../utils/api/ZohoCRMapi";
import { useLoader } from "../../utils/context/LoaderContext";
const { width, height } = Dimensions.get("window");

const BusinessAddressScreen = ({route}) => {
  const [pinCode, setPinCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const navigation = useNavigation();
  const { showLoader, hideLoader } = useLoader();
  const { CrmID } = route?.params;
  const token = useToken();
  console.log(CrmID)

  const updateAddress=async()=>{
    showLoader("Loading...")
    var businessAddressData={
        Zip_Code:pinCode,
        Company_State: state,
        Address: address1+", "+address2+", "+city+", "+state+", "+pinCode
    }
        const newLead = await updateLeads(token,CrmID, businessAddressData)
        //   console.log(newLead)
          if (newLead.data[0].code=="SUCCESS") {
            hideLoader();
            navigation.navigate("PhotoUploadPage",{CrmID})
            console.log(newLead)
          } else {
            console.log(newLead)
            hideLoader();
            Alert.alert("Error", "Failed to create a new lead. Please try again.");
          }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Business Address</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Pin Code</Text>
            <TextInput 
              style={styles.input} 
              value={pinCode} 
              onChangeText={setPinCode} 
              placeholder="Enter Pin Code"
              placeholderTextColor="gray"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Address Line 1</Text>
            <TextInput 
              style={styles.input} 
              value={address1} 
              onChangeText={setAddress1} 
              placeholder="Street Name"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Address Line 2</Text>
            <TextInput 
              style={styles.input} 
              value={address2} 
              onChangeText={setAddress2} 
              placeholder="Locality"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>City</Text>
            <TextInput 
              style={styles.input} 
              value={city} 
              onChangeText={setCity} 
              placeholder="Enter City"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>State</Text>
            <TextInput 
              style={styles.input} 
              value={state} 
              onChangeText={setState} 
              placeholder="Enter State"
              placeholderTextColor="gray"
            />
          </View>

          <TouchableOpacity 
            style={[styles.button, { backgroundColor: pinCode && address1 && city && state ? "black" : "#D3D3D3" }]}
            disabled={!pinCode || !address1 || !city || !state}
            onPress={() =>updateAddress()}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default BusinessAddressScreen;

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingHorizontal: width * 0.05,
      paddingTop: height * 0.08,  
      justifyContent: "flex-start",
      alignItems: "stretch", 
    
    },
    title: {
      fontSize: width * 0.05,
      fontWeight: "bold",
      textAlign: "left",
      marginBottom: height * 0.02,
    },
    formGroup: {
      marginBottom: height * 0.015,
    },
    label: {
      fontSize: width * 0.04,
      fontWeight: "bold",
      color: "black",
      marginBottom: 5,
    },
    input: {
      width: "100%",
      height: height * 0.06,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#D1D1D1",
      borderRadius: 5,
      paddingHorizontal: 15,
      fontSize: width * 0.04,
      color: "black",
    },
    button: {
      width: "100%",
      paddingVertical: height * 0.02,
      borderRadius: 8,
      alignItems: "center",
      marginTop: height * 0.03,
    },
    buttonText: {
      color: "white",
      fontSize: width * 0.045,
      fontWeight: "bold",
    },
  });