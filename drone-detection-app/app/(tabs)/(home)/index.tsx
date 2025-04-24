import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { registerForPushNotificationsAsync } from '@/services/pushNotifications';

export default function HomeScreen() {
  console.log('useEffect er aktiv i HomeScreen');
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Her kommer alarmvisninger m.m.</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
