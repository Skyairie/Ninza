import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';

const ReferEarn = () => {
  const [history, setHistory] = useState([
    { id: '1', name: 'John Doe', date: '2024-11-01', reward: '₹30' },
    { id: '2', name: 'Jane Smith', date: '2024-11-03', reward: '₹30' },
    { id: '3', name: 'Mark Wilson', date: '2024-11-05', reward: '₹30' },
  ]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setBackgroundColor('#3D0057', true);

      return () => {
        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setBackgroundColor('#FFFFFF', true);
      };
    }, [])
  );

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Icon name="account-circle" size={30} color="#FFD700" style={styles.avatar} />
      <View>
        <Text style={styles.historyName}>{item.name}</Text>
        <Text style={styles.historyDate}>Referred on {item.date}</Text>
      </View>
      <Text style={styles.reward}>{item.reward}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#3D0057', '#70009A', '#1C0045']} style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>REFER AND EARN</Text>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            style={styles.bannerImage}
            source={require('@/assets/images/bring-friend.jpg')}
          />
        </View>

        {/* Earning Info */}
        <View style={styles.earningSection}>
          <TouchableOpacity>
            <LinearGradient colors={['#FFD700', '#FF4500']} style={styles.earningButton}>
              <Icon name="trophy" size={30} color="#000" />
              <Text style={styles.earningText}>GET ₹30 NOW</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Refer History */}
        <View style={styles.historySection}>
          <Text style={styles.historyHeader}>Refer History</Text>
          <FlatList
            data={history}
            renderItem={renderHistoryItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Terms & Conditions</Text>
          </TouchableOpacity>
          <Text style={styles.footerDivider}>|</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>FAQs</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 32,
    fontFamily: 'PressStart2P-Regular',
    color: '#FFD700',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  banner: {
    alignItems: 'center',
    marginVertical: 0,
    padding:20
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  earningSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  earningButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  earningText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  historySection: {
    marginVertical: 0,
    padding:10
  },
  historyHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
  avatar: {
    marginRight: 10,
  },
  historyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D0057',
  },
  historyDate: {
    fontSize: 14,
    color: '#555',
  },
  reward: {
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  footerLink: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footerDivider: {
    marginHorizontal: 5,
    color: '#FFD700',
  },
});

export default ReferEarn;
