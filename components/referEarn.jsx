import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from '@react-navigation/native';

const ReferEarn = () => {

  useFocusEffect(
    React.useCallback(() => {
      // Set specific status bar for this screen
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setBackgroundColor('#58003b', true);

      // Clean up when navigating away
      return () => {
        StatusBar.setBarStyle('dark-content', true); // Reset to default
        StatusBar.setBackgroundColor('#FFFFFF', true); // Set back to light background
      };
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={["#58003b", "#b8007a", "#1c7d3b"]} style={styles.container1}>
        <ScrollView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>REFER AND EARN</Text>
          </View>

          {/* Banner */}
          <View style={styles.banner}>
            <Image
              style={styles.bannerImage}
              source={require('@/assets/images/bring-friend.jpg')} // Ensure the path is correct
            />
          </View>

          {/* Earning Info */}
          <View style={styles.earningSection}>
            <TouchableOpacity>
              <LinearGradient colors={["#FFD700", "#FF8C00"]} style={styles.earningItem}>
                <Icon name="emoji-events" size={30} color="#000" />
                <Text style={styles.earningText}>GET ₹30 NOW</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.link}>Terms & Conditions</Text>
            <Text style={styles.link}> | </Text>
            <Text style={styles.link}>Read more in FAQs</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    //backgroundColor: "#1A2B4C",
  },
  container1: {
    padding: 0,
    paddingLeft: 0,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'PressStart2P-Regular', // Use a gaming font
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  banner: {
    marginTop: 0,
    marginBottom: 0,
    padding: 30,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    borderColor: '#FFD700', // Gold border
    borderWidth: 3,
  },
  earningSection: {
    marginBottom: 0,
  },
  earningItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin:10,
    borderRadius: 10,
    marginBottom: 20,
  },
  earningText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'PressStart2P-Regular', // Use a gaming font
    marginLeft: 10,
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  link: {
    color: '#FFD700',
    fontSize: 14,
    fontFamily: 'PressStart2P-Regular', // Use a gaming font
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default ReferEarn;
