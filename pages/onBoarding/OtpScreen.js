import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert 
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { useToken } from "../../utils/context/TokenContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {getLeadByPhone,createLead} from "../../utils/api/ZohoCRMapi";
import { useLoader } from "../../utils/context/LoaderContext";
import { sendSms } from "../../utils/api/SendSMS";
const OtpScreen = ({ route, navigation }) => {
  const token = useToken();
  // const { phoneNumber } = route.params;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [currentOtp, setCurrentOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const [timer, setTimer] = useState(30); 
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const { showLoader, hideLoader } = useLoader();
  const inputs = useRef([]);
  const { phoneNumber, otp: initialOtp } = route.params; 

  useEffect(() => {
    setCurrentOtp(initialOtp); // Store initial OTP
  }, [initialOtp]);
  // Clipboard OTP auto-paste
  useEffect(() => {
    const checkClipboard = async () => {
      const text = await Clipboard.getStringAsync();
      if (text && /^\d{6}$/.test(text)) {
        setOtp(text.split(""));
        if (inputs.current[5]) inputs.current[5].focus();
      }
    };
    const interval = setInterval(checkClipboard, 1000);
    return () => clearInterval(interval);
  }, []);

  // Countdown for resend OTP
  useEffect(() => {
    if (isResendDisabled) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setIsResendDisabled(false);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [isResendDisabled]);

  // Handle OTP input change
  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return; 
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    setErrorMessage("");

    // Move focus to the next input
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };


  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // Verify OTP
  const handleVerify =async () => {
    showLoader("OTP Verifying...");
    const otpValue = otp.join("");
    console.log(token, phoneNumber, otpValue);
  
    if (otpValue.length !== 6 || otp.includes("")) {
      hideLoader();
      setErrorMessage("Please enter the complete 6-digit OTP.");
      return;
    }
  
    if (otpValue === currentOtp) {
      // console.log("test")
      // hideLoader();
      // return
      try {
        const PhoneNumber = `+91${phoneNumber}`;
        const data = await getLeadByPhone(token, PhoneNumber);
        //  console.log(data)
        if (data) {
          hideLoader();
          console.log("Lead Data:", data);
          Alert.alert("Success", "OTP Verified!");
          if(data.PAN_Number&&data.GSTIN_NO&&data.Lead_Status=="Fresh Lead"){
            console.log(data)
            navigation.navigate("RegVerifyPage",{CrmID:data.id});
          }else if(data.PAN_Number&&data.GSTIN_NO&&data.Lead_Status=="Qualified"){
            console.log(data)
           
          }
          else if(data.PAN_Number&&!data.GSTIN_NO&&!data.Nature_Of_Business){
            navigation.navigate("BusinessDetialsPage",{CrmID:data.id});
          }else if(data.PAN_Number&&!data.GSTIN_NO&&data.Nature_Of_Business&&!data.Zip_Code){
            navigation.navigate("AddressPage",{CrmID:data.id});
          }else if(data.PAN_Number&&!data.GSTIN_NO&&data.Nature_Of_Business&&data.Zip_Code){
            
            navigation.navigate("RegVerifyPage",{CrmID:data.id});
          }else if(data.PAN_Number&&!data.GSTIN_NO&&data.Nature_Of_Business&&data.Zip_Code&&data.Lead_Status=="Qualified"){
            
        
          }
          else{
            navigation.navigate("PanPage",{CrmID:data.id});
          }
        } else {
  
          const newLeadData = {
            Last_Name: "APP", 
            Mobile: PhoneNumber,
            Lead_Status:"Fresh Lead",
            Phone:PhoneNumber
          };
  
          const newLead = await createLead(token, newLeadData);
  
          if (newLead.code=="SUCCESS") {
          
            hideLoader();
            console.log(newLead)
            navigation.navigate("PanPage",{CrmID:newLead.details.id});
          } else {
            console.log(newLead)
            Alert.alert("Error", "Failed to create a new lead. Please try again.");
          }
        }
      } catch (error) {
        hideLoader();
        console.error("Error in handleVerify:", error);
        Alert.alert("Error", "Something went wrong. Please try again.");
      }
    } else {
      hideLoader();
      setErrorMessage("Incorrect OTP. Please try again.");
    }
  };

  // Resend OTP
  const handleResend = async() => {
    console.log(phoneNumber)
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const smsPayload = {
      campaign_name: "ARBO MART OTP",
      auth_key: "a6aa50ea2ff2f1d2d0ae771759fbf174",
      receivers: `+91${phoneNumber}`,
      sender: "ARBOHO",
      route: "TR",
      message: {
        msgdata: `${newOtp} is your ARBO Mart Account OTP. Treat this as confidential. ARBO will never call you to verify OTP.`,
        Template_ID: "1607100000000342377",
        coding: "1",
        flash_message: 1
    
      }
    };

    try {
      const response = await sendSms(smsPayload);
      console.log(response)
   
      if (response.status=="Success") {
        setCurrentOtp(newOtp);
        Alert.alert("Resent", "OTP has been resent to your mobile number.");
      }else {
        Alert.alert("Error", response.message);
      }
     
    } catch (error) {
      Alert.alert("Error", "Failed to send SMS");
    }
    setIsResendDisabled(true);
    setTimer(30);
  };
  const handleEditNumber = () => {
    navigation.goBack(); 
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <View style={styles.subtitleContainer}>
  <Text style={styles.subtitle}>
    Enter the 6-digit OTP sent to  
  </Text>
  <TouchableOpacity onPress={handleEditNumber} style={styles.editContainer}>
    <Text style={styles.phoneText}>+91 {phoneNumber}</Text>
    <MaterialIcons name="edit" size={18} color="#007AFF" />
  </TouchableOpacity>
  </View>
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

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={isResendDisabled} onPress={handleResend}>
        <Text style={[styles.resendText, isResendDisabled && { color: "#aaa" }]}>
          Didn’t receive OTP?{" "}
          <Text style={styles.resendLink}>
            {isResendDisabled ? `Resend in ${timer}s` : "Resend"}
          </Text>
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
    textAlign: "center",
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5, // Adds spacing between text and phone number
  },
  phoneText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
    marginRight: 3, // Adds spacing before the edit icon
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "90%",
  },
  otpBox: {
    width: 45,
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 20,
    color: "#333",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#000",
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
    textAlign: "center",
  },
  resendLink: {
    color: "#000",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
