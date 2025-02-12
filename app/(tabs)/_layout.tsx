import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD33D",
        headerStyle: { backgroundColor: "#25292E"},
        headerShadowVisible: false,
        headerTintColor: "#FFF",
        tabBarStyle: { backgroundColor: "#25292E"}, 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
             name={focused ? "information-circle" : "information-circle-outline"}
             color={color}
             size={24} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
