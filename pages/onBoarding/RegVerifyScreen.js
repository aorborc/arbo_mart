import React,{useEffect,useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useLoader } from "../../utils/context/LoaderContext";
const { width, height } = Dimensions.get("window");
import { useToken } from "../../utils/context/TokenContext";
import { getLeadByID } from "../../utils/api/ZohoCRMapi";
const RegVerifyScreen = ({route}) => {
  const { CrmID } = route.params;
  const { showLoader, hideLoader } = useLoader();
  const [LeadID, setLeadID]=useState(null)
  console.log(CrmID)
  const token = useToken();
  useEffect(() => {
    showLoader("Loading...")
    const fetchLeadData = async () => {
      try {
        if (!token || !CrmID) {
          console.warn("Missing token or CrmID");
          return;
        }
  
        const data = await getLeadByID(token, CrmID);
        
        if (data.data) {
          setLeadID(data.data[0].Lead_Number)
          hideLoader()
          console.log("Lead Data:", data);
        } else {
          hideLoader()
          console.warn("No lead data found");
        }
      } catch (error) {
        hideLoader()
        console.error("Error fetching lead data:", error);
      }
    };
  
    fetchLeadData();
  }, [token, CrmID])

  return (
    <View style={styles.container}>
      <Text style={styles.requestId}>Your Request Id : <Text style={styles.requestIdBold}>{LeadID}</Text></Text>
      <Text style={styles.thankYou}>Thank you for registering</Text>
      <Text style={styles.description}>
        Your details are being verified by our team. We will get back to you within 24 hours.
      </Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Request for Quick Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegVerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: width * 0.05,
  },
  requestId: {
    fontSize: width * 0.045,
    textAlign: "center",
    marginBottom: height * 0.03,
    fontWeight:"bold"
  },
  requestIdBold: {
    fontWeight: "bold",
  },
  thankYou: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.01,
  },
  description: {
    fontSize: width * 0.04,
    textAlign: "center",
    color: "black",
    marginBottom: height * 0.2,
  },
  button: {
    position: "absolute",
    bottom: height * 0.03,
    width: "95%",
    backgroundColor: "black",
    paddingVertical: height * 0.02,
    alignItems: "center",
    borderRadius: 5,
    marginBottom:height * 0.03,
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.04,
    fontWeight:"bold"
  },
});