import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../../components/header';
import SearchBar from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';
import CategoryGrid from '../../components/CategoryGrid';
import LinearGradient from "react-native-linear-gradient";
import MediaSlider from '../../components/MediaSlider';
import BestSellerSection from "../../components/BestSellerSection";
import NewArrivalSection from "../../components/NewArrivalSection";
const { width } = Dimensions.get('window');

const CategoryButton = ({ icon, darkIcon, label, isSelected, onPress }) => (
  <TouchableOpacity style={styles.categoryButton} onPress={onPress}>
    <Image 
      source={isSelected ? darkIcon : icon} 
      style={styles.MenuCategoryIcon} 
    />
    <Text numberOfLines={1} style={[styles.categoryLabel, isSelected && styles.categoryLabelSelected]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const MEDIA_ITEMS = [
  {
    type: 'image',
    source: {
      uri: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg'
    },
    title: 'Game-Changing Innovation',
    subtitle: 'Discover our latest bathroom technology',
    onPress: () => {}
  },
  {
    type: 'image',
    source: {
      uri: 'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg',
      // type: 'mp4'
    },
    title: 'Product Showcase',
    subtitle: 'Watch how our products work',
    onPress: () => {}
  },
  {
    type: 'image',
    source: {
      uri: 'https://images.pexels.com/photos/7195784/pexels-photo-7195784.jpeg'
    },
    title: 'Smart Features',
    subtitle: 'Experience modern convenience',
    onPress: () => {}
  },
  {
    type: 'image',
    source: {
      uri: 'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg'
    },
    title: 'Luxury Design',
    subtitle: 'Premium bathroom solutions',
    onPress: () => {}
  }
];

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const faucetsData = [
    {
      title: 'Pillar Tap',
      image: require('../../assets/icons/BASIN WITH FAUCET-05.png'),
    },
    {
      title: 'Bib Tap',
      image: require('../../assets/icons/BASIN WITH FAUCET-05.png'),
    },
    {
      title: 'Angle Valve',
      image: require('../../assets/icons/BASIN WITH FAUCET-05.png'),
    },
    {
      title: 'Sink Cock',
      image: require('../../assets/icons/BASIN WITH FAUCET-05.png'),
    },
    {
      title: 'High Neck Pillar Tap',
      image: require('../../assets/icons/BASIN WITH FAUCET-05.png'),
    },
    {
      title: 'High Flow Diverter Set',
      image: require('../../assets/icons/BASIN WITH FAUCET-05.png'),
    },
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleFaucetItemPress = (item) => {
    // Navigate to product details or category listing
    console.log('Selected faucet:', item);
  };

  const handleSeeAllFaucets = () => {
    // Navigate to faucets category
    console.log('Navigate to all faucets');
  };

  const handleSearch = (text) => {
    console.log('Searching:', text);
  };

  const handleVoiceSearch = () => {
    console.log('Voice search activated');
  };

  const handleProfilePress = () => {
    navigation.navigate('AccountPage');
  };

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor="#333333" />
      <LinearGradient 
      colors={['#1a1a1a', '#4a4a4a', '#9a9a9a']}
      start={{x: 1, y: 0}} 
      end={{x: 0, y: 0}}
 
      >
       
        <Header onProfilePress={handleProfilePress} />
        <SearchBar 
          onSearch={() => navigation.navigate('Search')} 
          onVoiceSearch={handleVoiceSearch} 
        />
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <CategoryButton 
            icon={require('../../assets/icons/All Light.png')}
            darkIcon={require('../../assets/icons/All Dark.png')}
            label="All"
            isSelected={selectedCategory === 'All'}
            onPress={() => handleCategoryPress('All')}
          />
          <CategoryButton 
            icon={require('../../assets/icons/Faucet Light.png')}
            darkIcon={require('../../assets/icons/Faucet Dark.png')}
            label="Faucets"
            isSelected={selectedCategory === 'Faucets'}
            onPress={() => handleCategoryPress('Faucets')}
          />
          <CategoryButton 
            icon={require('../../assets/icons/Sanitaryware Light.png')}
            darkIcon={require('../../assets/icons/Sanitaryware Dark.png')}
            label="Sanitaryware"
            isSelected={selectedCategory === 'Sanitaryware'}
            onPress={() => handleCategoryPress('Sanitaryware')}
          />
          <CategoryButton 
            icon={require('../../assets/icons/Kitchen Sink Light.png')}
            darkIcon={require('../../assets/icons/Kitchen Sink Dark.png')}
            label="Kitchen Sink"
            isSelected={selectedCategory === 'Sink'}
            onPress={() => handleCategoryPress('Sink')}
          />
          <CategoryButton 
            icon={require('../../assets/icons/Accessories Light.png')}
            darkIcon={require('../../assets/icons/Accessories Dark.png')}
            label="Accessories"
            isSelected={selectedCategory === 'Access.'}
            onPress={() => handleCategoryPress('Access.')}
          />
        </View>
    
       
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>India's Fastest Growing Brand</Text>
        </View>

      
        {/* Featured Categories */}
        <View style={styles.featuredGrid}>
          <View style={styles.featuredItem}>
            <Image source={require('../../assets/icons/BASIN WITH FAUCET-05.png')} style={styles.featuredImage} />
            <Text style={styles.featuredTitle}>Kia Collection</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image source={require('../../assets/icons/BASIN WITH FAUCET-05.png')} style={styles.featuredImage} />
            <Text style={styles.featuredTitle}>Designer Table Top Basin</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image source={require('../../assets/icons/BASIN WITH FAUCET-05.png')} style={styles.featuredImage} />
            <Text style={styles.featuredTitle}>Bathroom Accessories</Text>
          </View>
        </View>
   
        {/* Best Seller Collection */}
        <BestSellerSection />

        {/* New Arrival */}
        <NewArrivalSection />

        {/* Shop by Category - Faucets */}
        <CategoryGrid
          title="Shop by Category Faucets"
          items={faucetsData}
          onItemPress={handleFaucetItemPress}
          onSeeAll={handleSeeAllFaucets}
        />
        <CategoryGrid
          title="Shop by Category Sanitaryware"
          items={faucetsData}
          onItemPress={handleFaucetItemPress}
          onSeeAll={handleSeeAllFaucets}
        />
        <CategoryGrid
          title="Shop by Category Kitchen Sink"
          items={faucetsData}
          onItemPress={handleFaucetItemPress}
          onSeeAll={handleSeeAllFaucets}
        />
        <CategoryGrid
          title="Shop by Category Accessories"
          items={faucetsData}
          onItemPress={handleFaucetItemPress}
          onSeeAll={handleSeeAllFaucets}
        />
        
        <MediaSlider mediaItems={MEDIA_ITEMS} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradientContainer: {

  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoriesContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryButton: {
    alignItems: 'center',
    paddingBottom: 8,
    width: '19%',
  },
  categoryButtonSelected: {
    backgroundColor: '#f0f0f0',
  },
  MenuCategoryIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 11,
    textAlign: 'center',
  },
  categoryLabelSelected: {
    fontWeight: "600",
  },
  bannerContainer: {
    // backgroundColor: '#f0f0f0',
    padding: 5,
    marginVertical: 5,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  featuredGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  featuredItem: {
    width: '32%',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    
  },
  featuredImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  featuredTitle: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 5,
    textAlign: 'center',

  },
 
});

export default HomeScreen;
