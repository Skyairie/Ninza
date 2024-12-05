import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import DataList from '@/components/dataList';
const BoardScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={{
          uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/tabback-imgs/2.png',
        }} // Your image here
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
    backgroundColor: '#191A25',
  },
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffff',
  },
});
