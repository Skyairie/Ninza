import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,SafeAreaView,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native'; // Import Lottie
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
const ReferEarn = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Here we no longer wait for 3 seconds or animation completion,
    // just display the content immediately after mounting the component.
    setShowAnimation(false);  // Hide animation immediately after mounting.
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#58003b" />
      <LinearGradient colors={["#58003b", "#b8007a", "#006eb0"]} style={styles.container1}>
      {showAnimation && (
        <View style={styles.animationContainer}>
          <LottieView
            source={require('@/assets/images/jdf.json')} // Ensure the path is correct
            autoPlay
            loop={false}  // Only play animation once
          />
        </View>
      )}

      {/* Main Content */}
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>REFER AND EARN</Text>
          {/* <TouchableOpacity style={styles.languageSwitch}>
            <Text style={styles.languageText}>अ</Text>
          </TouchableOpacity> */}
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            style={styles.bannerImage}
            source={require('@/assets/images/dummy-currency.jpg')} // Ensure the path is correct

            
          />
        </View>

        {/* Earning Info */}
        <View style={styles.earningSection}>
          <Text style={styles.earnTitle}>Earn money when a friend:</Text>
          <TouchableOpacity>
            <View style={styles.earningItem}>
              <Icon name="smartphone" size={30} color="white" />
              <Text style={styles.earningText}>₹10</Text>
              <Text style={styles.earningDescription}>signs up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.earningItem}>
              <Icon name="attach-money" size={30} color="#fff" />
              <Text style={styles.earningText}>₹125</Text>
              <Text style={styles.earningDescription}>adds cash</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.earningItem}>
              <Icon name="sports-esports" size={30} color="#fff" />
              <Text style={styles.earningText}>₹865</Text>
              <Text style={styles.earningDescription}>plays games</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.link}>Terms & Conditions</Text>
          <Text style={styles.link}> | </Text>
          <Text style={styles.link}>Read more in FAQs</Text>
        </View>

        {/* Share Buttons */}
        <View style={styles.shareButtons}>
          <TouchableOpacity style={styles.whatsappButton}>
            <Ionicons name="logo-whatsapp" size={30} color="#fff" />
            <Text style={styles.buttonText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton}>
            <Icon name="share" size={30} color="#fff" />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* Earnings Info */}
        <View style={styles.earningsInfo}>
          <Text style={styles.earningsText}>Diwakar from RJ earned ₹19,125</Text>
        </View>
      </ScrollView>
      </LinearGradient>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1A2B4C",
  },
  container1: {
    padding: 0,
    paddingLeft: 5,
    flex: 1,
  },
  container: {
    flex: 1,
    //backgroundColor: '#1A2B4C',
    padding: 10,
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    top:20
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    //textAlign:'center'
  },
  languageSwitch: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 10,
  },
  languageText: {
    color: '#fff',
    fontSize: 18,
  },
  banner: {
    marginTop:20,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  earningSection: {
    marginBottom: 20,
  },
  earnTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  earningItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor:'#1E4D73'
  },
  earningText: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  earningDescription: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    
  },
  link: {
    color: '#4ECDC4',
    fontSize: 14,
  },
  shareButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 10,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498DB',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
  earningsInfo: {
    backgroundColor: '#1E4D73',
    padding: 10,
    borderRadius: 10,
  },
  earningsText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ReferEarn;