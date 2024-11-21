import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import BoardScreen from "@/app/(tabs)/boardScreen";
import NinzaMania from "./ninzamania";
import Tournament from "./Tournament";

const Main = () => {
  const [activeTab, setActiveTab] = useState("NINZAMANIA");

  // const Tournament = () => (
  //   <Text style={styles.dynamicContent}>Join exciting tournaments now!</Text>
  // );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1A2B4C" />
      <LinearGradient colors={["#1A2B4C", "#204173", "#006eb0"]} style={styles.container}>
        
        {/* Navbar */}
        <View style={styles.navbar}>
          <Icon name="person-circle-outline" size={30} color="#ffffff" />
          <View style={styles.walletContainer}>
            <Icon name="wallet-outline" size={20} color="#00CFFD" style={styles.walletIcon} />
            <Text style={styles.walletLabel}>₹</Text>
            <Text style={styles.walletBalance}>200</Text>
          </View>
          <View style={styles.navIcons}>
            <Icon name="notifications-outline" size={24} color="#ffffff" style={styles.iconSpacing} />
          </View>
        </View>

        {/* Header Tabs */}
        <View style={styles.headerTabs}>
          {["NINZAMANIA", "LEADERBOARD", "TOURNAMENT"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            >
              <Text style={[styles.headerTab, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Render active tab content */}
        {activeTab === "NINZAMANIA" && <NinzaMania />}
        {activeTab === "LEADERBOARD" && <BoardScreen />}
        {activeTab === "TOURNAMENT" && <Tournament />}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1A2B4C",
  },
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  walletContainer: {
    flexDirection: "row",
    alignItems: "center",        // Centers items vertically
    justifyContent: "center",     // Centers items horizontally
    backgroundColor: "#143F62",
    borderRadius: 10,
    paddingHorizontal: 15,        // Adjusted padding for centering
    paddingVertical: 5,
  },
  walletIcon: {
    marginRight: 5,               // Space between icon and text
  },
  walletLabel: {
    color: "#00CFFD",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    marginRight: 5,               // Space between label and balance
  },
  walletBalance: {
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
  },
  navIcons: {
    flexDirection: "row",
  },
  iconSpacing: {
    //marginRight: 20,
  },
  headerTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#143A5A",
  },
  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabButton: {
    transform: [{ scale: 1.1 }],
  },
  headerTab: {
    color: "#A9C1E8",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  activeTabText: {
    color: "#e4be00",
    fontSize: 18,
  },
  dynamicContent: {
    color: "#D0E7FF",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});

export default Main;
