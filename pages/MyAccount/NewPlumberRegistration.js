import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewPlumberRegistration = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    plumberName: '',
    mobileNumber: '',
    cityName: '',
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form Data:', formData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {/* Plumber Name Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Plumber Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Please Enter Your Full Name"
              value={formData.plumberName}
              onChangeText={(text) => setFormData(prev => ({ ...prev, plumberName: text }))}
            />
          </View>
        </View>

        {/* Mobile Number Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
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
   
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  formContainer: {
    padding: 16,
    flex: 1,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
    paddingHorizontal: 4,
    fontWeight: 'bold',
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
  registerButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default NewPlumberRegistration; 