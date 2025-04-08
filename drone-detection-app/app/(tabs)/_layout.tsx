import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';
import type { TabBarIconProps } from '../../types/navigation.d.ts';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }: TabBarIconProps) => (<Entypo size={28} name="home" color={color} />),
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: 'Map',
                    tabBarIcon: ({ color }: TabBarIconProps) => (<Entypo size={28} name="map" color={color} />),
                }}
            />
            <Tabs.Screen
                name="statistic"
                options={{
                    title: 'Statistic',
                    tabBarIcon: ({ color }: TabBarIconProps) => (<Entypo size={28} name="bar-graph" color={color} />),
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'More',
                    tabBarIcon: ({ color }: TabBarIconProps) => (<Entypo size={28} name="menu" color={color} />),
                }}
            />
        </Tabs>
    );
}
