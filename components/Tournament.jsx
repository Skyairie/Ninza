import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground
} from "react-native";
import { UserIcon, ClockIcon, FilterIcon, XIcon } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Tournament() {
  const [showBanner, setShowBanner] = useState(true);

  // Tournament data with local images using `require`
  const tournaments = [
    {
      game: "LUDO",
      image: require("../assets/images/gameslogo/ludo.jpg"),
      prizePool: 140,
      winUpto: 60,
      participants: "8/16",
      startingIn: "10 mins",
      entryFee: 10,
      rounds: 4,
    },
    {
      game: "Chess",
      image: require("../assets/images/gameslogo/ludo.jpg"),
      prizePool: 200,
      winUpto: 80,
      participants: "10/20",
      startingIn: "20 mins",
      entryFee: 15,
      rounds: 3,
    },
    {
      game: "Carrom",
      image: require("../assets/images/gameslogo/ludo.jpg"),
      prizePool: 120,
      winUpto: 50,
      participants: "5/16",
      startingIn: "5 mins",
      entryFee: 8,
      rounds: 2,
    },
    {
      game: "PUBG",
      image: require("../assets/images/gameslogo/ludo.jpg"),
      prizePool: 500,
      winUpto: 250,
      participants: "30/50",
      startingIn: "15 mins",
      entryFee: 10,
      rounds: 5,
    },
    {
      game: "Call of Duty",
      image: require("../assets/images/gameslogo/ludo.jpg"),
      prizePool: 400,
      winUpto: 180,
      participants: "18/30",
      startingIn: "25 mins",
      entryFee: 18,
      rounds: 4,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#58003b" />
      {/* <LinearGradient
        colors={["#58003b", "#b8007a", "#006eb0"]}
        style={styles.container1}
      > */}
      <ImageBackground
        source={require("../assets/images/tabbackimg/3.png")} // Your image here
        style={styles.container}
      >
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View
            style={{
              position: "sticky",
              top: 0,
              zIndex: 50,
              //backgroundColor: "#2d0014",
            }}
          >
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white" }}>How To Play ?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <ClockIcon size={16} color="white" />
                <Text style={{ color: "white" }}>Past Tournaments</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <FilterIcon size={16} color="white" />
                <Text style={{ color: "white" }}>Filters</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Tournament List */}
          <ScrollView style={{ flex: 1, paddingBottom: 80 }}>
           
            <View style={{ padding: 10 }}>
              {tournaments.map((tournament, i) => (
                <View
                  key={i}
                  style={{
                    borderRadius: 20,
                    marginBottom: 10,
                    overflow: "hidden",
                  }}
                >
                  {/* Semi-transparent background */}
                  <View
                    style={{
                      ...StyleSheet.absoluteFillObject,
                      backgroundColor: "rgba(0, 0, 0, 0.2)", // Black with 20% opacity
                    }}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 16,
                      padding: 10,
                      borderWidth: 0,
                      borderColor: "black",
                    }}
                  >
                    <View style={{ position: "relative" }}>
                      <Image
                        source={tournament.image}
                        style={{ width: 96, height: 96, borderRadius: 10 }}
                      />
                      <View style={styles.roundsLabel}>
                        <Text style={{ color: "black", textAlign: "center" }}>
                          {tournament.rounds} rounds
                        </Text>
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View>
                          <Text style={{ color: "white", fontSize: 12 }}>
                            Prize pool
                          </Text>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 18,
                              fontWeight: "bold",
                            }}
                          >
                            ₹{tournament.prizePool}
                          </Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                          <Text style={{ color: "white", fontSize: 12 }}>
                            Starting in
                          </Text>
                          <Text style={{ color: "#FFB800" }}>
                            {tournament.startingIn}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 16,
                        }}
                      >
                        <View>
                          <Text style={{ color: "white", fontSize: 12 }}>
                            Win Upto
                          </Text>
                          <Text style={{ color: "white" }}>
                            ₹{tournament.winUpto}
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.entryButton}>
                          <Text style={{ color: "white", fontWeight: "bold" }}>
                            ₹{tournament.entryFee}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          marginTop: 8,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <UserIcon
                          size={16}
                          color="white"
                          style={{ marginRight: 4 }}
                        />
                        <Text style={{ color: "white", fontSize: 12 }}>
                          {tournament.participants}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          

          {/* Banner */}
          {showBanner && (
            <View style={styles.banner}>
              <View style={styles.bannerIcon} />
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#00c9ff", fontWeight: "bold" }}>
                  60% off Fantasy Coupon
                </Text>
                <Text style={{ color: "white", fontSize: 12 }}>
                  Make your Fantasy team. Max. discount upto ₹ 5
                </Text>
              </View>
              <TouchableOpacity onPress={() => setShowBanner(false)}>
                <XIcon size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        </ImageBackground>
      
    </SafeAreaView>
  );
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: "#1A2B4C",
  },
  container: {
    flex: 1,
    padding: 0,
    
  },
  container1: {
    padding: 0,
    paddingLeft: 0,
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#6c0038",
    borderRadius: 10,
  },
  roundsLabel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFB800",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 2,
  },
  entryButton: {
    paddingHorizontal: 24,
    paddingVertical: 7,
    backgroundColor: "#03a428",
    borderRadius: 10,
  },
  banner: {
    position: "absolute",
    bottom: 2,
    left: 10,
    right: 10,
    backgroundColor: "#002f53",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "white",
    marginRight: 16,
  },
  bannerText: {
    color: "#00c9ff",
    fontWeight: "bold",
  },
};
