import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { registerForPushNotificationsAsync } from '@/services/pushNotifications';
import { getDroneAlarm } from '@/services/droneAlarmApi';
import { DroneAlarm } from '@/types/dronedetection';
import DroneAlarmItem from '@/components/DroneAlarmItem';

export default function HomeScreen() {
  const [alarms, setAlarms] = useState<DroneAlarm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log('useEffect er aktiv i HomeScreen');
  useEffect(() => {
    registerForPushNotificationsAsync();

    getDroneAlarm()
      .then(setAlarms)
      .catch((err) => {
        console.error('Fejl ved hentning:', err);
        setError('Kunne ikke hente alarmer.');
      })
      .finally(() => setLoading(false));

  }, []);

  return (
    <View style={styles.container}>
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
            <Text style={styles.text}>Ingen dronealarmer fundet.</Text>
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