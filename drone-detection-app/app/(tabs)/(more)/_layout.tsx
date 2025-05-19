// app/(tabs)/(more)/_layout.tsx 
import { Stack } from "expo-router";

export default function MoreStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="more"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          // headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          // headerBackTitleVisible: false
        }}
      />
    </Stack>
  );
}