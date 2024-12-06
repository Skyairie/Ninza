import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import the useFocusEffect hook
import playersData from '@/playerdata.json';
import { LinearGradient } from 'expo-linear-gradient';

const avatarMap = {
  avatar2: require('@/assets/images/logo-images/app.png'),
  avatar1: require('@/assets/images/logo-images/leaderboard-avtar.png'),
  // Add other avatar mappings here if needed
};

const LeaderboardScreen = () => {
  const { topPlayers, otherPlayers } = playersData;

  useFocusEffect(
    React.useCallback(() => {
      // Set the StatusBar when the screen is focused
      StatusBar.setBarStyle('light-content', true); // Light text color for better contrast
      StatusBar.setBackgroundColor('#1e3c72', true); // Dark background for status bar

      return () => {
        // Reset the StatusBar when the screen is unfocused
        StatusBar.setBarStyle('dark-content', true); // Reset to dark content style
        StatusBar.setBackgroundColor('#FFFFFF', true); // Reset to default background color
      };
    }, []),
  );

  return (
    <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headertext1}>LeaderBoard</Text>
        </View>

        {/* Top Players */}
        <View style={styles.topPlayersContainer}>
          {topPlayers.map((player, index) => (
            <View key={index} style={styles.playerCard}>
              <Image
                source={avatarMap[player.avatar]} // Map the avatar key to the actual image
                style={[styles.avatar, player.rank === 1 && styles.avatarLarge]}
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
              <Image
                source={avatarMap[player.avatar]}
                style={styles.avatarSmall}
              />
              <View style={styles.playerInfo}>
                <Text style={styles.playerNameSmall}>{player.name}</Text>
                <Text style={styles.pointsSmall}>
                  Score: {player.points} pts
                </Text>
              </View>
              <Text
                style={
                  player.status === 'up' ? styles.statusUp : styles.statusDown
                }
              >
                {player.status === 'up' ? '▲' : '▼'}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
  },
  container1: {
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headertext1: {
    flex: 1,
    color: '#FFFFFF',
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
    borderWidth: 1,
    borderColor: '#FFD700', // Gold border for avatars
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  rank: {
    fontSize: 18,
    color: '#FFD700', // Gold for ranking numbers
    fontWeight: 'bold',
  },
  playerName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  points: {
    color: '#FFD700', // Gold for points
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
    backgroundColor: '#ffffff44', // Translucent white background
    borderRadius: 10,
    marginHorizontal: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a5298aa', // Semi-transparent dark background for players
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
    marginLeft: 10,
  },
  playerNameSmall: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  pointsSmall: {
    fontSize: 14,
    color: '#FFD700', // Gold points for smaller player info
  },
  statusUp: {
    color: '#00FF00', // Green for players moving up
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusDown: {
    color: '#FF0000', // Red for players moving down
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LeaderboardScreen;
