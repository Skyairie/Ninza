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
  Modal,
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ImagePickerExample from '@/app/image';

export default function RoomTournament({ navigation }) {
  const [timeLeft, setTimeLeft] = useState(180); // Timer in seconds
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Decrease by 1 second
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [timeLeft]);

  const handleConfirmWin = () => {
    setModalVisible(false); // Close the modal
    // Add any logic for handling the win confirmation here
    alert('status uploded: Please Wait!');
  };

  return (
    <View style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#000033" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft width={24} height={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Room Code</Text>
      </View>

      {/* Player Info */}
      <LinearGradient colors={['#FFB800', '#87CEEB']} style={styles.playerCard}>
        <View style={styles.playersContainer}>
          <PlayerInfo
            name="Diwakar"
            avatar="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <View style={styles.entryDetails}>
            <Text style={styles.entryLabel}>Entry Fee: ₹50</Text>
            <Text style={styles.entryLabel}>Winning Prize: ₹95</Text>
          </View>
          <PlayerInfo
            name="Sachin"
            avatar="https://randomuser.me/api/portraits/men/9.jpg"
          />
        </View>
      </LinearGradient>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.instructionText}>
          कृपया क्रिप से रूम कोड अपलोड करें
        </Text>
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

      {/* Terms Section */}
      <View style={styles.termsContainer}>
        <Text style={styles.termsHeader}>Terms and Conditions</Text>
        <ScrollView style={styles.termsScroll}>
          <Text style={styles.termsText}>
            1. यदि दोनों प्लेयर्स ने कोड Join करके गेम प्ले कर लिया हो और दूसरा
            प्लेयर गोटी ओपन होने के बाद लेफ्ट मरता है तो Opponent प्लेयर पूरा
            Lose दिया जायेगा{'\n'}
            2.यदि दोनों Players गेम प्ले के लिए स्टार्ट करते है एक प्लेयर गेम मे
            चला गया बल्कि दूसरा प्लेयर गेम मैं नही गया और गेम प्ले हो गया दोनों
            तरफ से एक प्लेयर की गोटी ओपन हो गई और दूसरा प्लेयर ऑटो Exit है जो
            ऑटो एग्जिट प्लेयर है वो पूरा लूज़ दिया जायेगा अतः अपना नेट प्रॉब्लम
            चेक करके खेले ये स्वयं की जिम्मेदारी होगी{'\n'}
            3.Game समाप्त होने के 15 मिनट के अंदर रिजल्ट डालना आवश्यक है अन्यथा
            Opponent के रिजल्ट के आधार पर गेम अपडेट कर दिया जायेगा चाहे आप जीते
            या हारे और इसमें पूरी ज़िम्मेदारी आपकी होगी इसमें बाद में कोई बदलाव
            नहीं किया जा सकता है !{'\n'}
            4.Win होने के बाद आप गलत स्क्रीनशॉट डालते है तो गेम को सीधा Cancel
            कर दिया जायेगा इसलिए यदि आप स्क्रीनशॉट लेना भूल गए है तो पहले
            Support में एडमिन को संपर्क करे उसके बाद ही उनके बताये अनुसार रिजल्ट
            पोस्ट करे !{'\n'}
          </Text>
        </ScrollView>
      </View>

      {/* Game Status Section */}
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
            onPress={() => setModalVisible(true)} // Show modal
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

      {/* Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Win</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to confirm your win?
              <ImagePickerExample />
            </Text>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirmWin}
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Player Info Component
const PlayerInfo = ({ name, avatar }) => (
  <View style={styles.player}>
    <Image source={{ uri: avatar }} style={styles.playerAvatar} />
    <Text style={styles.playerName}>{name}</Text>
  </View>
);

// Action Button Component
const ActionButton = ({ style, text, onPress }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  playerCard: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 4, // Adds shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  playersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  entryDetails: {
    alignItems: 'center',
  },
  entryLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  inputSection: {
    backgroundColor: '#000033',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  timerCountdown: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 16,
    color: '#333',
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
  termsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10,
  },
  termsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  termsScroll: {
    maxHeight: 130, // Restricts height to make it scrollable
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 4, // Adds shadow effect
    //marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  wonButton: {
    backgroundColor: '#28a745',
  },
  lostButton: {
    backgroundColor: '#dc3545',
  },
  cancelButton: {
    backgroundColor: '#f0ad4e',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 5,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#28a745',
  },
  cancelButton: {
    backgroundColor: '#f0ad4e',
  },
});
