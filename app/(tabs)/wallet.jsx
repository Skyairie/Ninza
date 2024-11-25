import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import {
  WalletIcon,
  InfoIcon,
  TrophyIcon,
  PercentIcon,
  ChevronRightIcon,
} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function WalletScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#58003b" /> */}
      <LinearGradient
        colors={["#58003b", "#b8007a", "#006eb0"]}
        style={styles.container1}
      >
        <View style={styles.container1}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity>
              <FontAwesome5 name="user-circle" size={34} color="white" />
            </TouchableOpacity>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity>
                <MaterialIcons name="contact-support" size={34} color="white" />
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: 10 }}>
                {"Transaction,\n & support."}
              </Text>
            </View>
          </View>

          {/* Balance Display */}
          <View style={styles.balanceContainer}>
            <Text style={styles.headerText}>Wallet Balance</Text>
            <Text style={styles.balanceText}>₹119.41</Text>
          </View>

          {/* Wallet Info */}
          <View style={styles.cardContainer}>
            {/* Unplayed Section */}
            <View style={styles.card}>
              <View style={styles.infoRow}>
                <View style={styles.iconTextContainer}>
                  <WalletIcon size={30} color="#7c3aed" />
                  <View>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Unplayed</Text>
                      <InfoIcon size={16} color="#9ca3af" />
                    </View>
                    <Text style={styles.amount}>₹0</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>ADD CASH</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Bonus Section */}
            <View style={styles.card}>
              <View style={styles.infoRow}>
                <View style={styles.iconTextContainer}>
                  <WalletIcon size={30} color="#7c3aed" />
                  <View>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Bonus</Text>
                      <InfoIcon size={16} color="#9ca3af" />
                    </View>
                    <Text style={styles.amount}>₹115.87</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.earnButton}>
                  <Text style={styles.buttonText}>EARN BONUS</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Winnings Section */}
            <View style={styles.card}>
              <View style={styles.infoRow}>
                <View style={styles.iconTextContainer}>
                  <TrophyIcon size={30} color="#7c3aed" />
                  <View>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Winnings</Text>
                      <InfoIcon size={16} color="#9ca3af" />
                    </View>
                    <Text style={styles.amount}>₹3.53</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.withdrawButton}>
                  <Text style={styles.buttonText}>WITHDRAW</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Offers & Benefits Section */}
          <View style={styles.offerCard}>
            <View style={styles.infoRow1}>
              <View style={styles.iconTextContainer}>
                <PercentIcon size={24} color="#fb923c" />
                <View>
                  <Text style={styles.label}>My Offers & Benefits</Text>
                  <Text style={styles.subLabel}>View All Offers</Text>
                </View>
              </View>
              <ChevronRightIcon size={24} color="#9ca3af"  />
            </View>
          </View>
          

        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    
  },
  container1: {
    padding: 0,
    flex: 1,
    
  },
  header: {
    marginTop:20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 26,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  balanceContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  balanceText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
  },
  cardContainer: {
    paddingHorizontal: 18,
    paddingVertical:0,
    backgroundColor:'white',
    padding: 10,
    margin:20,
    borderRadius:10,
    marginTop:30,
    paddingTop:30,
    
  },
  card: {
    // backgroundColor: "#fff",
    // borderRadius: 12,
    // padding: 16,
    // marginBottom: 10,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    // elevation: 1,
    paddingBottom:30,
  },
  offerCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 10, // Adjust position closer to wallet cards
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoRow1: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",

  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  subLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  amount: {
    fontSize: 21,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 10,
  },
  earnButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  withdrawButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
