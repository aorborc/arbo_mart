import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, 
  Keyboard, Dimensions, TouchableWithoutFeedback 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { sendSms } from "../../utils/api/SendSMS";
import { useToken } from "../../utils/context/TokenContext";
const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  var token = useToken()
  console.log(token)
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = async () => {
    Keyboard.dismiss(); // Hide keyboard when pressing continue

    if (phoneNumber.length !== 10) {
      Alert.alert("Invalid Number", "Please enter a valid 10-digit mobile number.");
      return;
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const smsPayload = {
      campaign_name: "ARBO MART OTP",
      auth_key: "a6aa50ea2ff2f1d2d0ae771759fbf174",
      receivers: `+91${phoneNumber}`,
      sender: "ARBOHO",
      route: "TR",
      message: {
        msgdata: `${generatedOtp} is your ARBO Mart Account OTP. Treat this as confidential. ARBO will never call you to verify OTP.`,
        Template_ID: "1607100000000342377",
        coding: "1",
        flash_message: 1
      }
    };

    try {
      const response = await sendSms(smsPayload);
      console.log(response);
      Alert.alert("Success", "SMS Sent Successfully");

      if (response.status === "Success") {
        navigation.navigate("OtpPage", { phoneNumber, otp: generatedOtp });
      }
    } catch (error) {
      Alert.alert("Error", "Failed to send SMS");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require("../../assets/icons/Login in or Register.png")} style={styles.banner} />
        <Text style={styles.title}>Login or Register</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            placeholderTextColor="#aaa"
            keyboardType="number-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text.replace(/[^0-9]/g, ""))}
            returnKeyType="done" // Helps in dismissing keyboard on return key press
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By continuing, you agree to our{" "}
          <Text style={styles.linkText}>Terms of Service</Text> &{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    // paddingTop: height * 0.08,
  },
  banner: {
    width: 400,
    height: 280,
    resizeMode: "stretch",
    marginBottom: 30
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  countryCode: {
    fontSize: 18,
    fontWeight: "500",
    marginRight: 10,
    color: "#333",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#333",
  },
  button: {
    backgroundColor: "#000",
    width: "90%",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    width: "90%",
  },
  linkText: {
    color: "#000",
    textDecorationLine: "underline",
  },
});
