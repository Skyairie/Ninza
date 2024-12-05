import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, Modal, Animated, StyleSheet, SafeAreaView, Easing } from 'react-native';  // Ensure Easing is imported
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import BoardScreen from '@/app/(tabs)/boardScreen';
import NinzaMania from './ninzamania';
import Tournament from './Tournament';
import { fonts } from '@/utils/fonts';
import GamingWalletScreen from "@/app/(tabs)/wallet";
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createMaterialTopTabNavigator();

const getColors = (routeName) => {
  switch (routeName) {
    case 'LeaderBoard':
      return { bgColor: '#004845', navbarColor: '#004845', walletColor: '#003D3C' };
    case 'Tournament':
      return { bgColor: '#58003b', navbarColor: '#58003b', walletColor: '#46002f' };
    default:
      return { bgColor: '#1A2B4C', navbarColor: '#1A2B4C', walletColor: '#143F62' };
  }
};

const Header = ({ navigation }) => {
  const [colors, setColors] = useState(getColors('NinzaMania'));
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state for input
  const [notificationModalVisible, setNotificationModalVisible] = useState(false); // Modal visibility state for notification
  const [spinModalVisible, setSpinModalVisible] = useState(false); // Modal visibility state for spin
  const [spinValue] = useState(new Animated.Value(0)); // Spinner animation value

  // Handle StatusBar changes
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(colors.navbarColor);
      StatusBar.setBarStyle('light-content');
      StatusBar.setHidden(false);

      return () => {
        StatusBar.setBackgroundColor('#FFFFFF');
        StatusBar.setBarStyle('dark-content');
        StatusBar.setHidden(false);
      };
    }, [colors])
  );

  // Profile and Wallet navigation
  const Profile = () => {
    navigation.navigate("profile");
  };

  const wallet = () => {
    navigation.navigate("Wallet");
  };

  // Modal control functions
  const closeModal = () => {
    setModalVisible(false);
  };

  const openNotificationModal = () => {
    setNotificationModalVisible(true);
  };

  const closeNotificationModal = () => {
    setNotificationModalVisible(false);
  };

  const openSpinModal = () => {
    setSpinModalVisible(true);
    // Start the spinner animation when the modal opens
    spinWheel();
  };

  const closeSpinModal = () => {
    setSpinModalVisible(false);
  };

  // Spinner animation function
  const spinWheel = () => {
    spinValue.setValue(0); // Reset to 0 before starting the animation
    Animated.timing(spinValue, {
      toValue: 1, // Rotate the wheel to 1 full rotation
      duration: 5000, // Time taken for 1 rotation
      easing: Easing.linear, // Use Easing.linear for smooth animation
      useNativeDriver: true, // Use native driver for performance
    }).start();
  };

  // Interpolating the rotation value from spinValue
  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Rotate from 0deg to 360deg
  });

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.bgColor }]}>
      {/* Modal for Input and Image */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image source={require('@/assets/images/logo-images/app.png')} style={styles.modalImage} />
            <Text style={styles.modalTitle}>Welcome to the App</Text>
            <TextInput style={styles.inputBox} placeholder="Enter your name" placeholderTextColor="#ccc" />
            <TextInput style={styles.inputBox} placeholder="Enter your Email" placeholderTextColor="#ccc" />
            <TextInput style={styles.inputBox} placeholder="Enter your Username" placeholderTextColor="#ccc" />
            <TouchableOpacity style={styles.submitButton} onPress={closeModal}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Notification Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={notificationModalVisible}
        onRequestClose={closeNotificationModal}
      >
        <View style={styles.notificationModalOverlay}>
          <View style={styles.notificationModalContent}>
            <Text style={styles.notificationTitle}>You have a new notification!</Text>
            <Text style={styles.notificationMessage}>This is a test notification message.</Text>
            <TouchableOpacity style={styles.submitButton} onPress={closeNotificationModal}>
              <Text style={styles.submitButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Spin Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={spinModalVisible}
        onRequestClose={closeSpinModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Spin the Wheel!</Text>

            <Animated.View style={[styles.spinnerContainer, { transform: [{ rotate }] }]}>
              {/* Wheel Image */}
              <Image source={require('@/assets/images/wheel.png')} style={styles.spinnerImage} />
            </Animated.View>

            <TouchableOpacity style={styles.submitButton} onPress={closeSpinModal}>
              <Text style={styles.submitButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Main Content */}
      <View style={[styles.container, { backgroundColor: colors.bgColor }]}>
        <View style={[styles.navbar, { backgroundColor: colors.navbarColor }]}>
          <TouchableOpacity onPress={Profile}>
            <Icon name="person-circle-outline" size={30} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={wallet}>
            <View style={[styles.walletContainer, { backgroundColor: colors.walletColor }]}>
              <Icon name="wallet-outline" size={20} color="#FFD700" style={styles.walletIcon} />
              <Text style={[styles.walletLabel, { color: '#FFD700' }]}>₹</Text>
              <Text style={[styles.walletBalance, { color: '#ffffff' }]}>200</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity onPress={openNotificationModal}>
              <Icon name="notifications" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={openSpinModal}>
              <Image
                source={require('@/assets/images/spin.png')}
                style={styles.spin}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: styles.tabBar,
            tabBarIndicatorStyle: styles.tabIndicator,
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
                {route.name.toUpperCase()}
              </Text>
            ),
          })}
          screenListeners={{
            state: (e) => {
              const routeName = e.data.state.routes[e.data.state.index].name;
              const newColors = getColors(routeName);
              setColors(newColors);
            },
          }}
        >
          <Tab.Screen name="NinzaMania" component={NinzaMania} />
          <Tab.Screen name="LeaderBoard" component={BoardScreen} />
          <Tab.Screen name="Tournament" component={Tournament} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1A2B4C',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingBottom: 10,
    paddingTop: 10,
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    marginLeft: 35,
  },
  walletIcon: {
    marginRight: 5,
  },
  walletLabel: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    marginRight: 5,
  },
  walletBalance: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  spin: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    padding: 0,
    margin: 0,
  },
  tabLabel: {
    fontSize: 16,
    color: '#A9C1E8',
    fontFamily: fonts.Poppins,
  },
  activeTabLabel: {
    fontSize: 16.5,
    color: '#e4be00',
    fontWeight: 'bold',
  },
  tabIndicator: {
    backgroundColor: '#e4be00',
    height: 3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay color
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
    resizeMode: 'contain', // Adjusts the image size to fit the container
  },
  submitButton: {
    backgroundColor: '#e4be00',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  // Notification Modal Styles
  notificationModalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  notificationModalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Header;
