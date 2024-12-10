import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  ArrowLeft,
  ChevronRight,
  Wallet,
  LayoutGrid,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PaymentInterface({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e063c" />

      {/* Header */}
      <LinearGradient
        colors={['#1e063c', '#4c0080']}
        style={styles.headerContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Amount to be added ₹100</Text>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Wallets Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require('@/assets/images/payment/upilogo.png')}
              style={styles.upiLogo}
            />
            <Text style={styles.sectionTitle}>Pay by any UPI app</Text>
          </View>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={require('@/assets/images/payment/gpay.png')}
                style={{ height: 30, width: 30, marginRight: 18 }}
                resizeMode="contain"
              />
              <Text style={styles.cardText}>GPay</Text>
            </View>
            <ChevronRight size={24} color="#999" />
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Wallet size={17} color="#6A0DAD" />
            <Text style={styles.sectionTitle}>Wallets</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={require('@/assets/images/payment/amazonpay.png')}
                style={{ height: 30, width: 30, marginRight: 18 }}
                resizeMode="contain"
              />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>Amazon Pay</Text>
                <Text style={styles.cardSubtitle}>
                  <Text style={styles.greenDot}>●</Text> Amazon Pay scratch card
                  of up to ₹25 cashback on min deposit of ₹50.
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkButtonText}>LINK NOW</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* More Payment Options */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <LayoutGrid size={17} color="#6A0DAD" />
            <Text style={styles.sectionTitle}>More Payment Option</Text>
          </View>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Bank')}
          >
            <View style={styles.cardContent}>
              <View style={styles.iconContainer}>
                <Image
                  source={require('@/assets/images/payment/netbanking.png')}
                  style={{ height: 30, width: 25, marginRight: 18 }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.cardText}>Net Banking</Text>
            </View>
            <ChevronRight size={24} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerIcons}>
          <Image
            source={require('@/assets/images/payment/visa.png')}
            style={styles.footerIcon}
          />
          <Image
            source={require('@/assets/images/payment/ss.png')}
            style={styles.footerIcon}
          />
          <Image
            source={require('@/assets/images/payment/master.png')}
            style={styles.footerIcon}
          />
        </View>
      </View>
      <View style={styles.ft}>
        <Text style={styles.footerText}>
          Card/Bank Details will be handled and processed by a third party &
          user must understand third party's privacy policies on how data is
          used. Amount collected from you is inclusive of GST at 28%.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e8e8',
  },
  headerContainer: {
    paddingTop: StatusBar.currentHeight, // Adjust for the status bar height
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 16,
    marginTop: -35,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    marginTop: -35,
  },
  content: {
    padding: 15,
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  upiLogo: {
    height: 15,
    width: 30,
    borderRadius: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Ensures the content inside the card uses available space
  },
  cardTextContainer: {
    flexDirection: 'column', // Makes the text and subtitle stack vertically
    flex: 1, // Take up available space
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5, // Adds space between card text and subtitle
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#999',
    flexShrink: 1, // Prevents the text from overflowing
    flexWrap: 'wrap', // Ensures the text wraps within the container
  },
  greenDot: {
    color: '#28A745',
  },
  linkButton: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderWidth: 0,
    borderColor: '#4afcfc',
    borderRadius: 5,
    marginLeft: 10, // Ensures the button is on the right side
    borderWidth: 1,
  },
  linkButtonText: {
    fontSize: 10,
    color: '#4afcfc',
    fontWeight: '500',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 0,
  },
  footerIcon: {
    height: 30,
    width: 30,
    marginHorizontal: 8,
  },
  footerText: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
  ft: {
    padding: 15,
    backgroundColor: '#abb2b9',
  },
});
