import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // for navigation
import Icon from 'react-native-vector-icons/MaterialIcons'; // for the back arrow icon

const Transaction = () => {
  const navigation = useNavigation();

  // Dummy data for transactions
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

  // State to handle filtered transactions and selected filter type
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [selectedFilter, setSelectedFilter] = useState('All'); // 'All', 'Credit', or 'Debit'

  // Function to filter transactions based on selected filter
  const filterTransactions = (filter) => {
    if (filter === 'All') {
      setFilteredTransactions(transactions);
    } else {
      const filteredData = transactions.filter((item) => item.type === filter);
      setFilteredTransactions(filteredData);
    }
    setSelectedFilter(filter);
  };

  // Render each transaction
  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={styles.transactionDescription}>{item.description}</Text>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
      <Text style={[styles.transactionStatus, item.status === 'Completed' ? styles.completed : styles.pending]}>
        {item.status}
      </Text>
      <Text style={[styles.transactionType, item.type === 'Credit' ? styles.credit : styles.debit]}>
        {item.type}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Gaming Transaction History</Text>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'All' && styles.selectedButton]}
          onPress={() => filterTransactions('All')}
        >
          <Text style={[styles.filterButtonText, selectedFilter === 'All' && styles.selectedButtonText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'Credit' && styles.selectedButton]}
          onPress={() => filterTransactions('Credit')}
        >
          <Text style={[styles.filterButtonText, selectedFilter === 'Credit' && styles.selectedButtonText]}>Credit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'Debit' && styles.selectedButton]}
          onPress={() => filterTransactions('Debit')}
        >
          <Text style={[styles.filterButtonText, selectedFilter === 'Debit' && styles.selectedButtonText]}>Debit</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction List */}
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  transactionDate: {
    color: '#555',
    fontSize: 12,
    marginBottom: 5,
  },
  transactionDescription: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  transactionAmount: {
    color: '#000',
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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 5,
  },
  filterButtonText: {
    fontSize: 14,
    color: '#333',
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
