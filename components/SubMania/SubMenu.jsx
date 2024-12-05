// SubMenu.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

const SubMenu = () => (
  <View style={styles.submenu}>
    <TouchableOpacity style={styles.searchContainer}>
      <Icon name="gift-sharp" size={20} color="#ffff" />
      <Text style={styles.submenuText}>Benefits</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.searchContainer}>
      <Icon name="search-outline" size={20} color="#ffffff" />
      <Text style={styles.submenuText}>SEARCH</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.searchContainer}>
      <Icon name="podium-outline" size={20} color="#ffffff" />
      <Text style={styles.submenuText}>LEADERBOARD</Text>
    </TouchableOpacity>
  </View>
);

export default SubMenu;
