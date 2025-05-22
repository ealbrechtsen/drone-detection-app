import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useState } from "react";
import { getDroneAlarm } from "@/services/droneAlarmApi";
import { DroneAlarm } from "@/types/dronedetection";

export default function MapTab() {
  const [alarms, setAlarms] = useState<DroneAlarm[]>([]);

  useEffect(() => {
    getDroneAlarm().then(setAlarms).catch(() => setAlarms([]));
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 55.6761,
          longitude: 12.5683,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {alarms.map((alarm, idx) => (
          <Marker
            key={alarm.id || idx}
            coordinate={{
              latitude: alarm.location.lat,
              longitude: alarm.location.lon,
            }}
            title={alarm.Detected ? "Drone detected" : "No drone"}
            description={`Confidence: ${Math.round(alarm.Confidence * 100)}%`}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});