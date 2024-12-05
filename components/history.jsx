import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { ArrowLeft, Settings, Info, Wallet } from "react-native-feather"; // Using react-native-feather for icons
import { LinearGradient } from "expo-linear-gradient";

const History = () => {
  return (
    <LinearGradient colors={["#6B00B3", "#4B0082"]} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          accessibilityLabel="Go back"
        >
          <ArrowLeft color="#6B00B3" width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Settings color="#fff" width={24} height={24} />
          <Text style={styles.headerTitle}>MY OFFERS</Text>
        </View>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.navigationTabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Available</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Used</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Expired</Text>
        </TouchableOpacity>
      </View>

      {/* Offer Cards */}
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {/* Fantasy Coupon Card */}
        <LinearGradient
          colors={["#FF69B4", "#800080"]}
          style={styles.card}
        >
          <View style={styles.cardHeader}>
            <View style={styles.tag}>
              <Settings color="#fff" width={16} height={16} />
              <Text style={styles.tagText}>COUPON</Text>
            </View>
            <TouchableOpacity accessibilityLabel="More information">
              <Info color="#fff" width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.cardBody}>
            <View>
              <Text style={styles.cardTitle}>₹5 60% off Fantasy Coupon</Text>
              <Text style={styles.cardDescription}>
                Make your Fantasy team. Max. discount upto ₹5
              </Text>
            </View>
            <Image
              source={{
                uri: "https://placehold.co/60x60/FFD700/000000?text=🏏",
              }}
              style={styles.cardImage}
            />
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playButtonText}>PLAY</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Cash Bonus Card */}
        <LinearGradient
          colors={["#800080", "#4B0082"]}
          style={styles.card}
        >
          <View style={styles.cardHeader}>
            <View style={styles.tag}>
              <Settings color="#fff" width={16} height={16} />
              <Text style={styles.tagText}>BONUS</Text>
            </View>
            <TouchableOpacity accessibilityLabel="More information">
              <Info color="#fff" width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.cardBody}>
            <View>
              <Text style={styles.cardTitle}>₹12 Cash Bonus</Text>
              <Text style={styles.cardDescription}>
                Receive direct bonus in wallet. Use it to play any game.
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Wallet color="#fff" width={24} height={24} />
            </View>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playButtonText}>PLAY</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 15,
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  navigationTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  activeTab: {
    flex: 1,
    backgroundColor: "#6B00B3",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 5,
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inactiveTab: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 5,
  },
  inactiveTabText: {
    color: "#fff",
  },
  cardsContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  card: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagText: {
    fontSize: 12,
    color: "#fff",
    marginLeft: 5,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  cardDescription: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 5,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#4B0082",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    marginTop: 15,
    backgroundColor: "#32CD32",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  playButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default History;
