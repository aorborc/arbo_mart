import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const BestSellerSection = ({ title = "Best Seller Collection" }) => {
  const collections = [
    { id: 1, name: 'KIA COLLECTION', image: require('../assets/icons/BASIN WITH FAUCET-05.png') },
    { id: 2, name: 'LEVISH COLLECTION', image: require('../assets/icons/BASIN WITH FAUCET-05.png') },
    { id: 3, name: 'COSMO COLLECTION', image: require('../assets/icons/BASIN WITH FAUCET-05.png') },
  ];

  return (
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>Best Seller Collection</Text>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.bestSellerGrid}>
        {Array(6).fill().map((_, index) => (
          <TouchableOpacity key={index} style={styles.bestSellerItem}>
            <View style={styles.bestSellerCard}>
              <Image 
                source={require('../assets/icons/BASIN WITH FAUCET-05.png')} 
                style={styles.bestSellerImage} 
              />
              <View style={styles.bestSellerContent}>
                <Text style={styles.bestSellerTitle}>
                  {index % 3 === 0 ? 'KIA COLLECTION' : 
                   index % 3 === 1 ? 'LEVISH COLLECTION' : 'COSMO COLLECTION'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
        <TouchableOpacity style={styles.bestSellerItem}>
          <View style={[styles.bestSellerCard, styles.seeAllCard]}>
            <View style={styles.seeAllContent}>
              <View style={styles.seeAllTop}>
                <View style={styles.slideIndicator}>
                  <View style={[styles.indicatorDot, styles.activeDot]} />
                  <View style={styles.indicatorDot} />
                  <View style={styles.indicatorDot} />
                </View>
              </View>
              
              <View style={styles.seeAllMiddle}>
                <Image 
                  source={require('../assets/icons/BASIN WITH FAUCET-05.png')} 
                  style={styles.seeAllIcon} 
                />
                <Text style={styles.seeAllTitle}>See All</Text>
                <Text style={styles.seeAllSubtitle}>Products</Text>
              </View>
              
              <View style={styles.seeAllBottom}>
                <View style={styles.arrowsContainer}>
                  <Image 
                    source={require('../assets/icons/BASIN WITH FAUCET-05.png')} 
                    style={[styles.arrowIcon, styles.leftArrow]} 
                  />
                  <Image 
                    source={require('../assets/icons/BASIN WITH FAUCET-05.png')} 
                    style={styles.arrowIcon} 
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    marginBottom: 15,
    margin:10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  scrollViewContent: {
    paddingRight: 16,
  },
  bestSellerGrid: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bestSellerItem: {
    width: width * 0.35,
    marginRight: 12,
    aspectRatio: 0.8,
  },
  bestSellerCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bestSellerImage: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
  },
  bestSellerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  bestSellerTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  seeAllCard: {
    backgroundColor: '#f8f8f8',
  },
  seeAllContent: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
  },
  seeAllTop: {
    alignItems: 'center',
    paddingTop: 5,
  },
  slideIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicatorDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
  },
  activeDot: {
    width: 12,
    backgroundColor: '#666',
  },
  seeAllMiddle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  seeAllIcon: {
    width: 40,
    height: 40,
    tintColor: '#666',
    marginBottom: 8,
  },
  seeAllTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  seeAllSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  seeAllBottom: {
    alignItems: 'center',
    paddingBottom: 5,
  },
  arrowsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#666',
    marginHorizontal: 4,
  },
  leftArrow: {
    transform: [{ rotate: '180deg' }],
    opacity: 0.5,
  },
});

export default BestSellerSection; 