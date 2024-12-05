import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';

export default function WithdrawInterface({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setBackgroundColor('#1e063c', true);

      return () => {
        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setBackgroundColor('#ffffff', true);
      };
    }, []),
  );

  const [amount, setAmount] = useState('');
  const [history, setHistory] = useState([]);
  const quickAmounts = [{ value: '50' }, { value: '200' }, { value: '500' }];

  // Go back handler
  const goBack = () => {
    navigation.goBack();
  };

  // Handle withdrawal
  const handleWithdraw = () => {
    if (!amount) {
      Alert.alert('Error', 'Please enter an amount!');
      return;
    }
    const enteredAmount = parseFloat(amount);

    if (isNaN(enteredAmount) || enteredAmount < 50) {
      Alert.alert('Error', 'The minimum withdrawal amount is ₹50.');
      return;
    }

    const transaction = {
      id: Date.now().toString(), // Unique identifier
      amount: parseFloat(amount),
      date: new Date().toLocaleString(),
    };

    setHistory([transaction, ...history]);
    setAmount('');
    Alert.alert('Success', 'Withdrawal completed!');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <LinearGradient
          colors={['#1e063c', '#4c0080']}
          style={styles.container}
        >
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>WITHDRAWAL</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
            <Text style={styles.balanceAmount}>₹254.2</Text>
          </View>
        </LinearGradient>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {/* Withdrawal Card */}
        <View style={styles.card}>
          <Text style={styles.enterAmountText}>Enter Any Amount</Text>
          <TextInput
            style={styles.amountInput}
            value={`₹${amount}`}
            onChangeText={(text) => setAmount(text.replace('₹', ''))}
            keyboardType="numeric"
          />

          <Text style={styles.quickAmountText}>Withdraw Quick Amount</Text>
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

        {/* Terms and Conditions */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsHeader}>Terms and Conditions</Text>
          <Text style={styles.termsText}>
            1. The minimum withdrawal amount is ₹50.{'\n'}
            2. Withdrawals are subject to account balance availability.{'\n'}
            3. Processing time may vary depending on the bank.{'\n'}
          </Text>
        </View>

        {/* Transaction History */}
        <Text style={styles.transactionHeader}>Transaction History</Text>
        {history.length === 0 ? (
          <Text style={styles.noHistoryText}>No transactions yet</Text>
        ) : (
          <FlatList
            data={history}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            marginBottom={-16}
            renderItem={({ item }) => (
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>Amount: ₹{item.amount}</Text>
                <Text style={styles.historyDate}>Date: {item.date}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* Withdraw Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={handleWithdraw}>
          <Text style={styles.addButtonText}>PROCEED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBD3E0',
  },
  header: {
    height: 100,
  },
  backButton: {
    marginLeft: 20,
    marginTop: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  balanceContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
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
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    marginTop: -40,
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
  termsContainer: {
    marginTop: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  termsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#555',
    lineHeight: 22,
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10,
    color: '#333',
  },
  noHistoryText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    fontStyle: 'italic',
    marginVertical: 10,
  },
  historyItem: {
    //backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 7,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#22c55e',
    borderRightWidth: 4,
    borderRightColor: '#22c55e',
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
  historyDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#22c55e',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle:'italic'
  },
});
