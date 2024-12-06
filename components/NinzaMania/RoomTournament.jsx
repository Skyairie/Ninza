import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RoomTournament({ navigation }) {
  const [timeLeft, setTimeLeft] = useState(180); // Timer in seconds

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Decrease by 1 second
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [timeLeft]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Status Bar Settings */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000033"
        translucent={false}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft width={24} height={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Room Code</Text>
      </View>

      {/* Player Info */}
      <LinearGradient
        colors={['#FFB800', '#87CEEB']}
        style={{ borderRadius: 10 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerSection}>
          <View style={styles.playersContainer}>
            <PlayerInfo
              name="beWap"
              avatar="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <View style={styles.entryDetails}>
              <Text style={styles.entryLabel}>Entry Fee:</Text>
              <Text style={styles.entryValue}>50</Text>
              <Text style={styles.entryLabel}>Winning Prize:</Text>
              <Text style={styles.entryValue}>95</Text>
            </View>
            <PlayerInfo
              name="Vienne"
              avatar="https://randomuser.me/api/portraits/women/1.jpg"
            />
          </View>
        </View>
      </LinearGradient>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.timerText}>कृपया क्रिप से रूम कोड अपलोड करें</Text>
        <Text style={styles.timerCountdown}>{timeLeft} Sec</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Room Code"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.setButton}>
          <Text style={styles.setButtonText}>SET</Text>
        </TouchableOpacity>
        <Text style={styles.instructionText}>
          कृपया क्रिप से रूम कोड क्लिक कर SET ROOM CODE
        </Text>
      </View>

      {/* Update Game Status Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Update Game Status</Text>
        <Text style={styles.description}>
          After completion of your game, select the status of the game and post
          your scores below.
        </Text>
        <View style={styles.buttonContainer}>
          <ActionButton
            style={styles.wonButton}
            text="I Won"
            onPress={() => {}}
          />
          <ActionButton
            style={styles.lostButton}
            text="I Lost"
            onPress={() => {}}
          />
          <ActionButton
            style={styles.cancelButton}
            text="Cancel"
            onPress={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  );
}

// Player Information Component
const PlayerInfo = ({ name, avatar }) => (
  <View style={styles.player}>
    <Image source={{ uri: avatar }} style={styles.playerAvatar} />
    <Text style={styles.playerName}>{name}</Text>
  </View>
);

// Button Component
const ActionButton = ({ style, text, onPress }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000033',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 10,
  },
  backButton: {
    marginBottom: 0,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSection: {
    //backgroundColor: "#FFD700",
    //borderRadius: 15,
    padding: 16,
  },
  playersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  player: {
    alignItems: 'center',
  },
  playerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  entryDetails: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  entryLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  entryValue: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  inputSection: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },
  timerText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  timerCountdown: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 16,
  },
  setButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    borderRadius: 8,
  },
  setButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructionText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    padding: 16,
    marginTop: 32,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  wonButton: {
    backgroundColor: '#28a745',
  },
  lostButton: {
    backgroundColor: '#dc3545',
  },
  cancelButton: {
    backgroundColor: '#e2e6ea',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
});
