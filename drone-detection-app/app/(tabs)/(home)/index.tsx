import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { registerForPushNotificationsAsync } from '@/notifications/register';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Her kommer alarmvisninger m.m.</Text>
    </View>
  );
}

// kalder 
useEffect (() => { registerForPushNotificationsAsync(); }, []);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
