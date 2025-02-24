import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";

const RegisterScreen = ({ navigation }) => {
  const [selectedUserType, setSelectedUserType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isWhatsAppChecked, setIsWhatsAppChecked] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Create a new account</Text>

      <View style={styles.rowContainer}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="First Name" />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Last Name" />
      </View>

      <TextInput style={styles.input} placeholder="Email ID" keyboardType="email-address" />

      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedUserType}
          onValueChange={(itemValue) => setSelectedUserType(itemValue)}
          style={styles.picker}
          dropdownIconColor="black" 
        >
          <Picker.Item label="Select User Type" value="" />
          <Picker.Item label="Wholesaler" value="wholesaler" />
          <Picker.Item label="Retailer" value="retailer" />
        </Picker>
      </View>

      <TextInput style={styles.input} placeholder="Business Name" />
      <TextInput style={styles.input} placeholder="Pincode" keyboardType="number-pad" />
      <TextInput style={styles.input} placeholder="GST" />
      <TextInput style={styles.input} placeholder="Shop Name" />

      {/* Checkbox Section */}
      <View style={styles.checkboxContainer}>
        <Checkbox value={isChecked} onValueChange={setIsChecked} />
        <Text style={styles.checkboxText}> Terms & Conditions & Privacy Policy</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox value={isWhatsAppChecked} onValueChange={setIsWhatsAppChecked} />
        <Text style={styles.checkboxText}> Receive order-related updates on WhatsApp</Text>
      </View>

      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

     
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? <Text style={{ fontWeight: "bold" }}>Login</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfInput: {
    width: "48%",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  dropdownContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "white",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: "black",
  },
  registerButton: {
    backgroundColor: "gray",
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: "gray",
  },
});
