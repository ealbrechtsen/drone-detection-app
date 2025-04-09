import { Stack } from "expo-router";

export default function MapStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="map" options={{ headerShown: false }} />
    </Stack>
  );
}