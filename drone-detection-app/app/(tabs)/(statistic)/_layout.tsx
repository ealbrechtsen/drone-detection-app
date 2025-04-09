import { Stack } from "expo-router";

export default function StatisticTabLayout() {
    return (
        <Stack>
            <Stack.Screen name="statistic" options={{ headerShown: false }} />
        </Stack>
    );
}