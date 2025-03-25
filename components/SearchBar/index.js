import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { startVoiceSearch, stopVoiceSearch } from '../../utils/voiceSearch';

const SearchBar = ({ onSearch, onVoiceSearch }) => {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = async () => {
    if (isListening) {
      // await stopVoiceSearch();
      setIsListening(false);
      return;
    }

    setIsListening(true);
    // await startVoiceSearch(
    //   (result) => {
    //     onSearch(result);
    //     setIsListening(false);
    //   },
    //   (error) => {
    //     Alert.alert('Error', error);
    //     setIsListening(false);
    //   }
    // );
  };

  return (
    <View style={styles.searchContainer}>
      <Image source={require('../../assets/icons/Search Dark.png')} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search 'Bib Tap'"
        placeholderTextColor="#666"
        onChangeText={onSearch}
        onFocus={onSearch}
      />
      <TouchableOpacity onPress={handleVoiceSearch}>
        <Image 
          source={require('../../assets/icons/Google Voice.png')} 
          style={[styles.voiceIcon, isListening && styles.voiceIconActive]} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  voiceIcon: {
    width: 20,
    height: 20,
  },
  voiceIconActive: {
    tintColor: '#007AFF',
  },
});

export default SearchBar; 