// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
// } from 'react-native';
// import axios from 'axios';

// const OTPScreen = ({ route, navigation }) => {
//   const { email } = route.params;
//   const [otp, setOtp] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleVerifyOTP = async () => {
//     if (otp.trim().length === 6) {
//       // Assuming OTP is 6 digits
//       try {
//         const response = await axios.post(
//           'http://192.168.1.14:3000/api/verify-otp',
//           { email, otp },
//         );
//         if (response.status === 200) {
//           navigation.navigate('Home');
//         } else {
//           setErrorMessage('Invalid OTP. Please try again.');
//         }
//       } catch (error) {
//         setErrorMessage('An error occurred. Please try again later.');
//       }
//     } else {
//       setErrorMessage('Please enter a valid 6-digit OTP.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.SafeArea}>
//       <StatusBar barStyle="light-content" backgroundColor="#1A2B4C" />

//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
//       >
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Enter OTP</Text>
//           <Text style={styles.label}>OTP sent to {email}</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             value={otp}
//             onChangeText={setOtp}
//             placeholder="Enter 6-digit OTP"
//             placeholderTextColor="#ccc"
//             maxLength={6}
//           />
//           <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
//             <Text style={styles.buttonText}>VERIFY</Text>
//           </TouchableOpacity>
//           {errorMessage ? (
//             <Text style={styles.errorText}>{errorMessage}</Text>
//           ) : null}
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   SafeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#1A2B4C',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   formContainer: {
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#FFEB3B',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 20,
//     paddingHorizontal: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//     fontSize: 18,
//     color: '#000',
//     height: 50,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#9C27B0',
//     paddingVertical: 15,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 16,
//   },
// });

// export default OTPScreen;

import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const OTPScreen = ({ route, navigation }) => {
  const { mobileNumber } = route.params;
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [timer, setTimer] = useState(30);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [resendCount, setResendCount] = useState(0);

  // Animation references
  const slideAnim = useRef(new Animated.Value(-100)).current; // Start position from top
  const fadeAnim = useRef(new Animated.Value(0)).current; // Start as invisible

  // Reset OTP and timer when screen gains focus
  useFocusEffect(
    useCallback(() => {
      setOtp('');
      setErrorMessage('');
      setTimer(30);
      setIsTimeUp(false);

      // Set StatusBar for OTPScreen
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#1A2B4C');

      return () => {
        // Reset StatusBar when leaving OTPScreen
        StatusBar.setBarStyle('default');
        StatusBar.setBackgroundColor('#FFFFFF'); // Adjust as needed for your app
      };
    }, []),
  );

  // Start countdown timer for OTP
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setIsTimeUp(true);
    }
  }, [timer]);

  // Handle OTP verification
  const handleVerifyOtp = () => {
    const validOtp = '123456'; // Hardcoded OTP
    if (otp === validOtp) {
      navigation.navigate('Home'); // Navigate to Home screen
    } else {
      setErrorMessage('Invalid OTP. Please try again.');
    }
  };

  // Resend OTP functionality
  const handleResendOtp = () => {
    setTimer(30); // Restart the timer
    setIsTimeUp(false); // Reset time-up status
    setOtp(''); // Clear OTP input
    setErrorMessage(''); // Clear error message
    setResendCount(resendCount + 1); // Increment the resend counter
    console.log('OTP resent to +91', mobileNumber);
  };

  // Start animation when screen mounts
  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0, // Slide to normal position
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade in
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Animated.Image
          source={require('../../assets/images/signup-images/pin.png')}
          style={[
            styles.illustration,
            { transform: [{ translateY: slideAnim }], opacity: fadeAnim },
          ]} // Apply animations
          resizeMode="contain"
        />
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.label}>OTP sent to +91 {mobileNumber}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
          placeholder="Enter OTP"
          placeholderTextColor="#ccc"
          editable={!isTimeUp}
        />
        <TouchableOpacity
          style={[styles.button, isTimeUp && styles.disabledButton]}
          onPress={handleVerifyOtp}
          disabled={otp.length !== 6 || isTimeUp}
        >
          <Text style={styles.buttonText}>SUBMIT OTP</Text>
        </TouchableOpacity>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.resendButton}
          onPress={handleResendOtp}
          disabled={!isTimeUp}
        >
          <Text style={styles.resendText}>
            {isTimeUp ? 'Resend OTP ?' : `Resend available in ${timer}s`}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1A2B4C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFEB3B',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    height: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  disabledButton: {
    backgroundColor: '#757575',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  resendButton: {
    marginTop: 15,
  },
  resendText: {
    fontSize: 16,
    color: '#FFEB3B',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  illustration: {
    width: '100%',
    height: 150,
    marginBottom: 80,
  },
});

export default OTPScreen;
