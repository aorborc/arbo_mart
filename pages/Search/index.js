import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import BestSellerSection from '../../components/BestSellerSection';
import NewArrivalSection from '../../components/NewArrivalSection';


const { width } = Dimensions.get('window');

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  
  const recentSearches = [
    { 
      id: 1, 
      text: '2 in 1 Wall Mixer',
      icon: require('../../assets/icons/Faucet Light.png')
    },
    { 
      id: 2, 
      text: 'Kia Collection',
      icon: require('../../assets/icons/Collection Light.png')
    },
    { 
      id: 3, 
      text: 'Bathroom Mixer for hot and cold',
      icon: require('../../assets/icons/Search Dark.png')
    },
  ];

  const handleBarcodeScan = (data) => {
    console.log('Scanned barcode:', data);
    // Here you can handle the scanned barcode data
    // For example, search for the product with this barcode
    setShowScanner(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image 
            source={require('../../assets/icons/Back Page Light.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        
        <View style={styles.searchContainer}>
          <Image 
            source={require('../../assets/icons/Search Dark.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search bib tap, pillar tap and more"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#666"
            autoFocus={true}
          />
          <TouchableOpacity style={styles.iconButton}>
            <Image 
              source={require('../../assets/icons/Google Voice.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => setShowScanner(true)}
        >
          <Image 
            source={require('../../assets/icons/Barcode Scanner Light.png')}
            style={{height:50,width:50}}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Recent Searches */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent searches</Text>
            <TouchableOpacity>
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.recentSearchesContainer}>
            {recentSearches.map(item => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.recentSearchButton}
                onPress={() => setSearchQuery(item.text)}
              >
                <View style={styles.searchIconContainer}>
                  <Image 
                    source={item.icon}
                    style={styles.searchButtonIcon}
                  />
                </View>
                <Text style={styles.recentSearchButtonText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Best Seller Section */}
        <BestSellerSection />

        {/* New Arrival Section */}
        <NewArrivalSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginLeft: 8,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#666',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#333',
  },
  iconButton: {
    padding: 6,
    marginLeft: 4,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  clearText: {
    fontSize: 14,
    color: '#666',
  },
  recentSearchesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    paddingTop: 5,
  },
  recentSearchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  searchIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  searchButtonIcon: {
    width: 16,
    height: 16,
    tintColor: '#666',
  },
  recentSearchButtonText: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
});

export default SearchScreen; 