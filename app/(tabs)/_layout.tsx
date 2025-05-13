import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          android: {
            borderTopWidth: 0,
            elevation: 0,
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
  name="index"
  options={{
    tabBarIcon: ({ color }) => <IconSymbol size={25} name="house.fill" color={color} />,
  }}
/>
<Tabs.Screen
  name="explore"
  options={{
    tabBarIcon: ({ color }) => <IconSymbol size={25} name="paperplane.fill" color={color} />,
  }}
/>
<Tabs.Screen
  name="Login" 
  options={{
    tabBarIcon: ({ color }) => <IconSymbol size={25} name="forward.fill" color={color} />,
  }}
/>
<Tabs.Screen 
  name="Profile" 
  options={{
    tabBarIcon: ({ color }) => <IconSymbol size={25} name="person-outline.fill" color={color} />,
  }}
/>

    </Tabs>
  );
}
