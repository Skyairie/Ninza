import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const gamesData = [
  {
    id: '1',
    game: 'Battle Royale',
    date: 'Dec 2, 2024',
    time: '18:45',
    status: 'Win',
    score: '36',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/ludo.png',
    },
  },
  {
    id: '2',
    game: 'Fantasy Quest',
    date: 'Dec 1, 2024',
    time: '21:15',
    status: 'Loss',
    score: '9',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/poker.png',
    },
  },
  {
    id: '3',
    game: 'Racing Rivals',
    date: 'Nov 30, 2024',
    time: '19:30',
    status: 'Win',
    score: '14',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/snake.jpeg',
    },
  },
  {
    id: '4',
    game: 'Racing Rivals',
    date: 'Nov 30, 2024',
    time: '19:30',
    status: 'Win',
    score: '55',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/poker.png',
    },
  },
  {
    id: '5',
    game: 'Racing Rivals',
    date: 'Nov 30, 2024',
    time: '19:30',
    status: 'Loss',
    score: '69',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/ludo.png',
    },
  },
  {
    id: '6',
    game: 'Racing Rivals',
    date: 'Nov 30, 2024',
    time: '19:30',
    status: 'Win',
    score: '29',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/poker.png',
    },
  },
  {
    id: '7',
    game: 'Racing Rivals',
    date: 'Nov 30, 2024',
    time: '19:30',
    status: 'Loss',
    score: '15',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/snake.jpeg',
    },
  },
  {
    id: '8',
    game: 'Racing Rivals',
    date: 'Nov 30, 2024',
    time: '19:30',
    status: 'Loss',
    score: '50',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/poker.png',
    },
  },
  {
    id: '9',
    game: 'Racing Rivals',
    date: 'Nov 30, 2024',
    time: '19:30',
    status: 'Win',
    score: '90',
    Image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/callbreak.png',
    },
  },
  // Add more game data here...
];

const statusColors = {
  Win: '#4CAF50', // Green
  Loss: '#FF5252', // Red
  Draw: '#FFB74D', // Amber
};

const GameHistory = () => {
  const renderGameItem = ({ item }) => (
    <LinearGradient colors={['#1A2B4C', '#143F62']} style={styles.gameCard}>
      <View style={styles.gameIconContainer}>
        <Image source={item.Image} style={styles.gameIcon} />
      </View>
      <View style={styles.gameDetails}>
        <Text style={styles.gameTitle}>{item.game}</Text>
        <Text style={styles.gameDate}>
          {item.date} at {item.time}
        </Text>
        <Text style={[styles.gameStatus, { color: statusColors[item.status] }]}>
          {item.status}
        </Text>
      </View>
      <View style={styles.gameScore}>
        <Text style={styles.scoreText}>{item.score} PTS</Text>
      </View>
    </LinearGradient>
  );

  return (
    <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.container}>
      {/* StatusBar */}
      <StatusBar
        backgroundColor="#1A1A2E" // Matches your theme
        barStyle="light-content" // White icons/text on the status bar
      />

      {/* Header */}
      <View style={styles.header}>
        <Icon name="trophy" size={30} color="#FFD700" />
        <Text style={styles.headerText}>Games History</Text>
      </View>

      {/* Games List */}
      <FlatList
        data={gamesData}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#FFD700',
    fontFamily: 'PressStart2P_400Regular', // Ensure custom fonts are linked
    marginLeft: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  gameCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  gameIconContainer: {
    //backgroundColor: '#000',
    padding: 0,
    borderRadius: 8,
  },
  gameIcon: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  gameDetails: {
    flex: 1,
    marginLeft: 15,
  },
  gameTitle: {
    fontSize: 18,
    color: '#EAEAEA',
    fontFamily: 'Poppins_700Bold',
  },
  gameDate: {
    fontSize: 14,
    color: '#A9C1E8',
    marginTop: 5,
    fontFamily: 'Poppins_400Regular',
  },
  gameStatus: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },
  gameScore: {
    alignItems: 'flex-end',
  },
  scoreText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'bold',
  },
});

export default GameHistory;
