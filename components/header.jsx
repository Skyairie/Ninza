import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import BoardScreen from '@/app/(tabs)/boardScreen';
import NinzaMania from './ninzamania';
import Tournament from './Tournament';
import { fonts } from '@/utils/fonts';

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

  const Profile = () => {
    navigation.navigate('Profile');
  };

  const wallet = () => {
    navigation.navigate('Wallet');
  };

  const openNotificationModal = () => {
    setNotificationModalVisible(true);
  };

  const closeNotificationModal = () => {
    setNotificationModalVisible(false);
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.bgColor }]}
    >
      {/* Modal for Input and Image */}

      {/* Notification Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={notificationModalVisible}
        onRequestClose={closeNotificationModal}
      >
        <View style={styles.notificationModalOverlay}>
          <View style={styles.notificationModalContent}>
            <Text style={styles.notificationTitle}>
              You have a new notification!
            </Text>
            <Text style={styles.notificationMessage}>
              This is a test notification message.
            </Text>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={closeNotificationModal}
            >
              <Text style={styles.submitButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Main Content */}
      <View style={[styles.container, { backgroundColor: colors.bgColor }]}>
        <View style={[styles.navbar, { backgroundColor: colors.navbarColor }]}>
          <TouchableOpacity onPress={Profile}>
            <Icon name="person-circle" size={30} color="#ffffff" />
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
            <Image
              source={{
                uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/spin.png',
              }}
              style={styles.spin}
            />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputBox: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#1A2B4C',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
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
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 20,
    color: '#444',
  },
});

export default Header;
