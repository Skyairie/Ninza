import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = useRef(new Animated.Value(0)).current; // Animation for fading in the logo

  useEffect(() => {
    // Start the fade-in animation
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 2000, // 1.5 seconds for fade-in
      useNativeDriver: true,
    }).start();

    // Navigate to the Signup screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Signup');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('@/assets/images/5.png')} // Replace with the path to your logo image
        style={[styles.logo, { opacity: logoOpacity }]} // Bind opacity to animation
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2B4C', // Dark blue background for a gaming vibe
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Adjust the size of your logo
    height: 150, // Ensure it maintains aspect ratio
    resizeMode: 'contain', // Make sure it doesn't stretch
  },
});

export default SplashScreen;
