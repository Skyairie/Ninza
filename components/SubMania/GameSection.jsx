// GameSection.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

const GameSection = ({ title, items, onCardPress }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.gameCardContainer}
          onPress={() => onCardPress(item)}
        >
          <Image source={item.image} style={styles.gameImage} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default GameSection;
