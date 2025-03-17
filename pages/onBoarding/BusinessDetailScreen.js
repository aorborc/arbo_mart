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
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useToken } from "../../utils/context/TokenContext";
const { width, height } = Dimensions.get("window");
import { updateLeads } from "../../utils/api/ZohoCRMapi";
import { useLoader } from "../../utils/context/LoaderContext";
const BusinessDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const { showLoader, hideLoader } = useLoader();
  const { CrmID } = route.params;
  const token = useToken();
  console.log(CrmID)
  
  const updateBusinessName = async()=>{
    showLoader("Loading...")
var businessData={
    Nature_Of_Business:businessName,
    Last_Name:name
}
    const newLead = await updateLeads(token,CrmID, businessData)
    //   console.log(newLead)
      if (newLead.data[0].code=="SUCCESS") {
        hideLoader();
        navigation.navigate("AddressPage",{CrmID})
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Business Details</Text>

          <Text style={styles.infoText}>
            You are not GST registered.{"\n"}Please fill the details below
          </Text>

          <Text style={styles.label}>Your Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="gray"
          />

          <Text style={styles.label}>Your Business Name</Text>
          <TextInput
            style={styles.input}
            value={businessName}
            onChangeText={setBusinessName}
            placeholder="Enter your business name"
            placeholderTextColor="gray"
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: name && businessName ? "black" : "#D3D3D3" }]}
            disabled={!name || !businessName}
            onPress={() => updateBusinessName()}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default BusinessDetailScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8F8F8",
    padding: width * 0.05,
    marginTop:height * 0.03,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    width: "100%",
  },
  infoText: {
    fontSize: width * 0.045,
   
    color: "white",
    backgroundColor: "gray",
    borderRadius: 5,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    width: "100%",
  },
  label: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },
  input: {
    width: "100%",
    height: height * 0.05,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: width * 0.045,
    color: "black",
    marginBottom: height * 0.01,
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