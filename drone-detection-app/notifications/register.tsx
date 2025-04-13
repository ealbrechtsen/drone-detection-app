// notifications/register.ts
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

/**
 * Registers the device for push notifications using Expo and returns the device's push token.
 *
 * Pre-conditions:
 * - The method should be called from a physical device or an emulator with Google Play services.
 * - The app must have permission to display notifications (either granted beforehand or requested by this function).
 *
 * Post-conditions:
 * - If permission is granted, a push token is generated and returned.
 * - If permission is denied or device is unsupported, the function returns undefined.
 *
 * @returns The push token string if successful, otherwise undefined.
 */
export async function registerForPushNotificationsAsync() {
  let token;

  if (Device.isDevice) {
    // Check if notification permissions have already been granted
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      // Request permission from the user if not already granted
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      // If permission is still not granted, notify the user and exit
      alert('Permission was not granted');
      return;
    }

    // Returns a native push token for the device ( )
    const response = await Notifications.getDevicePushTokenAsync();
    token = response.data;
    console.log('FCM-token:', token);
  } else {
    // Notify the user if the code is not running on a physical device or proper emulator
    alert('Must run on a physical device or an Android emulator with Google Play');
  }

  if (Platform.OS === 'android') {
    // Configure Android-specific notification channel
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  // Return the device's push token or undefined
  return token;
}
