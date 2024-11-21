import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context"; // Use safe area context
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import CurvedDivider from "./curvedDivider";
import { BlurView } from "expo-blur";
import BoardScreen from "@/app/(tabs)/boardScreen";

const Ledrb = () => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });

  const [activeTab, setActiveTab] = useState("LEADERBOARD");

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1A2B4C" />
      <LinearGradient
        colors={["#1A2B4C", "#204173", "#006eb0"]}
        style={styles.container}
      >
        {/* Top Navbar */}
        <View style={styles.navbar}>
          <Icon name="person-circle-outline" size={30} color="#ffffff" />
          <View style={styles.walletContainer}>
            <Text style={styles.walletLabel}>₹</Text>
            <Text style={styles.walletBalance}>0</Text>
          </View>
          <View style={styles.navIcons}>
            <Icon
              name="notifications-outline"
              size={24}
              color="#ffffff"
              style={{ marginRight: 15 }}
            />
            
          </View>
        </View>

        {/* Header Tabs */}
        <View style={styles.headerTabs}>
          {["NINZAMANIA", "LEADERBOARD", "TOURNAMENT"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
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
        {activeTab === "NINZAMANIA" && (
          <Text style={styles.dynamicContent}>
            Welcome to Ninzamania Games!
          </Text>
        )}
        {activeTab === "LEADERBOARD" && (
          <BoardScreen/>
        )}
        {activeTab === "TOURNAMENT" && (
          <Text style={styles.dynamicContent}>
            Join exciting tournaments now!
          </Text>
        )}

        
      </LinearGradient>
    </SafeAreaView>
  );
};

// Section Component with Curved Divider Line
const Section = ({ title, items }) => (
  <View style={styles.section}>
    <CurvedDivider />
    <Text style={styles.sectionTitle}>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.gameCard}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.gameImage}
          />
          <Text style={styles.gameText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

// SVG Component for Curved Divider
<CurvedDivider />;

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
    alignItems: "center",
    backgroundColor: "#143F62",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  walletLabel: {
    color: "#00CFFD",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
  },
  walletBalance: {
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    marginLeft: 5,
  },
  navIcons: {
    flexDirection: "row",
  },
  headerTabs: {
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingVertical: 3,
    backgroundColor: "#143A5A",
    
  },
  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabButton: {
    transform: [{ scale: 1.1 }], // Slightly grow the button
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
  submenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1E4D73",
    paddingVertical: 10,
  },
  submenuText: {
    color: "#D0E7FF",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  dynamicContent: {
    color: "#D0E7FF",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginVertical: 20,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    color: "#D0E7FF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    marginBottom: 5,
  },
  gameCard: {
    backgroundColor: "#276B9B",
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    alignItems: "center",
    width: 100,
  },
  gameImage: {
    width: 80,
    height: 60,
    borderRadius: 5,
  },
  gameText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    fontFamily: "Poppins_400Regular",
  },
  bottomBanner: {
    padding: 10,
    //borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Adding transparency

  },
  bannerText: {
    color: "#00CFFD",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
  },
  bannerDescription: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1A2B4C",
    paddingVertical: 10,
  },
  playButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Ledrb;