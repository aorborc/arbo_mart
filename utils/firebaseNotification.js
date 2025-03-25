import messaging from '@react-native-firebase/messaging';
import { Alert, Platform, PermissionsAndroid } from 'react-native';

// Request permissions for notifications
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Notification permission granted.');
  }

  // Handle Android 13+ notification permission
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  }
}

// Get FCM Token
export async function getFCMToken() {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Error getting FCM token:', error);
  }
}

// Refresh FCM Token when it changes
export function onTokenRefresh() {
  messaging().onTokenRefresh(token => {
    console.log('FCM Token refreshed:', token);
    // Send new token to backend
  });
}

// Handle Incoming Notifications
export function notificationListener() {
  // Foreground Notification
  messaging().onMessage(async remoteMessage => {
    Alert.alert('New Notification', remoteMessage.notification?.title);
  });

  // When the app is in the background and the user taps the notification
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification opened:', remoteMessage);
  });

  // When the app is launched by tapping a notification
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('App opened from quit state:', remoteMessage);
      }
    });

  // Background Notification Handler
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in background:', remoteMessage);
  });
}

// Subscribe users to a topic
export function subscribeToTopic(topic) {
  messaging()
    .subscribeToTopic(topic)
    .then(() => console.log(`Subscribed to topic: ${topic}`));
}

// Unsubscribe users from a topic
export function unsubscribeFromTopic(topic) {
  messaging()
    .unsubscribeFromTopic(topic)
    .then(() => console.log(`Unsubscribed from topic: ${topic}`));
}
