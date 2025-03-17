import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { useLoader } from "../../utils/context/LoaderContext";
import { useNavigation } from "@react-navigation/native";
import { useToken } from "../../utils/context/TokenContext";
import { FetchGSTbyPan,FetchGSTAdvanced } from "../../utils/api/KYCAPI";
import { updateLeads } from "../../utils/api/ZohoCRMapi";
const { width, height } = Dimensions.get("window");

const PanScreen = ({ route }) => {
  const navigation = useNavigation();
  const [panNumber, setPanNumber] = useState("");
  const { showLoader, hideLoader } = useLoader();
  const [kycData, setKycData] = useState(null);
  const token = useToken();
  const  CrmID  = route?.params?.CrmID;

  const isValidPAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);
const updateToCRM=async(newLeadData)=>{
      const newLead = await updateLeads(token,CrmID, newLeadData)
    //   console.log(newLead)
      if (newLead.data[0].code=="SUCCESS") {
        hideLoader();
        console.log(newLead)
        // navigation.navigate("PanPage");
      } else {
        console.log(newLead)
        hideLoader();
        Alert.alert("Error", "Failed to create a new lead. Please try again.");
      }
 }
  const onVerifyPAN= async()=>{
    
    showLoader("Verifying Your PAN");
    // {navigation.navigate("PanVerification");
    //     showLoader("Verifying Your PAN");
    //     setTimeout(hideLoader, 3000); // Hide after 3 sec
    //   }
    // navigation.navigate("PanDetailsPage");
    // navigation.navigate("BusinessDetialsPage");

    const result = await FetchGSTbyPan(panNumber);
    
    if (result.error) {        
        hideLoader();        
        console.log("API Error: ", result);
        Alert.alert("API Error", result.message);
        return;
    }

    if (result.success) {
       
        console.log("GST Data: ", result);
        const gstPanData =result.data.data
        const gstInfo = gstPanData.gstin_list[0];
        const { state, gstin, state_code, active_status } = gstInfo;

        const GstDetails = await FetchGSTAdvanced(gstin);
        
        if (GstDetails.error) {
            hideLoader();
            console.log("GST Advanced API Error: ", GstDetails);
            Alert.alert("Error", "Failed to fetch detailed GST information.");
            return;
        }
        
        console.log("GST Advanced Data: ", GstDetails);
        console.log("test")
        const newLeadData = {
            PAN_Number: GstDetails.data.pan_number,
            GSTIN_NO: GstDetails.data.gstin,
            GSTIN_Contact_Number: GstDetails.data.contact_details.principal.mobile,
            GSTIN_Email_ID: GstDetails.data.contact_details.principal.email,
            Nature_Of_Business: GstDetails.data.contact_details.principal.nature_of_business,
            State_Code: state_code,
            Annual_Turnover: GstDetails.data.annual_turnover,
            Annual_Turnover_FY: GstDetails.data.annual_turnover_fy,
            Last_Name: GstDetails.data.legal_name,
            Active_Status: active_status,
            Company: GstDetails.data.business_name,
            Company_State: state,
            Address: GstDetails.data.contact_details.principal.address
        };

        console.log("New Lead Data: ", newLeadData);
        updateToCRM(newLeadData);

        hideLoader();
        navigation.navigate("PanDetailsPage", { gstData: GstDetails.data, CrmID });

    } else {
        // No GSTIN found, create lead anyway
        console.log("No GSTIN Found: ", result);
        const newLeadData = { PAN_Number: panNumber };
        
        updateToCRM(newLeadData);
        hideLoader();
        navigation.navigate("BusinessDetialsPage", { CrmID });
    }
    // const newLeadData = {
    //             PAN_Number:"AAAAA44dssasdaa55A",
    //         };
    // await updateToCRM(newLeadData)

  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Image source={require("../../assets/icons/Business PAN Number-01.png")} style={styles.panImage} />

      <Text style={styles.label}>Business PAN Number</Text>
      <TextInput
        style={styles.input}
        placeholder="ABCDE1234E"
        placeholderTextColor="gray"
        value={panNumber}
        onChangeText={(text) => setPanNumber(text.toUpperCase())}
        maxLength={10}
        autoCapitalize="characters"
        returnKeyType="done" 
      />

<TouchableOpacity
  style={[styles.button, { backgroundColor: isValidPAN(panNumber) ? "black" : "#D3D3D3" }]}
  disabled={!isValidPAN(panNumber)}
  onPress={onVerifyPAN}
>
  <Text style={styles.buttonText}>Continue →</Text>
</TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
  );
};

export default PanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.07,
  },
  panImage: {
    width: width * 0.9,
    height: height * 0.3,
    resizeMode: "contain",
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.048,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    height: height * 0.06,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: width * 0.045,
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