import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Transaction = () => {
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]); // State to hold fetched transactions
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [loading, setLoading] = useState(true); // Loading state for API call

  // Fetch transaction data from API
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          'http://192.168.1.14:3000/api/getTransactionHistory',
        );
        const result = await response.json();
        if (result.success) {
          // Map the fetched data to match the expected structure
          const formattedTransactions = result.data.map((item) => ({
            id: item.id.toString(),
            date: item.date,
            description: item.description,
            amount: `$${Math.abs(item.amount)}`,
            status: 'Completed', // Assuming all API data is 'Completed'
            type: item.amount > 0 ? 'Credit' : 'Debit',
          }));

          setTransactions(formattedTransactions);
          setFilteredTransactions(formattedTransactions);
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

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
      <View style={styles.transactionRow}>
        <Text style={styles.transactionDate}>{item.date}</Text>
        <Text
          style={[
            styles.transactionType,
            item.type === 'Credit' ? styles.credit : styles.debit,
          ]}
        >
          {item.type}
        </Text>
      </View>
      <Text style={styles.transactionDescription}>{item.description}</Text>
      <View style={styles.transactionRow}>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
        <Text style={[styles.transactionStatus, styles.completed]}>
          {item.status}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Transaction History</Text>
      </View>

      <View style={styles.filterContainer}>
        {['All', 'Credit', 'Debit'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.selectedButton,
            ]}
            onPress={() => filterTransactions(filter)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFilter === filter && styles.selectedButtonText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  transactionDate: {
    color: '#888',
    fontSize: 12,
  },
  transactionDescription: {
    color: '#444',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 5,
  },
  transactionAmount: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '500',
  },
  completed: {
    color: '#4CAF50',
  },
  credit: {
    color: '#27ae60',
  },
  debit: {
    color: '#e74c3c',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
  },
  filterButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#bbb',
    marginHorizontal: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#444',
    fontWeight: '500',
  },
  selectedButton: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  selectedButtonText: {
    color: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default Transaction;
