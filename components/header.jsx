import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import BoardScreen from "@/app/(tabs)/boardScreen";
import NinzaMania from "./ninzamania";
import Tournament from "./Tournament";
import { fonts } from "@/utils/fonts";

const Header = () => {
  const [activeTab, setActiveTab] = useState("NINZAMANIA");
  const [gradientColors, setGradientColors] = useState([
    "#1A2B4C",
    "#1A2B4C", //#204173
    "#006eb0",
  ]);
  const [headerColor, setHeaderColor] = useState("#143A5A");
  const [tabBlockColor, setTabBlockColor] = useState("#143A5A");

  useFocusEffect(
    React.useCallback(() => {
      // Reset active tab to "NINZAMANIA" when screen is focused
      setActiveTab("NINZAMANIA");
      setGradientColors(["#1A2B4C", "#204173", "#006eb0"]); // Default gradient
      setHeaderColor("#143A5A"); // Default header color
      setTabBlockColor("#143A5A"); // Default tab block color
    }, [])
  );

  const handleTabPress = (tab) => {
    setActiveTab(tab);

    // Update colors based on the selected tab
    switch (tab) {
      case "LEADERBOARD":
        setGradientColors(["#14bf98", "#14bf98", "#14bf98"]); // Dummy gradient
        setHeaderColor("#004845"); // Dummy header color
        setTabBlockColor("#004B4A"); // Dummy tab block color
        break;
      case "NINZAMANIA":
        setGradientColors(["#1A2B4C", "#204173", "#006eb0"]); // Default gradient
        setHeaderColor("#1A2B4C"); // Default header color
        setTabBlockColor("#1A2B4C"); // Default tab block color
        break;
      case "TOURNAMENT":
        setGradientColors(["#58003b", "#b8007a", "#ff0090"]); // Dummy gradient
        setHeaderColor("#58003b"); // Dummy header color
        setTabBlockColor("#5A003C"); // Dummy tab block color
        break;
      default:
        setGradientColors(["#1A2B4C", "#204173", "#006eb0"]);
        setHeaderColor("#143A5A");
        setTabBlockColor("#143A5A");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Dynamic StatusBar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={headerColor} // Dynamically change StatusBar color
      />
      <LinearGradient colors={gradientColors} style={styles.container}>
        {/* Header */}
        <View style={[styles.navbar, { backgroundColor: headerColor }]}>
          <Icon name="person-circle-outline" size={30} color="#ffffff" />
          <View style={styles.walletContainer}>
            <Icon
              name="wallet-outline"
              size={20}
              color="#00CFFD"
              style={styles.walletIcon}
            />
            <Text style={styles.walletLabel}>₹</Text>
            <Text style={styles.walletBalance}>200</Text>
          </View>
          <Icon
            name="notifications-outline"
            size={24}
            color="#ffffff"
            style={styles.iconSpacing}
          />
        </View>

        {/* Tabs */}
        <View style={[styles.headerTabs, { backgroundColor: tabBlockColor }]}>
          {["NINZAMANIA", "LEADERBOARD", "TOURNAMENT"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => handleTabPress(tab)}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton,
              ]}
            >
              <Text
                style={[
                  styles.headerTab,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Dynamic Content */}
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
    paddingHorizontal: 17,
    paddingBottom: 10,
    paddingTop: 10,
  },
  walletContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#143F62",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  walletIcon: {
    marginRight: 5,
  },
  walletLabel: {
    color: "#00CFFD",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    marginRight: 5,
  },
  walletBalance: {
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
  },
  headerTabs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabButton: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabButton: {
    borderBottomWidth: 3,
    borderBottomColor: "#e4be00",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerTab: {
    color: "#A9C1E8",
    fontSize: 16,
    fontFamily: fonts.Poppins,
  },
  activeTabText: {
    color: "#e4be00",
    fontSize: 20,
  },
});

export default Header;
