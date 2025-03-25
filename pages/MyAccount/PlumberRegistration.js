import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PlumberRegistrationScreen = () => {
  const navigation = useNavigation();

  const plumbers = [
    {
      name: 'Raj Sharma',
      mobile: '+91 9512400094',
      city: 'Ahmedabad',
    },
    {
      name: 'Vikrant Patel',
      mobile: '+91 9512400093',
      city: 'Nadiad',
    },
    {
      name: 'Umesh Mehta',
      mobile: '+91 9512400422',
      city: 'Mumbai',
    },
    {
      name: 'Suresh Meghani',
      mobile: '+91 9512400420',
      city: 'Pune',
    },
  ];

  const handleCall = (phoneNumber) => {
    const formattedNumber = phoneNumber.replace(/\s/g, '');
    Linking.openURL(`tel:${formattedNumber}`);
  };

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={[styles.headerText, styles.nameColumn]}>PLUMBER NAME</Text>
        <Text style={[styles.headerText, styles.mobileColumn]}>MOBILE{'\n'}NUMBER</Text>
        <Text style={[styles.headerText, styles.cityColumn]}>CITY</Text>
        <Text style={[styles.headerText, styles.actionColumn]}>ACTION</Text>
      </View>

      {/* Plumbers List */}
      <ScrollView style={styles.scrollView}>
        {plumbers.map((plumber, index) => (
          <View key={index} style={styles.plumberRow}>
            <Text style={[styles.cellText, styles.nameColumn]}>{plumber.name}</Text>
            <Text style={[styles.cellText, styles.mobileColumn]}>{plumber.mobile}</Text>
            <Text style={[styles.cellText, styles.cityColumn]}>{plumber.city}</Text>
            <TouchableOpacity 
              style={[styles.cellText, styles.actionColumn]} 
              onPress={() => handleCall(plumber.mobile)}
            >
              <MaterialIcons name="call" size={22} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Register Button */}
      <TouchableOpacity 
        style={styles.registerButton}
        onPress={() => {
          navigation.navigate('NewPlumberRegistration');
        }}
      >
        <Text style={styles.buttonText}>New Plumber Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#E0E1E0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  plumberRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cellText: {
    fontSize: 12,
    color: '#333',
  },
  // Column widths
  nameColumn: {
    width: '30%',
  },
  mobileColumn: {
    width: '30%',
  },
  cityColumn: {
    width: '25%',
    textAlign: 'center',
  },
  actionColumn: {
    width: '15%',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#000',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PlumberRegistrationScreen;