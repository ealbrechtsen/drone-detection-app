// src/components/DroneAlarmItem.tsx

import { View, Text, StyleSheet, Linking } from "react-native";
import { DroneAlarm } from "@/types/dronedetection";

export default function DroneAlarmItem({ alarm }: { alarm: DroneAlarm }) {
    return (
        <View style={styles.container}>
            <Text style={styles.status}>
                {alarm.Detected ? '🛑 Drone detected' : '✅ no drone'}
            </Text>

            <Text style={styles.label}>
                Tidspunkt: {new Date(alarm.Timestamp).toLocaleString()}
            </Text>

            <Text style={styles.label}>
                Sikkerhed: {Math.round(alarm.Confidence * 100)}%
            </Text>

            <Text style={styles.label}>
                Model: {alarm.ModelVersion}
            </Text>

            <Text style={styles.label}>
                Lokation: {alarm.location.lat}, {alarm.location.lon}
            </Text>

            <Text
                style={styles.link}
                onPress={() => {
                    if (alarm.RecordingURL) Linking.openURL(alarm.recordingURL);
                }}
            >
                🎧 Play sound
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 14,
        marginVertical: 8,
    },
    status: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6,
    },
    label: {
        fontSize: 14,
        marginVertical: 2,
    },
    link: {
        marginTop: 8,
        color: '#1e90ff',
        textDecorationLine: 'underline',
    },
});