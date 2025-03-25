import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const CategoryGrid = ({ title, items, onSeeAll, onItemPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.gridItem}
            onPress={() => onItemPress(item)}
          >
            <View style={styles.imageContainer}>
              <Image source={require('../assets/icons/BASIN WITH FAUCET-05.png')} style={styles.image} />
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity 
        style={styles.seeAllButton} 
        onPress={onSeeAll}
      >
        <View style={styles.seeAllContent}>
          <Image 
            source={require('../assets/icons/BASIN WITH FAUCET-05.png')} 
            style={styles.categoryIcon} 
          />
          <Text style={styles.seeAllText}>See all Faucets Category</Text>
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
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin:10
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    marginLeft: 5,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  gridItem: {
    width: (width - 60) / 3,
    marginBottom: 5,
    // borderWidth: 1,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    // backgroundColor: '#000',
    padding: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
    color: '#333',
    fontWeight: '500',
  },
  seeAllButton: {
    marginTop: 12,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  seeAllContent: {
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

export default CategoryGrid; 