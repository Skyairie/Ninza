import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
  WalletIcon,
  InfoIcon,
  TrophyIcon,
  PercentIcon,
  ChevronRightIcon,
  IndianRupee,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GamingWalletScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setBackgroundColor('#1e063c', true);

      return () => {
        StatusBar.setBarStyle('light-content', true);
        StatusBar.setBackgroundColor('#FFFFFF', true);
      };
    }, []),
  );

  const addcash = () => {
    navigation.navigate('addCash');
  };
  const earn = () => {
    navigation.navigate('Refer');
  };
  const withdrowall = () => {
    navigation.navigate('withdroll');
  };
 
  const withdroll = () => {
    navigation.navigate("withdraw");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#1e063c', '#4c0080', '#1e063c']}
        style={styles.container}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            {/* <TouchableOpacity onPress={goBack}>
              <FontAwesome5 name="arrow-left" size={20} color="#FFC107" />
            </TouchableOpacity> */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity>
                {/* <MaterialIcons
                  name="contact-support"
                  size={24}
                  color="#FFC107"
                /> */}
              </TouchableOpacity>
              {/* <Text
                style={{ color: "#FFC107", fontSize: 10, textAlign: "center" }}
              >
                {"Transaction,\n & Support"}
              </Text> */}
            </View>
          </View>

          {/* Balance Display */}
          <View style={styles.balanceContainer}>
            <Text style={styles.headerText}>Wallet Balance</Text>
            <Text style={styles.balanceText}>₹ 254.00</Text>
          </View>

          {/* Wallet Info */}
          <View style={styles.cardContainer}>
            {/* Unplayed Section */}
            <View style={styles.card}>
              <View style={styles.infoRow}>
                <View style={styles.iconTextContainer}>
                  <IndianRupee size={30} color="yellow" />
                  <View>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Unplayed</Text>
                      <InfoIcon size={16} color="#9ca3af" />
                    </View>
                    <Text style={styles.amount}>₹0</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={addcash}>
                  <Text style={styles.buttonText}>ADD CASH</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Bonus Section */}
            <View style={styles.card}>
              <View style={styles.infoRow}>
                <View style={styles.iconTextContainer}>
                  <IndianRupee size={30} color="yellow" />
                  <View>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Bonus</Text>
                      <InfoIcon size={16} color="#9ca3af" />
                    </View>
                    <Text style={styles.amount}>₹115.87</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.earnButton} onPress={earn}>
                  <Text style={styles.buttonText}>EARN BONUS</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Winnings Section */}
            <View style={styles.card}>
              <View style={styles.infoRow}>
                <View style={styles.iconTextContainer}>
                  <TrophyIcon size={30} color="yellow" />
                  <View>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Winnings</Text>
                      <InfoIcon size={16} color="#9ca3af" />
                    </View>
                    <Text style={styles.amount}>₹3.53</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.withdrawButton} onPress={withdroll}>
                  <Text style={styles.buttonText}>WITHDRAW</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Offers & Benefits Section */}
          <View style={styles.offerCard}>
            <View style={styles.infoRow1}>
              <View style={styles.iconTextContainer}>
                <PercentIcon size={24} color="#fb923c" />
                <View>
                  <Text style={styles.label}>My Offers & Benefits</Text>
                  <Text style={styles.subLabel}>View All Offers</Text>
                </View>
              </View>
              {/* Make sure the arrow stays to the right */}
              <ChevronRightIcon size={24} color="#9ca3af" />
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginHorizontal: 18,
    marginTop: 10,
    marginBottom: 20,
  },
  banner: {
    marginRight: 35,
    marginTop: 50,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 26,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'PressStart2P-Regular', // Use a gaming font
    textShadowColor: 'pink',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  balanceContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  balanceText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  cardContainer: {
    paddingHorizontal: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Translucent background
    padding: 10,
    margin: 20,
    borderRadius: 10,
    marginTop: 30,
    paddingTop: 30,
  },
  card: {
    paddingBottom: 30,
  },
  offerCard: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)', // Translucent background
    borderRadius: 10,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures the content is spaced out
    marginHorizontal: 18,
    marginTop: 10,
    borderColor: 'yellow',
    borderWidth: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This ensures that the arrow stays to the right
    alignItems: 'center',
    width: '100%', // Ensure the row takes full width
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#E5E7EB',
  },
  subLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  amount: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 10,
  },
  earnButton: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  withdrawButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
