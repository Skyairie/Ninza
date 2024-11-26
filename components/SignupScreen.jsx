import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const SignupScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Animation reference
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Animation effect: Pulse animation for the image
  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // Scale up
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Scale back to normal
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start(() => pulse()); // Repeat the pulse animation
    };

    pulse(); // Start the animation when the component mounts
  }, [scaleAnim]);

  // Clear mobile number input field when navigating back to this screen
  useFocusEffect(
    useCallback(() => {
      setMobileNumber(''); // Clear input
      setErrorMessage(''); // Clear error message (optional)
    }, [])
  );

  const handleVerify = () => {
    const validMobileNumber = '9519783808'; // Replace with your hardcoded number
    if (mobileNumber === validMobileNumber) {
      navigation.navigate('OTP', { mobileNumber });
    } else {
      setErrorMessage('Invalid mobile number. Please try again.');
    }
  };
  // const handleVerify = async () => {
  //   if (!mobileNumber || mobileNumber.length !== 10) {
  //     setErrorMessage('Please enter a valid 10-digit mobile number.');
  //     return;
  //   }
  
  //   try {
  //     // Replace with your API endpoint
  //     const response = await fetch('https://your-api.com/send-otp', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ mobile: mobileNumber }),
  //     });
  
  //     const data = await response.json();
  
  //     if (response.ok) {
  //       navigation.navigate('OTP', { mobileNumber });
  //     } else {
  //       setErrorMessage(data.message || 'Failed to send OTP. Please try again.');
  //     }
  //   } catch (error) {
  //     setErrorMessage('An error occurred. Please try again later.');
  //     console.error('Error sending OTP:', error);
  //   }
  // };
  

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.formContainer}>
        <Text style={styles.TitleText}>Welcome to NinzaGames</Text>
        <Animated.Image
          source={require('@/assets/images/signupimages/game.png')}
          style={[styles.illustration, { transform: [{ scale: scaleAnim }] }]} // Animated scale
          resizeMode="contain"
        />
        <Text style={styles.title}>Signup & Get ₹45 Bonus</Text>
        <Text style={styles.label}>Enter your mobile number</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder="Mobile Number"
            placeholderTextColor="#ccc"
          />
        </View>
        <TouchableOpacity style={[styles.button]} onPress={handleVerify}>
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>
            I accept Ninza games{' '}
            <Text style={styles.link}>Terms & Conditions</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>
            NinzaGames may inform me about ongoing offers and promotions on WhatsApp
          </Text>
        </View>
      </View>
      <Text style={styles.footer}>
        By proceeding, your phone number will be verified by Truecaller and you
        thereby accept the <Text style={styles.link}>Terms of Service</Text>.
      </Text>
    </View>
  );
};

  
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2B4C',
    padding: 20,
    justifyContent: 'space-between',
  },
  formContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  illustration: {
    width: '100%',
    height: 150,
    marginBottom: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFEB3B',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  countryCode: {
    fontSize: 16,
    color: '#4A148C',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    height: 50,
  },
  button: {
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    fontSize: 11,
    color: '#fff',
    flex: 1,
  },
  link: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
  footer: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  TitleText:{
    fontSize:45,
    color:'#ffff',
  }
});

export default SignupScreen;