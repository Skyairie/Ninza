import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
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
      return { bgColor: '#004845', navbarColor: '#004845', walletColor: '#003D3C' };
    case 'Tournament':
      return { bgColor: '#58003b', navbarColor: '#58003b', walletColor: '#46002f' };
    default:
      return { bgColor: '#1A2B4C', navbarColor: '#1A2B4C', walletColor: '#143F62' };
  }
};

const Header = () => {
  const [colors, setColors] = useState(getColors('NinzaMania'));

  useFocusEffect(
    useCallback(() => {
      // Apply StatusBar settings only for this screen
      StatusBar.setBackgroundColor(colors.navbarColor);
      StatusBar.setBarStyle('light-content');
      StatusBar.setHidden(false);

      return () => {
        // Reset StatusBar to default when leaving the screen
        StatusBar.setBackgroundColor('#FFFFFF'); // Default color
        StatusBar.setBarStyle('dark-content');  // Default style
        StatusBar.setHidden(false);            // Ensure it's visible
      };
    }, [colors])
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.bgColor }]}>
      <View style={[styles.container, { backgroundColor: colors.bgColor }]}>
        <View style={[styles.navbar, { backgroundColor: colors.navbarColor }]}>
          {/* Left - Profile Icon */}
          <Icon name="person-circle-outline" size={30} color="#ffffff" />

          {/* Center - Wallet */}
          <View style={[styles.walletContainer, { backgroundColor: colors.walletColor }]}>
            <Icon name="wallet-outline" size={20} color="#FFD700" style={styles.walletIcon} />
            <Text style={[styles.walletLabel, { color: '#FFD700' }]}>₹</Text>
            <Text style={[styles.walletBalance, { color: '#ffffff' }]}>200</Text>
          </View>

          {/* Right - Notifications and Spin */}
          <View style={styles.rightIcons}>
            <Icon name="notifications" size={24} color="#ffffff" />
            <Image source={require('../assets/images/spin.png')} style={styles.spin} />
          </View>
        </View>

        {/* Tab Navigator */}
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
    justifyContent: 'space-between', // Distribute space between left, center, and right
    alignItems: 'center', // Align items vertically centered
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
    alignSelf: 'center', // Center within the parent navbar
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
    flexDirection: 'row', // Align spin and notifications horizontally
    alignItems: 'center',
    gap: 10, // Space between the icons (use `gap` or margin)
  },
  spin: {
    width: 30,
    height: 30,
    marginLeft: 10, // Add space between notification and spin
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
    // borderRadius:5,
    // borderWidth:2,
  },
  tabIndicator: {
    backgroundColor: '#e4be00',
    height: 3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default Header;
