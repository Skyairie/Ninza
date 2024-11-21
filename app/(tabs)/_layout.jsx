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
import Main3 from "@/components/trophy";
import ReferEarn from "@/components/referEarn";
import Header from "@/components/header";
import Trophy from "@/components/trophy";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator
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
                if (route.name === "Home") {
                  iconName = focused
                    ? "game-controller"
                    : "game-controller-outline";
                } else if (route.name === "Leaderboard") {
                  iconName = focused ? "trophy" : "trophy-outline";
                } else if (route.name === "Share") {
                  iconName = focused ? "share-social" : "share-social-outline";
                } else if (route.name === "Wallet") {
                  iconName = focused ? "wallet" : "wallet-outline";
                }
                return (
                  <Icon
                    name={iconName}
                    size={focused ? 30 : 27}
                    color={color}
                  />
                );
              }
            },
            tabBarStyle: {
              height: 80,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: "#1A2B4C",
              borderTopWidth: 0,
            },

            // tabBarLabelStyle: {
            //   fontSize: 12, // Increase this value to make text larger
            //   fontWeight: "normal",

            // },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#7C7D90",
          })}
        >
          <Tab.Screen
            name="Home"
            component={Header}
            options={{ headerShown: false, tabBarLabel: () => null }}
          />
          <Tab.Screen
            name="Leaderboard"
            component={Trophy}
            options={{ headerShown: false, tabBarLabel: () => null }}
          />
          <Tab.Screen
            name="Main"
            component={Header}
            options={{ headerShown: false, tabBarLabel: () => null }}
          />
          <Tab.Screen
            name="Share"
            component={ReferEarn}
            options={{ headerShown: false, tabBarLabel: () => null }}
          />
          <Tab.Screen
            name="Wallet"
            component={WalletScreen}
            options={{ headerShown: false, tabBarLabel: () => null }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  playButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "yellow",
    borderWidth: 2,
  },
});
