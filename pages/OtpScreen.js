import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert 
} from "react-native";
import * as Clipboard from "expo-clipboard"; // For non-Expo, use '@react-native-clipboard/clipboard'
import { useToken } from "../utils/context/TokenContext";
const OtpScreen = ({ route, navigation }) => {
    var token =  useToken();

  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputs = useRef([]);

  // Auto-paste OTP from clipboard if a valid 6-digit code is found
  useEffect(() => {
    const checkClipboard = async () => {
      const text = await Clipboard.getStringAsync();
      if (text && /^\d{6}$/.test(text)) {
        const otpArray = text.split("");
        setOtp(otpArray);
        // Focus the last input
        if (inputs.current[5]) {
          inputs.current[5].focus();
        }
      }
    };

    const interval = setInterval(checkClipboard, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return; // Allow only digits
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // If a digit is entered, focus the next input box
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    console.log(token)
    console.log(otp)
    const otpValue = otp.join("");
    if (otp.length !== 6 || otp.includes("")) {
      Alert.alert("Invalid OTP", "Please enter the complete 6-digit OTP.");
      return;
    }
    Alert.alert("Success", "OTP Verified!");
    
  };

  const handleResend = () => {
    Alert.alert("Resent", "OTP has been resent to your mobile number.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the 6-digit OTP sent to +91 {phoneNumber}
      </Text>
      
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            ref={(ref) => (inputs.current[index] = ref)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>
          Didn’t receive OTP? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: "80%",
  },
  otpBox: {
    width: 45,
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#000", // Black button for a modern look
    width: "80%",
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
  resendText: {
    fontSize: 14,
    color: "#666",
  },
  resendLink: {
    color: "#000",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
