import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Image, StyleSheet, View, Text } from "react-native";
import WalletScreen from "../(tabs)/wallet";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReferEarn from "@/components/referEarn";
import Header from "@/components/header";
import Trophy from "@/components/trophy";
import ProfilePage from "@/components/profile";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const tabColors = {
    Profile:"#0b0d2d", // Blue
    Leaderboard:"#D0021B", // Red
    Main: "#1A2B4C", // Orange
    Share: "#7ED321", // Green
    Wallet: "#3B0066", // Purple
  };
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Main") {
            return (
              <TouchableOpacity style={styles.playButton}>
                <Image
                  source={require("@/assets/images/5.png")} // Replace with your logo path
                  style={{ width: 25, height: 30 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          } else {
            let iconName;
            if (route.name === "Profile") {
              iconName = focused
                ? "person"
                : "person-outline";
            } else if (route.name === "Leaderboard") {
              iconName = focused ? "trophy" : "trophy-outline";
            } else if (route.name === "Share") {
              iconName = focused ? "share-social" : "share-social-outline";
            } else if (route.name === "Wallet") {
              iconName = focused ? "wallet-sharp" : "wallet-sharp";
            }
            return (
              <Icon name={iconName} size={focused ? 28 : 25} color={color} />
            );
          }
        },
        tabBarStyle: {
          height: 75,
          paddingTop: 5,
          paddingBottom: 0,
          backgroundColor: tabColors[route.name],
          borderTopWidth: 0,
        },

        tabBarLabelStyle: {
          fontSize: 11, // Increase this value to make text larger
          fontWeight: "normal",
          marginTop: 8,
        },
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "#C0C0C0",
      })}
    >
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Trophy}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Main"
        component={Header}
        options={{ headerShown: false, tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Share"
        component={ReferEarn}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  playButton: {
    padding: 11,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "yellow",
    borderWidth: 2,
    marginTop:10
  },
});
