import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddressBookScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Vijay!</Text>
      <Text style={styles.subtitle}>Welcome to React Native.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
});

export default AddressBookScreen;