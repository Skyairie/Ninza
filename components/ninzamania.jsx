// NinzaMania.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { XIcon } from 'lucide-react-native';
import { dummyGames } from './detail';
import SubMenu from './SubMania/SubMenu';
import GameSection from './SubMania/GameSection';
import GameModal from './SubMania/GameModal';
import styles from './styles';

const NinzaMania = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  const openModal = (game) => {
    setSelectedGame(game);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedGame(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/images/tabback-imgs/1.png')}
        style={styles.container}
      >
        <SubMenu />

        <ScrollView style={styles.scrollContainer}>
          <GameSection
            title="Trending"
            items={dummyGames}
            onCardPress={openModal}
          />
          <GameSection
            title="For you"
            items={dummyGames}
            onCardPress={openModal}
          />
          <GameSection
            title="Popular on Ninza"
            items={dummyGames}
            onCardPress={openModal}
          />
        </ScrollView>

        <GameModal
          modalVisible={modalVisible}
          selectedGame={selectedGame}
          closeModal={closeModal}
        />
      </ImageBackground>

      {showBanner && (
        <View style={styles.banner}>
          <View style={styles.bannerIcon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerText}>60% off Fantasy Coupon</Text>
            <Text style={styles.bannerDescription}>
              Make your Fantasy team. Max. discount up to ₹5
            </Text>
          </View>
          <TouchableOpacity onPress={() => setShowBanner(false)}>
            <XIcon size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default NinzaMania;
