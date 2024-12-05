import React, { useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Dimensions,
} from "react-native";

// Get the screen width for responsive design
const { width } = Dimensions.get("window");
const WHEEL_SIZE = width * 0.8; // 80% of the screen width for the wheel size

const SpinningWheel = () => {
  // Animated value for rotation
  const rotation = useRef(new Animated.Value(0)).current;

  // Spin the wheel with a random value
  const spinWheel = () => {
    const spinValue = Math.floor(Math.random() * 360) + 720; // At least 2 full spins
    Animated.timing(rotation, {
      toValue: spinValue,
      duration: 4000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      // Reset rotation to a value between 0 and 360 after the spin
      const finalRotation = spinValue % 360;
      rotation.setValue(finalRotation);
    });
  };

  // Interpolating the rotation value for smooth animation
  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Spin the Wheel!</Text>
      </View>

      {/* Wheel Section */}
      <View style={styles.wheelWrapper}>
        <Animated.Image
          source={require("@/assets/images/wheel.png")} // Replace with your image path
          style={[
            styles.wheel,
            { transform: [{ rotate: interpolatedRotation }] },
          ]}
        />
      </View>

      {/* Spin Button */}
      <TouchableOpacity onPress={spinWheel} style={styles.button}>
        <Text style={styles.buttonText}>SPIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34", // Dark background for a game-like atmosphere
  },
  header: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#ff6f00", // Vibrant orange for a game-like look
    borderRadius: 30,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 6,
  },
  headerText: {
    fontSize: 30,
    color: "#fff", // White text for contrast
    fontWeight: "bold",
    textAlign: "center",
  },
  wheelWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    marginVertical: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 12,
  },
  wheel: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    // Removed the borderWidth and borderColor to remove the image border
  },
  button: {
    width: 80, // Reduced the width
    height: 80, // Reduced the height
    backgroundColor: "#ff6f00", // Match button with header for consistency
    borderRadius: 40, // Adjusted border radius to match new size
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Position the button vertically at the bottom
    bottom: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 8,
  },
  
  buttonText: {
    color: "#fff", // White text color for contrast
    fontWeight: "bold",
    fontSize: 25, // Larger font size for the button
  },
});

export default SpinningWheel;
