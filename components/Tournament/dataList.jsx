// src/components/DataList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import DummyData from '../../DummyData.json'; // Adjust path as necessary

export default function DataList() {
  // Sort DummyData by score in descending order
  const sortedData = DummyData.sort((a, b) => b.score - a.score);

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.itemContainer,
        index === 0 && styles.goldBackground,
        index === 1 && styles.silverBackground,
        index === 2 && styles.bronzeBackground,
      ]}
    >
      <Text
        style={[
          styles.rank,
          index === 0 && styles.goldRank,
          index === 1 && styles.silverRank,
          index === 2 && styles.bronzeRank,
        ]}
      >
        {index + 1}
      </Text>
      <Image
        source={require('../../assets/profile-user.png')} // Replace with your actual image source
        style={[
          styles.userIcon,
          index === 0 && styles.goldBorder,
          index === 1 && styles.silverBorder,
          index === 2 && styles.bronzeBorder,
        ]}
      />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.name,
            index === 0 && styles.goldName,
            index === 1 && styles.silverName,
            index === 2 && styles.bronzeName,
          ]}
        >
          {item.name}
        </Text>
        <Text style={styles.textScore}>Score: {item.score}</Text>
      </View>
      {index === 0 && <Text style={styles.badge}>🥇</Text>}
      {index === 1 && <Text style={styles.badge}>🥈</Text>}
      {index === 2 && <Text style={styles.badge}>🥉</Text>}
    </View>
  );

  return (
    <FlatList
      data={sortedData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black with 60% opacity
    borderRadius: 10,
  },
  rank: {
    fontSize: 18,
    color: '#fff',
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // Rank colors
  goldRank: { color: '#FFD700' },
  silverRank: { color: '#C0C0C0' },
  bronzeRank: { color: '#CD7F32' },
  // Background colors for top three
  goldBackground: { backgroundColor: 'rgba(255, 215, 0, 0.2)' }, // Subtle translucent gold
  silverBackground: { backgroundColor: 'rgba(192, 192, 192, 0.2)' }, // Subtle translucent silver
  bronzeBackground: { backgroundColor: 'rgba(205, 127, 50, 0.2)' }, // Subtle translucent bronze
  // Name colors
  goldName: { color: '#FFD700' },
  silverName: { color: '#C0C0C0' },
  bronzeName: { color: '#CD7F32' },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  textScore: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  // Borders for top three icons
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  goldBorder: { borderWidth: 2, borderColor: '#FFD700' },
  silverBorder: { borderWidth: 2, borderColor: '#C0C0C0' },
  bronzeBorder: { borderWidth: 2, borderColor: '#CD7F32' },
  badge: {
    fontSize: 18,
    marginLeft: 8,
  },
});
