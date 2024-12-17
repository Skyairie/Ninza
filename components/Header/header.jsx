import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Modal,
  TextInput,
  Button,
} from 'react-native'; // Ensure Easing is imported
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import BoardScreen from '@/app/(tabs)/boardScreen';
import NinzaMania from '../NinzaMania/ninzamania';
import Tournament from '../Tournament/Tournament';
import { fonts } from '@/utils/fonts';
import NotificationModal from './notification';
import SpinWheel from './spinWheel';

const Tab = createMaterialTopTabNavigator();

const getColors = (routeName) => {
  switch (routeName) {
    case 'LeaderBoard':
      return {
        bgColor: '#004845',
        navbarColor: '#004845',
        walletColor: '#003D3C',
      };
    case 'Tournament':
      return {
        bgColor: '#58003b',
        navbarColor: '#58003b',
        walletColor: '#46002f',
      };
    default:
      return {
        bgColor: '#1A2B4C',
        navbarColor: '#1A2B4C',
        walletColor: '#143F62',
      };
  }
};

const Header = ({ navigation }) => {
  const [colors, setColors] = useState(getColors('NinzaMania'));
  const [notificationModalVisible, setNotificationModalVisible] =
    useState(false); // Modal visibility state for notification
  const [spinModalVisible, setSpinModalVisible] = useState(false); // Modal visibility state for spin

  //Handle StatusBar changes
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
    }, [colors]),
  );

  // Profile and Wallet navigation
  // const Profile = () => {
  //   navigation.navigate('Profile');
  // };

  const wallet = () => {
    navigation.navigate('Wallet');
  };

  const openNotificationModal = () => {
    setNotificationModalVisible(true);
  };

  const closeNotificationModal = () => {
    setNotificationModalVisible(false);
  };

  const openSpinModal = () => {
    setSpinModalVisible(true);
  };

  const closeSpinModal = () => {
    setSpinModalVisible(false);
  };
  const [isProfileComplete, setIsProfileComplete] = useState(false); // Tracks if the profile is complete
  // For collecting missing information
  const [name, setName] = useState('');
  const [user_Name, setuser_Name] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [ref_Code, setref_Code] = useState('');

  const [showProfileModal, setShowProfileModal] = useState(false);
  const blinkOpacity = useState(new Animated.Value(1))[0];
  const [scale] = useState(new Animated.Value(1));
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(colors.navbarColor);
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBackgroundColor('#FFFFFF');
        StatusBar.setBarStyle('dark-content');
      };
    }, [colors]),
  );

  useEffect(() => {
    if (!isProfileComplete) {
      // Start blinking animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(blinkOpacity, {
            toValue: 0.3,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(blinkOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [isProfileComplete]);

  const handleProfilePress = () => {
    if (!isProfileComplete) {
      setShowProfileModal(true); // Open modal if profile is incomplete
    } else {
      navigation.navigate('Profile'); // Navigate to profile if it's complete
    }
  };

  const handleFormSubmit = () => {
    if (
      !name.trim() ||
      !user_Name.trim() ||
      !email.trim() ||
      !mobile.trim() ||
      !gender.trim() ||
      !ref_Code.trim()
    ) {
      alert('Please fill the all fields!');
      return;
    }
    setIsProfileComplete(true); // Mark profile as complete
    setShowProfileModal(false); // Close modal
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.bgColor }]}
    >
      <Modal visible={showProfileModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Complete Your Profile</Text>

            {/* Name Field */}
            <TextInput
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter your user name"
              value={user_Name}
              onChangeText={setuser_Name}
              style={styles.input}
            />

            {/* Email Field */}
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
            />

            {/* Mobile Field */}
            <TextInput
              placeholder="Enter your mobile"
              value={mobile}
              onChangeText={setMobile}
              style={styles.input}
              keyboardType="phone-pad"
            />

            {/* Gender Field */}
            <TextInput
              placeholder="Enter your gender"
              value={gender}
              onChangeText={setGender}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter your ref code"
              value={ref_Code}
              onChangeText={setref_Code}
              style={styles.input}
            />

            {/* Submit and Cancel Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={handleFormSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setShowProfileModal(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Notification Modal */}
      <NotificationModal
        visible={notificationModalVisible}
        onClose={closeNotificationModal}
      />
      {/* Spin Modal */}
      <SpinWheel visible={spinModalVisible} onClose={closeSpinModal} />
      {/* Main Content */}
      <View style={[styles.container, { backgroundColor: colors.bgColor }]}>
        <View style={[styles.navbar, { backgroundColor: colors.navbarColor }]}>
          <TouchableOpacity onPress={handleProfilePress}>
            <Animated.View
              style={[
                styles.glowContainer,
                {
                  transform: [{ scale }],
                  opacity: !isProfileComplete ? blinkOpacity : 1,
                },
              ]}
            >
              <Icon name="person-circle-outline" size={30} color="#ffffff" />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={wallet}>
            <View
              style={[
                styles.walletContainer,
                { backgroundColor: colors.walletColor },
              ]}
            >
              <Icon
                name="wallet-outline"
                size={20}
                color="#FFD700"
                style={styles.walletIcon}
              />
              <Text style={[styles.walletLabel, { color: '#FFD700' }]}>₹</Text>
              <Text style={[styles.walletBalance, { color: '#ffffff' }]}>
                200
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity onPress={openNotificationModal}>
              <Icon name="notifications" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={openSpinModal}>
              <Image
                source={{
                  uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/wheel.png',
                }}
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
  glowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 213, 0, 0.2)', // Soft yellow glow
    borderRadius: 50, // Makes the glow circular
    padding: 7,
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
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    padding: 0,
    margin: 0,
  },
  tabLabel: {
    fontSize: 14,
    color: '#A9C1E8',
    fontWeight: 'bold',
  },
  activeTabLabel: {
    fontSize: 15,
    fontFamily: fonts.Poppins,
    color: '#e4be00',
    fontWeight: '600',
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
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, // Rounded corners
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    flex: 1, // Allows buttons to grow evenly
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center the text
  },
  cancelButton: {
    backgroundColor: '#FF4C4C', // Red color for Cancel button
  },
  submitButton: {
    backgroundColor: '#FFD700', // Gold color for Submit button
  },
  buttonText: {
    color: '#FFF', // White text
    fontSize: 16,
    fontWeight: 'bold',
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
