import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 3; // 3 cards per row with margins

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  onAddToCart,
  onWishlist,
}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.wishlistButton} onPress={onWishlist}>
        <Image 
          source={require('../assets/icons/Wishlist Light.png')} 
          style={styles.wishlistIcon} 
          resizeMode="contain"
        />
      </TouchableOpacity>
      
      <Image source={image} style={styles.productImage} />
      
      <View style={styles.contentContainer}>
      <View style={styles.priceContainer}>
          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{price}</Text>
          </View>
          {originalPrice && originalPrice !== price && (
            <Text style={styles.originalPrice}>₹{originalPrice}</Text>
          )}
        </View>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={onAddToCart}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  wishlistButton: {
    position: 'absolute',
    right: 4,
    top: 4,
    zIndex: 1,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlistIcon: {
    width: 20,
    height: 20,
  },
  productImage: {
    width: '100%',
    height: CARD_WIDTH,
    resizeMode: 'contain',
    backgroundColor: '#F8F8F8',
  },
  contentContainer: {
    paddingHorizontal: 6,
    paddingBottom: 6,
  },
  title: {
    fontSize: 11,
    fontWeight: '500',
    color: '#333',
    marginBottom: 6,
    // height: 25, // Fixed height for 2 lines
  },
  priceContainer: {
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  originalPrice: {
    fontSize: 11,
    color: '#999',
    textDecorationLine: 'line-through',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    paddingVertical: 4,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#333',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default ProductCard; 