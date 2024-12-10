import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Transaction = () => {
  const navigation = useNavigation();

  const transactions = [
    {
      id: '1',
      date: '2024-12-01',
      description: 'Purchase - Gold Coins',
      amount: '500 Gold Coins',
      status: 'Completed',
      type: 'Debit',
    },
    {
      id: '2',
      date: '2024-12-03',
      description: 'Reward - Daily Login Bonus',
      amount: '100 Gold Coins',
      status: 'Completed',
      type: 'Credit',
    },
    {
      id: '3',
      date: '2024-12-05',
      description: 'Purchase - Premium Pack',
      amount: '$4.99',
      status: 'Pending',
      type: 'Debit',
    },
    {
      id: '4',
      date: '2024-12-06',
      description: 'Purchase - Power-up Pack',
      amount: '$1.99',
      status: 'Completed',
      type: 'Debit',
    },
  ];

  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTransactions = (filter) => {
    if (filter === 'All') {
      setFilteredTransactions(transactions);
    } else {
      const filteredData = transactions.filter((item) => item.type === filter);
      setFilteredTransactions(filteredData);
    }
    setSelectedFilter(filter);
  };

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={styles.transactionDescription}>{item.description}</Text>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
      <Text
        style={[
          styles.transactionStatus,
          item.status === 'Completed' ? styles.completed : styles.pending,
        ]}
      >
        {item.status}
      </Text>
      <Text
        style={[
          styles.transactionType,
          item.type === 'Credit' ? styles.credit : styles.debit,
        ]}
      >
        {item.type}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Gaming Transaction History</Text>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'All' && styles.selectedButton,
          ]}
          onPress={() => filterTransactions('All')}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === 'All' && styles.selectedButtonText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'Credit' && styles.selectedButton,
          ]}
          onPress={() => filterTransactions('Credit')}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === 'Credit' && styles.selectedButtonText,
            ]}
          >
            Credit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'Debit' && styles.selectedButton,
          ]}
          onPress={() => filterTransactions('Debit')}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === 'Debit' && styles.selectedButtonText,
            ]}
          >
            Debit
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredTransactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
  },
  transactionItem: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
  },
  transactionDate: {
    color: '#888',
    fontSize: 12,
    marginBottom: 5,
  },
  transactionDescription: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  transactionAmount: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5,
  },
  completed: {
    color: '#4CAF50',
  },
  pending: {
    color: '#FF9800',
  },
  transactionType: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5,
  },
  credit: {
    color: '#2196F3',
  },
  debit: {
    color: '#F44336',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
  },
  filterButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#555',
    marginHorizontal: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  selectedButton: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  selectedButtonText: {
    color: '#fff',
  },
});

export default Transaction;
