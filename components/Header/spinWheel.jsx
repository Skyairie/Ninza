import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const SpinWheel = ({ visible, onClose }) => {
  const [result, setResult] = useState('');
  const spinValue = useRef(new Animated.Value(0)).current;

  // Spinner animation function
  const spinWheel = () => {
    const randomSpin = Math.floor(Math.random() * 6); // Assuming 6 segments on the wheel
    const spinAngle = 360 * 4 + randomSpin * 60; // Full spins + random segment

    // Reset the spinValue and start the spin animation
    spinValue.setValue(0); // Reset to 0 before starting the animation
    Animated.timing(spinValue, {
      toValue: spinAngle,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      // After animation ends, determine the result
      const results = [
        '50',
        'Better Luck For Next Time...!',
        '100',
        '80',
        'Better Luck For Next Time...!',
        '5',
      ];
      setResult(`You win ${results[randomSpin]} !`);
    });
  };

  // Interpolate the spinValue to create rotation
  const rotate = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const closeModal = () => {
    onClose(); // Close the modal when the close button is pressed
    resetSpin(); // Reset the spin value and result when modal is closed
  };

  // Reset the spin state
  const resetSpin = () => {
    setResult('');
    spinValue.setValue(0); // Reset spin animation value
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header with Gradient Background */}
          <LinearGradient
            colors={['pink', 'red', '#0000FF']} // Red to Blue Gradient
            style={styles.headerGradient}
          >
            <Text style={styles.modalTitle}>Spin the Wheel!</Text>
          </LinearGradient>

          {/* Spinner */}
          <Animated.View
            style={[styles.spinnerContainer, { transform: [{ rotate }] }]}
          >
            <Image
              source={{
                uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/wheel.png',
              }}
              style={styles.spinnerImage}
            />
          </Animated.View>

          {/* Result or Spin Button */}
          {result ? (
            <Text style={styles.resultText}>{result}</Text>
          ) : (
            <TouchableOpacity style={styles.spinButton} onPress={spinWheel}>
              <Text style={styles.spinButtonText}>Spin</Text>
            </TouchableOpacity>
          )}

          {/* Close Button */}
          <TouchableOpacity style={styles.submitButton} onPress={closeModal}>
            <Text style={styles.submitButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  headerGradient: {
    width: '100%',
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  spinnerContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  spinnerImage: {
    width: '100%',
    height: '100%',
  },
  spinButton: {
    backgroundColor: '#143A5A',
    paddingVertical: 12,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    marginBottom: 0,
  },
  spinButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#143A5A',
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#c2bfea',
    paddingVertical: 12,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SpinWheel;
