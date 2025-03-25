import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const NotificationsScreen = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: 'New Launch Faucets Collection for Economy Segments',
      description: 'See The Economy Segments in Apple Collection Looks exclusive design and operation.',
      image: require('../../assets/icons/Faucet Dark.png'),
      date: '3 February 2025',
      isNew: true,
      unread: true
    },
    {
      id: 2,
      title: 'Price Drop Alert: Metrix Collection!',
      description: 'Exciting news! The prices on our premium Metrix Collection have just dropped. Get the best in bathware at unbeatable prices. Hurry, limited stock available!',
      date: '1 June 2024',
      isNew: true,
      unread: true
    },
    {
      id: 3,
      title: 'We\'re Exhibiting at Global Expo 2023 - GPBS!',
      description: 'We\'re thrilled to announce our participation in Global Expo 2023 - GPBS! Join us as we showcase our latest bathware innovations to a global audience. Visit our booth to explore premium designs and exclusive offers. See you there!',
      date: '1 March 2023',
      isNew: false,
      unread: false
    }
  ]);

  const hasNotifications = notifications.length > 0;

  if (!hasNotifications) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/icons/Notification Light.png')}
              style={styles.notificationIcon}
            />
          </View>
          <Text style={styles.title}>No Notifications Found</Text>
          <Text style={styles.message}>
            "No notifications available at the moment. Stay tuned for order updates,
            special offers, and important alerts!"
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* New Notifications Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New Notifications</Text>
      </View>
      
      {notifications.filter(n => n.isNew).map(notification => (
        <TouchableOpacity key={notification.id} style={styles.notificationCard}>
          {notification.unread && <View style={styles.unreadDot} />}
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
            {notification.image && (
              <Image 
                source={notification.image}
                style={styles.notificationImage}
              />
            )}
            <Text style={styles.notificationDate}>{notification.date}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Old Notifications Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Old Notifications</Text>
      </View>
      
      {notifications.filter(n => !n.isNew).map(notification => (
        <TouchableOpacity key={notification.id} style={styles.notificationCard}>
          {notification.unread && <View style={styles.unreadDot} />}
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
            {notification.image && (
              <Image 
                source={notification.image}
                style={styles.notificationImage}
              />
            )}
            <Text style={styles.notificationDate}>{notification.date}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  iconContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  notificationIcon: {
    width: 120,
    height: 120,
    tintColor: '#666',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  sectionHeader: {
    backgroundColor: '#D3D3D3',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  notificationCard: {
    backgroundColor: '#fff',
    marginBottom: 1,
    position: 'relative',
  },
  unreadDot: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  notificationContent: {
    padding: 16,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  notificationImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  notificationDate: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});

export default NotificationsScreen;