import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';

const NewServiceComplaint = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    cityName: '',
    subject: '',
    attachment: null
  });

  const handleAttachment = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'video/*'],
        copyToCacheDirectory: false,
      });

      if (result.type === 'success') {
        setFormData(prev => ({
          ...prev,
          attachment: result
        }));
      }
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form Data:', formData);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {/* Customer Name Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Customer Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Please Enter Your Full Name"
              value={formData.customerName}
              onChangeText={(text) => setFormData(prev => ({ ...prev, customerName: text }))}
            />
          </View>
        </View>

        {/* Mobile Number Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              value={formData.mobileNumber}
              onChangeText={(text) => setFormData(prev => ({ ...prev, mobileNumber: text }))}
            />
          </View>
        </View>

        {/* City Name Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>City Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter City Name"
              value={formData.cityName}
              onChangeText={(text) => setFormData(prev => ({ ...prev, cityName: text }))}
            />
          </View>
        </View>

        {/* Subject Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Subject</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.multilineInput]}
              placeholder="Please Describe Service Complain"
              multiline={true}
              numberOfLines={4}
              value={formData.subject}
              onChangeText={(text) => setFormData(prev => ({ ...prev, subject: text }))}
            />
          </View>
        </View>

        {/* Attachment Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Attachment</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.attachmentButton} onPress={handleAttachment}>
              <Text style={styles.attachmentText}>
                {formData.attachment ? formData.attachment.name : "Upload Service Product Video / Photo"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Register Complain</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  formContainer: {
    padding: 16,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
    paddingHorizontal: 4,
    fontWeight:'bold'
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  attachmentButton: {
    padding: 12,
  },
  attachmentText: {
    color: '#666',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default NewServiceComplaint; 