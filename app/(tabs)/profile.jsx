import { View, Text ,StyleSheet,SafeAreaView} from "react-native";
import React from "react";
import { fonts } from '@/utils/fonts'
const Profile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
        <Text style={styles.text}>profile!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#191A25",
  },
  text: {
    color: 'white', // Apply the color style here
    fontSize: 18,
    fontFamily: fonts.Primary
  },
});
