import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { ArrowLeft, ChevronRight, Search } from 'lucide-react-native'; // Use the appropriate library for React Native icons
import { LinearGradient } from 'expo-linear-gradient';

export default function BankSelection({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const goBack = () => {
    navigation.goBack();
  };

  // Bank list data
  const banks = [
    'Bank of Maharashtra',
    'Canara Bank',
    'Central Bank of India',
    'Cosmos Bank',
    'CSB Bank',
    'DCB Bank',
    'Equitas Bank',
    'IDBI Bank',
    'IDFC First Bank',
    'Indian Bank',
    'IndusInd Bank',
    'Indian Overseas Bank',
    'Jammu and Kashmir Bank',
    'Janata Sahakari Bank',
    'Karur Vysya Bank',
    'Punjab National Bank',
    'Punjab and Sind Bank',
    'RBL Bank',
    'South Indian Bank',
    'Saraswat Cooperative Bank',
    'SVC Cooperative Bank Ltd',
  ];

  const filteredBanks = banks.filter((bank) =>
    bank.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Set the status bar for this screen */}
      <StatusBar barStyle="light-content" backgroundColor="#1e063c" />

      {/* Header */}
      <LinearGradient
        colors={['#1e063c', '#4c0080']}
        style={styles.headerContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={goBack}
          >
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Amount to be added ₹100</Text>
        </View>
      </LinearGradient>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Search size={20} color="#A0A0A0" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Bank Name"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
      </View>
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Banks</Text>
      </View>

      {/* Banks List */}
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredBanks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.bankButton}>
              <Text style={styles.bankName}>{item}</Text>
              <ChevronRight size={20} color="#A0A0A0" />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d8d4',
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
    height:50
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
  searchContainer: {
    paddingHorizontal: 16,
    marginVertical: 11,
    marginTop: -10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 0,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  listHeader: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatListContainer: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10, // Adding border radius to the FlatList container
    overflow: 'hidden', // Ensure rounded corners apply to the content inside
    marginBottom: 10,
  },
  bankButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  bankName: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
});
