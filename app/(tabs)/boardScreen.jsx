import { View, Text, StyleSheet, SafeAreaView,ImageBackground } from 'react-native';
import React from 'react';
import DataList  from '@/components/dataList';
import { LinearGradient } from 'expo-linear-gradient';
const BoardScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <LinearGradient
          colors={["#004845", "#006d6c", "#00dad7"]}
          style={styles.container}
        > */}
        <ImageBackground
        source={require("@/assets/images/tabbackimg/2.png")} // Your image here
        style={styles.container}
      >
      <View style={styles.container}>
      <DataList />
    </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#191A25",
    
  },
  container: {
    flex: 1,
    padding: 5,
    paddingBottom:0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#ffff'
    
  }
});
