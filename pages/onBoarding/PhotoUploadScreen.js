import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { UploadAttachment } from "../../utils/api/ZohoCRMapi";
const { width, height } = Dimensions.get("window");
const uploadPng = require("../../assets/icons/Upload Bill Book Icon.png");
const shopPng = require("../../assets/icons/ARBO SHOP ICON.png");
const InvoicePng = require("../../assets/icons/Proof of Shop Invoice.png");
import { useToken } from "../../utils/context/TokenContext";
const PhotoUploadScreen = ({ route }) => {
  const [billBookImage, setBillBookImage] = useState(null);
  const [nameBoardImage, setNameBoardImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Bill Book");
  const navigation = useNavigation();
  var token = useToken()
  const { CrmID } = route.params;
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);
  const handleImageSelection = () => {
    Alert.alert("Select Image", "Choose an option", [
      { text: "Take Photo", onPress: takePhoto },
      { text: "Choose from Gallery", onPress: pickImage },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
        console.log(result.assets[0],token)
       const file ={
        uri:result.assets[0].uri,
        mimeType:result.assets[0].mimeType,
        fileName:result.assets[0].fileName,
        fileSize:result.assets[0].fileSize
       };
    //    Proof_Of_Shop_Banner Invoice_Bill_Book
       var filename = `${selectedOption}.jpg`
        const formData = new FormData();
  formData.append('file', file, filename);
       const resp =await UploadAttachment(token,CrmID,result.assets[0])
       console.log(resp)
      saveImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    if (hasCameraPermission === false) {
        Alert.alert("Camera Permission", "Please grant camera access in settings.");
        return;
      }
    let result = await ImagePicker.launchCameraAsync({
    //   allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      saveImage(result.assets[0].uri);
    }
  };

  const saveImage = (uri) => {
    if (selectedOption === "Bill Book") {
      setBillBookImage(uri);
    } else {
      setNameBoardImage(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proof of Shop</Text>
      <Text style={styles.subtitle}>
        Shop Exterior Banner / Invoice (Bill Book)
      </Text>

      {/* Radio Button Selection */}
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedOption === "Bill Book" && styles.radioSelected,
          ]}
          onPress={() => setSelectedOption("Bill Book")}
        >
          <Text style={styles.radioText}>Bill Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedOption === "Name Board" && styles.radioSelected,
          ]}
          onPress={() => setSelectedOption("Name Board")}
        >
          <Text style={styles.radioText}>Name Board</Text>
        </TouchableOpacity>
      </View>

      {/* Upload Section */}
      <TouchableOpacity style={styles.uploadBox} onPress={handleImageSelection}>
        <Image source={uploadPng} style={styles.uploadIcon} />
        <Text style={styles.uploadText}>Upload {selectedOption} Photo</Text>
      </TouchableOpacity>
      {/* Example Images */}
      <Text style={styles.exampleText}>Example</Text>
      <View style={styles.exampleContainer}>
        <Image source={billBookImage ? { uri: billBookImage } : InvoicePng} style={styles.exampleImage} />
        <Image source={nameBoardImage ? { uri: nameBoardImage } : shopPng} style={styles.exampleImage} />
        </View>
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegVerifyPage", { CrmID })}
        >
          <Text style={styles.buttonText}>Not Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegVerifyPage", { CrmID })}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: width * 0.05,
    justifyContent: "flex-start",
    paddingTop: height * 0.08,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: height * 0.01,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: "gray",
    marginBottom: height * 0.03,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
  },
  radioButton: {
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.1,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  radioSelected: {
    backgroundColor: "black",
  },
  radioText: {
    color: "white",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  uploadBox: {
    width: "100%",
    height: height * 0.2,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: height * 0.02,
  },
  uploadText: {
    color: "white",
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginTop: 10,
  },
  uploadedImage: {
    width: "100%",
    height: height * 0.2,
    borderRadius: 10,
    marginBottom: height * 0.02,
  },
  exampleText: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginBottom: height * 0.01,
    marginTop: height * 0.03,
  },
  exampleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: height * 0.02,
  },
  exampleImage: {
    width: width * 0.4,
    height: width * 0.5,
    backgroundColor: "lightgray",
    borderWidth: 1,
  },
  uploadIcon: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    marginBottom: height * 0.03,
  },
  button: {
    width: "48%",
    backgroundColor: "black",
    paddingVertical: height * 0.02,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});
