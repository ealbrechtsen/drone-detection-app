// app/(tabs)/more.tsx

import { StyleSheet, Text, View } from 'react-native'
import { Link } from "expo-router";

export default function MoreTab() {
  return (
    <View style={styles.container}>
      <Link href="/more/profile" asChild>
        <Text>Profile</Text>
      </Link>

      <Link href="/more/settings" asChild>
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