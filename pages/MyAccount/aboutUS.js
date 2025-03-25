import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AboutUsScreen = () => {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Logo and Version */}
        <View style={styles.logoSection}>
          <Image 
            source={require('../../assets/ARBO_Mart_Logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.version}>V2025.01</Text>
        </View>

        {/* Description Sections */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            The Arbo Mart B2B application is a seamless ordering and management solution designed for businesses. With its intuitive interface, managing orders, tracking invoices, and handling payments becomes effortless.
          </Text>

          <Text style={styles.description}>
            Easily access account statements, request returns, register service complaints, and streamline your purchasing process all in one place.
          </Text>

          <Text style={styles.description}>
            Stay in control of your business transactions any time, anywhere with the Arbo Mart B2B app, built to simplify and enhance your wholesale buying experience.
          </Text>
        </View>

        {/* Contact Links */}
        <View style={styles.contactContainer}>
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => Linking.openURL('tel:+911800123124000')}
          >
            <MaterialIcons name="phone" size={24} color="#666" style={styles.contactIcon} />
            <Text style={styles.contactText}>+91 1800 123 124 000</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => openLink('https://www.arbobath.com')}
          >
            <MaterialIcons name="language" size={24} color="#666" style={styles.contactIcon} />
            <Text style={styles.contactText}>www.arbobath.com</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => openLink('https://developer.arbobath.com')}
          >
            <MaterialIcons name="mail-outline" size={24} color="#666" style={styles.contactIcon} />
            <Text style={styles.contactText}>developer.arbobath.com</Text>
          </TouchableOpacity>
        </View>

        {/* Social Media Section */}
        <View style={styles.socialContainer}>
          <Text style={styles.socialTitle}>FOLLOW FOR MORE UPDATES</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => openLink('https://facebook.com/arbobath')}>
              <FontAwesome name="facebook" size={30} color="#666" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://instagram.com/arbobath')}>
              <FontAwesome name="instagram" size={30} color="#666" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://wa.me/911800123124000')}>
              <FontAwesome5 name="whatsapp" size={30} color="#666" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://youtube.com/arbobath')}>
              <FontAwesome name="youtube-play" size={30} color="#666" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://linkedin.com/company/arbobath')}>
              <FontAwesome name="linkedin" size={30} color="#666" style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  appName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  version: {
    color: '#666',
    fontSize: 16,
  },
  descriptionContainer: {
    marginBottom: 30,
  },
  description: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
  },
  contactContainer: {
    marginBottom: 40,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactIcon: {
    marginRight: 15,
  },
  contactText: {
    fontSize: 16,
    color: '#666',
  },
  socialContainer: {
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    fontWeight: '500',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 200,
    height: 60,
  },
});

export default AboutUsScreen;