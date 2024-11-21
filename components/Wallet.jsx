import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Install expo icons if needed

const Wallet = ({ amount = '₹0' }) => {
    return (
        <View style={styles.walletContainer}>
            <MaterialIcons name="account-balance-wallet" size={24} color="white" style={styles.walletIcon} />
            <Text style={styles.walletAmount}>{amount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    walletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4b006e',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // Android shadow
        marginVertical: 10,
    },
    walletIcon: {
        marginRight: 8,
    },
    walletAmount: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Wallet;
