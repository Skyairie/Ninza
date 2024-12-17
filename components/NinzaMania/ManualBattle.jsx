import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import { Info, BadgeIndianRupee, ArrowLeftRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';

export default function ManualBattle({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View style={styles.container}>
      {/* <View style={styles.header1}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft width={24} height={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle1}></Text>
      </View> */}
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft width={24} height={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create a Battle</Text>
          <TouchableOpacity style={styles.rulesButton} onPress={openModal}>
            <Info width={16} height={16} color="#fff" />
            <Text style={styles.rulesText}>Rules</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter battle details..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.setButton}>
            <Text style={styles.setText}>SET</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Rules */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeading}>Battle Rules</Text>
            <Text style={styles.modalContent}>
              1. यदि दोनों प्लेयर्स ने कोड Join करके गेम प्ले कर लिया हो और
              दूसरा प्लेयर गोटी ओपन होने के बाद लेफ्ट मरता है तो Opponent प्लेयर
              पूरा Lose दिया जायेगा{'\n'}
              2.यदि दोनों Players गेम प्ले के लिए स्टार्ट करते है एक प्लेयर गेम
              मे चला गया बल्कि दूसरा प्लेयर गेम मैं नही गया और गेम प्ले हो गया
              दोनों तरफ से एक प्लेयर की गोटी ओपन हो गई और दूसरा प्लेयर ऑटो Exit
              है जो ऑटो एग्जिट प्लेयर है वो पूरा लूज़ दिया जायेगा अतः अपना नेट
              प्रॉब्लम चेक करके खेले ये स्वयं की जिम्मेदारी होगी{'\n'}
              3.Game समाप्त होने के 15 मिनट के अंदर रिजल्ट डालना आवश्यक है
              अन्यथा Opponent के रिजल्ट के आधार पर गेम अपडेट कर दिया जायेगा चाहे
              आप जीते या हारे और इसमें पूरी ज़िम्मेदारी आपकी होगी इसमें बाद में
              कोई बदलाव नहीं किया जा सकता है !{'\n'}
              4.Win होने के बाद आप गलत स्क्रीनशॉट डालते है तो गेम को सीधा Cancel
              कर दिया जायेगा इसलिए यदि आप स्क्रीनशॉट लेना भूल गए है तो पहले
              Support में एडमिन को संपर्क करे उसके बाद ही उनके बताये अनुसार
              रिजल्ट पोस्ट करे !{'\n'}
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* ---------------------------------------open battal opel --------------------------------------------------- */}

      <View style={styles.runningBattles}>
        <ArrowLeftRight width={24} height={24} color="#fff" />
        <Text style={styles.runningBattlesTitle}>Open Battles</Text>
      </View>

      {/* Scrollable Battles */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.from({ length: 1 }).map((_, index) => (
          <LinearGradient
            key={index}
            colors={['#f8a3ff', '#ffff77', '#84ffe1']}
            style={styles.gamePlayCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.gamePlayTitle}>Challange From (User Name)</Text>
            <View style={styles.gamePlayContent}>
              {/* Entry Fee */}
              <View style={styles.entryFee}>
                <Text style={styles.entryFeeLabel}>Entry Fee</Text>
                <Text style={styles.entryFeeValue}>2650</Text>
                <BadgeIndianRupee width={24} height={24} color="#000" />
              </View>
              {/* VS Section */}
              <View style={styles.vsSection}>
                {isClicked ? (
                  <>
                    <TouchableOpacity
                      style={styles.startButton}
                      onPress={() => navigation.navigate('RoomTournament')}
                    >
                      <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.rejectButton}
                      onPress={() => console.log('Reject button pressed!')}
                    >
                      <Text style={styles.buttonText}>Reject</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    style={styles.vsButton}
                    onPress={() => setIsClicked(true)}
                  >
                    <Text style={styles.buttonText}>Play</Text>
                  </TouchableOpacity>
                )}
              </View>
              {/* Winning Prize */}
              <View style={styles.winningPrize}>
                <Text style={styles.winningPrizeLabel}>Winning Prize</Text>
                <Text style={styles.winningPrizeValue}>5167.5</Text>
                <BadgeIndianRupee width={24} height={24} color="#000" />
              </View>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>
      {/* ---------------------------------------running battal opel --------------------------------------------------- */}

      <View style={styles.runningBattles}>
        <ArrowLeftRight width={24} height={24} color="#fff" />
        <Text style={styles.runningBattlesTitle}>Running Battles</Text>
      </View>

      {/* Scrollable Battles */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.from({ length: 4 }).map((_, index) => (
          <LinearGradient
            key={index}
            colors={['#f8a3ff', '#ffff77', '#84ffe1']}
            style={styles.gamePlayCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.gamePlayTitle}>
              Game Play between Sachin & Diwakar
            </Text>
            <View style={styles.gamePlayContent}>
              {/* Entry Fee */}
              <View style={styles.entryFee}>
                <Text style={styles.entryFeeLabel}>Entry Fee</Text>
                <Text style={styles.entryFeeValue}>2650</Text>
                <BadgeIndianRupee width={24} height={24} color="#000" />
              </View>
              {/* VS Section */}
              <View style={styles.vsSection}>
                <Text style={styles.vsText}>VS</Text>
              </View>
              {/* Winning Prize */}
              <View style={styles.winningPrize}>
                <Text style={styles.winningPrizeLabel}>Winning Prize</Text>
                <Text style={styles.winningPrizeValue}>5167.5</Text>
                <BadgeIndianRupee width={24} height={24} color="#000" />
              </View>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  topSection: {
    backgroundColor: '#1A1B4B',
    padding: 16,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  rulesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  rulesText: {
    color: '#fff',
    marginLeft: 4,
  },
  inputContainer: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 0,
  },
  input: {
    padding: 12,
    fontSize: 14,
    color: '#000',
    paddingRight: 80,
  },
  setButton: {
    position: 'absolute',
    right: 2,
    top: 4,
    backgroundColor: '#800080',
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  setText: {
    color: '#fff',
    fontWeight: '500',
  },
  runningBattles: {
    backgroundColor: '#1A1B4B',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    flexDirection: 'row',
    marginBottom: '5',
  },
  runningBattlesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  gamePlayCard: {
    marginTop: 16,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 16,
  },
  gamePlayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  gamePlayContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  entryFee: {
    alignItems: 'center',
  },
  entryFeeLabel: {
    fontSize: 15,
    color: '#000',
  },
  entryFeeValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  vsSection: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  vsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  winningPrize: {
    alignItems: 'center',
  },
  winningPrizeLabel: {
    fontSize: 15,
    color: '#000',
  },
  winningPrizeValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalCloseButton: {
    backgroundColor: '#1A1B4B',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  modalCloseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  vsButton: {
    backgroundColor: '#800080', // Purple background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vsText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#008CBA',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  rejectButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 12,
  },
});
