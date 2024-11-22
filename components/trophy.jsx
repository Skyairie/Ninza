import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,StatusBar } from 'react-native';
import playersData from "@/playerdata.json";

const avatarMap = {
  avatar2: require('../assets/images/5.png'),
  avatar1: require('../assets/images/6.png'),
  // Add other avatar mappings here if needed
};

const LeaderboardScreen = () => {
  const { topPlayers, otherPlayers } = playersData;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#3A2B2B" // Synchronize StatusBar with header
      />
      {/* Header */}
      <View style={styles.head}>
        <Text style={styles.headertext}>←</Text>
        <Text style={styles.headertext1}>LeaderBoard</Text>
      </View>

      {/* Top Players */}
      <View style={styles.topPlayersContainer}>
        {topPlayers.map((player, index) => (
          <View key={index} style={styles.playerCard}>
            <Image
              source={avatarMap[player.avatar]} // Map the avatar key to the actual image
              style={[
                styles.avatar,
                player.rank === 1 && styles.avatarLarge,
              ]}
            />
            <Text style={styles.rank}>{player.rank}</Text>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.points}>{player.points} pts</Text>
          </View>
        ))}
      </View>

      {/* Info Bar */}
      <View style={styles.infoBar}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Time Left: 3 Days</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Today: ▲ 1 Place</Text>
        </View>
      </View>

      {/* Other Players */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {otherPlayers.map((player, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.rank}>{player.rank}</Text>
            <Image source={avatarMap[player.avatar]} style={styles.avatarSmall} />
            <View style={styles.playerInfo}>
              <Text style={styles.playerNameSmall}>{player.name}</Text>
              <Text style={styles.pointsSmall}>Score  {player.points} pts</Text>
            </View>
            <Text
              style={player.status === 'up' ? styles.statusUp : styles.statusDown}
            >
              {player.status === 'up' ? '▲' : '▼'}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A2B2B',
    padding: 10,
    paddingBottom: 0,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom:20
  },
  headertext: {
    color: '#fff',
    fontSize: 35,
    fontWeight:'bold',
    marginBottom:10
  },
  headertext1: {
    flex: 1,
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
  },
  topPlayersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  playerCard: {
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  rank: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  playerName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  points: {
    color: '#FFD700',
    fontSize: 14,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    height: 40,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#D3B58A',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A57A4C',
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  playerInfo: {
    flex: 1,
    marginLeft:10
  },
  playerNameSmall: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  pointsSmall: {
    fontSize: 14,
    color: '#FFD700',
  },
  statusUp: {
    color: '#00FF00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusDown: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LeaderboardScreen;
