// app/(tabs)/(more)/more.tsx

import { StyleSheet, Text, View } from 'react-native'
import { Link } from "expo-router";

export default function MoreTab() {
  return (
    <View style={styles.container}>
      <Link href="/(tabs)/(more)/profile" asChild>
        <Text>Profile</Text>
      </Link>

      <Link href="/(tabs)/(more)/settings" asChild>
        <Text>Settings</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  }
})