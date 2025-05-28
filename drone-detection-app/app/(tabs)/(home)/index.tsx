import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { registerForPushNotificationsAsync } from '@/services/pushNotifications';
import { getDroneAlarm } from '@/services/droneAlarmApi';
import { DroneAlarm } from '@/types/dronedetection';
import DroneAlarmItem from '@/components/DroneAlarmItem';

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Hent alarmer" onPress={handleFetch} />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.text}>{error}</Text>
      ) : (
        <FlatList
          data={alarms}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <DroneAlarmItem alarm={item} />}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <Text style={styles.text}>No drone alarms found.</Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#444',
  },
});