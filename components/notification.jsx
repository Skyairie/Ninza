import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationModal = ({ visible, onClose }) => {
  const scaleAnim = new Animated.Value(0.8); // Scale animation
  const fadeAnim = new Animated.Value(0); // Fade-in effect
  
  // Animations for the modal appearance
  React.useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 5,
          tension: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.sequence([
        Animated.spring(scaleAnim, {
          toValue: 0.8,
          friction: 5,
          tension: 100,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Animated.View style={[styles.notificationModalOverlay, { opacity: fadeAnim }]}>
        <Animated.View
          style={[
            styles.notificationModalContent,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <LinearGradient
            colors={['#FF8C00', '#FF6347']} // Bright game-like gradient
            style={styles.modalInnerContent}
          >
            <Icon name="rocket" size={50} color="#fff" style={styles.icon} />
            <Text style={styles.notificationTitle}>🚨 Game Update!</Text>
            <Text style={styles.notificationMessage}>Something awesome just happened in your game!</Text>
            
            <TouchableOpacity style={styles.submitButton} onPress={onClose}>
              <Text style={styles.submitButtonText}>Got it!</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  notificationModalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
  },
  notificationModalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10, // For Android shadow
  },
  modalInnerContent: {
    width: '100%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 20,
    textShadowColor: '#FF6347',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  notificationTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: '#FF6347',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  notificationMessage: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
    textShadowColor: '#FF6347',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  submitButton: {
    backgroundColor: '#FFD700', // Gold color for the button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    elevation: 5, // Button shadow for 3D effect
  },
  submitButtonText: {
    color: '#4b6cb7', // Dark color for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NotificationModal;
