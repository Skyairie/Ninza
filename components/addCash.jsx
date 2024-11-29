import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Shield, Zap, Users } from 'lucide-react-native';
import { LinearGradient } from "expo-linear-gradient";
import PaymentInterface from './payment';

export default function AddCash({ navigation }) {
  const [amount, setAmount] = useState('100');

  const quickAmounts = [{ value: '50' }, { value: '200' }, { value: '500' }];

  const paymentinterface = () => {
    navigation.navigate("payment");
  };

  return (
    <View style={styles.container}>
    <StatusBar barStyle='light-content' backgroundColor="#1e063c"/>

      {/* Header Section */}
      
      <View style={styles.header}>
      <LinearGradient
        colors={["#1e063c", "#4c0080"]}
        style={styles.container}
      >
        <Text style={styles.headerTitle}>ADD CASH</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Wallet Balance</Text>
          <Text style={styles.balanceAmount}>₹23.2</Text>
        </View>
        </LinearGradient>
      </View>
      

      {/* Card Section */}
      <View style={styles.card}>
        <Text style={styles.enterAmountText}>Enter Any Amount</Text>
        <TextInput
          style={styles.amountInput}
          value={`₹${amount}`}
          onChangeText={(text) => setAmount(text.replace('₹', ''))}
          keyboardType="numeric"
        />

        <Text style={styles.quickAmountText}>Add quick amount</Text>
        <View style={styles.quickAmountContainer}>
          {quickAmounts.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={styles.quickAmountButton}
              onPress={() => setAmount(item.value)}
            >
              <Text style={styles.quickAmountButtonText}>₹{item.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Trust Indicators Section */}
      <View style={styles.trustIndicators}>
        <View style={styles.trustItem}>
          <Shield size={24} color="black" />
          <Text style={styles.trustText}>100% Safe Payments</Text>
        </View>
        <View style={styles.trustItem}>
          <Zap size={24} color="black" />
          <Text style={styles.trustText}>Instant deposit and withdrawal</Text>
        </View>
        <View style={styles.trustItem}>
          <Users size={24} color="black" />
          <Text style={styles.trustText}>Trusted by 15cr+ players</Text>
        </View>
      </View>

      {/* Add Cash Button */}
      <TouchableOpacity style={styles.addButton} onPress={paymentinterface}>
        <View style={styles.addButtonGradient}>
          <Text style={styles.addButtonText}>ADD NOW</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBD3E0',
  },
  header: {
    height: 130,
    padding: 0,
    paddingTop: 0,
    //backgroundColor: '#3f0864',
    
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:30
  },
  balanceContainer: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
  balanceLabel: {
    color: 'white',
    fontSize: 12,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  card: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    margin: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    marginTop: -30,
  },
  enterAmountText: {
    color: '#6b7280',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  amountInput: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
  },
  quickAmountText: {
    color: '#6b7280',
    fontSize: 14,
    marginBottom: 10,
  },
  quickAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickAmountButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    padding: 10,
    width: '30%',
    alignItems: 'center',
  },
  quickAmountButtonText: {
    fontSize: 16,
    color: '#374151',
  },
  trustIndicators: {
    padding: 20,
    marginTop:20
    //marginBottom:-30
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  trustText: {
    marginLeft: 12,
    color: 'black',//#4b5563
    fontSize: 14,
  },
  addButton: {
    margin: 16,
    marginBottom: 0,
    alignItems: 'center',
    
  },
  addButtonGradient: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#22c55e',
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
