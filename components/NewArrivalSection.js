import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import ProductCard from './ProductCard';
const NewArrivalSection = ({ title = "New Arrival" }) => {
  const newArrivals = [
    {
      id: 1,
      name: 'F-3001-01',
      description: 'KA-3101 Pillar Tap',
      price: '₹450',
      image: require('../assets/icons/BASIN WITH FAUCET-05.png'),
    },
    {
      id: 2,
      name: 'F-3001-02',
      description: 'KA-3102 Sink Cock With Spring Spout With Wall Flange',
      price: '₹450',
      image: require('../assets/icons/BASIN WITH FAUCET-05.png'),
    },
    {
      id: 3,
      name: 'F-3001-03',
      description: 'KA-3103 Pillar Tap',
      price: '₹450',
      image: require('../assets/icons/BASIN WITH FAUCET-05.png'),
    },
  ];

  return (
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>New Arrival</Text>
    <View style={styles.productsGrid}>
      {Array(6).fill().map((_, index) => (
        <ProductCard
          key={index}
          image={require('../assets/icons/BASIN WITH FAUCET-05.png')}
          title={`KA-${3101 + index} Pillar Tap`}
          price="2999.00"
          originalPrice="2999.00"
          onWishlist={() => {}}
          onAddToCart={() => {}}
        />
      ))}
    </View>
    <TouchableOpacity 
  style={styles.seeAllButton} 
  // onPress={onSeeAll}
>
  <View style={styles.seeAllNewArrivalContent}>
    <Image 
      source={require('../assets/icons/BASIN WITH FAUCET-05.png')} 
      style={styles.categoryIcon} 
    />
    <Text style={styles.seeAllText}>See all New Arrival</Text>
    <Image 
      source={require('../assets/icons/BASIN WITH FAUCET-05.png')} 
      style={styles.arrowIcon} 
    />
  </View>
</TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    marginBottom: 15,
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  seeAllButton: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  seeAllNewArrivalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  categoryIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  seeAllText: {
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
  },
  arrowIcon: {
    width: 14,
    height: 14,
    marginLeft: 8,
  },
});

export default NewArrivalSection; 