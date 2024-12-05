import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Modal,
  Pressable,
  ImageBackground,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from '@/utils/fonts';
import { XIcon } from 'lucide-react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <StatusBar barStyle="light-content" backgroundColor="#1A2B4C" />

      {/* Use ImageBackground instead of LinearGradient */}
      <ImageBackground
        source={{
          uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/tabback-imgs/1.png',
        }} // Your image here
        style={styles.container}
      >
        {/* Submenu */}
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

        {/* Game Sections */}
        <ScrollView style={styles.scrollContainer}>
          <Section
            title="TRENDING"
            items={dummyGames}
            onCardPress={openModal}
          />
          <Section title="FOR YOU" items={dummyGames} onCardPress={openModal} />
          <Section
            title="POPULAR ON Ninza"
            items={dummyGames}
            onCardPress={openModal}
          />
        </ScrollView>

        {/* Modal */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selectedGame && (
                <>
                  {/* Game Image and Title */}
                  <Image
                    source={selectedGame.image}
                    style={styles.modalImage}
                  />
                  <Text style={styles.modalTitle}>{selectedGame.name}</Text>

                  {/* Scrollable How to Play Section */}
                  <ScrollView style={styles.howToPlayContainer}>
                    <Text style={styles.howToPlayTitle}>How to Play</Text>
                    <Text style={styles.howToPlayText}>
                      {selectedGame.howToPlay ||
                        'No instructions available for this game.'}
                    </Text>
                  </ScrollView>

                  {/* Input Box for Room Code (only for Ludo) */}
                  {selectedGame.name === 'Ludo' && (
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Enter Room Code Here"
                        placeholderTextColor="black"
                        keyboardType="default"
                        // Add state and logic for room code if needed
                      />
                    </View>
                  )}

                  {/* Fixed Buttons */}
                  <View style={styles.buttonRow}>
                    <Pressable style={[styles.button, styles.playButton]}>
                      <Text style={styles.buttonText}>Play Now</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.closeButton]}
                      onPress={closeModal}
                    >
                      <Text style={styles.buttonText}>Close</Text>
                    </Pressable>
                  </View>
                </>
              )}
            </View>
          </View>
        </Modal>
      </ImageBackground>

      {/* Bottom Banner */}
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

// Dummy game data
const dummyGames = [
  {
    name: 'Rummy',
    image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/rummy.png',
    },
    howToPlay: `  
1. Players: 2-6 players. A standard deck of 52 cards is used (2 decks for 4+ players).  
2. Objective: Form valid sets and sequences to reduce points in your hand to zero.  
3. Dealing: Each player gets 13 cards.  
4. Game Play:  
   - Draw a card from the deck or discard pile.  
   - Discard one card to maintain 13 cards.  
5. Winning: Declare when you have a valid hand (at least one pure sequence).  

Rules of Rummy  
1. Pure Sequence: A sequence of consecutive cards of the same suit without a joker.  
2. Impure Sequence: A sequence that includes a joker.  
3. Sets: A group of 3 or 4 cards of the same rank but different suits.  
4. Joker: Can be used as a wildcard to replace any card.  
5. Declaration: A valid declaration must include at least one pure sequence.
    `,
  },
  {
    name: 'Callbreak',
    image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/callbreak.png',
    },
    howToPlay: ` 
1. Players: 4 players.  
2. Objective: Win exactly the number of tricks (rounds) you bid at the beginning of each game.  
3. Dealing: Each player gets 13 cards.  
4. Bidding: Players declare how many tricks they aim to win.  
5. Gameplay:  
   - Play proceeds in tricks, starting with the player to the dealer’s left.  
   - The highest card of the suit led wins the trick unless a trump (spade) is played.  

Rules of Call Break  
1. Trumps: Spades are the trump suit and can beat cards of other suits.  
2. Follow Suit: Players must follow the suit led if possible; otherwise, they can play any card.  
3. Scoring:  
   - Meet or exceed your bid to score points equal to your bid.  
   - Failing to meet the bid results in negative points equal to the bid.  
4. Winning: The player with the highest score after a set number of rounds wins.  
5. Breaking Spades: Spades can be played only if a player cannot follow the suit led or spades are led intentionally.
    `,
  },
  {
    name: 'Poker',
    image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/poker.png',
    },
    howToPlay: ` 
1. Players: 2-10 players.  
2. Objective: Form the best 5-card hand or bluff opponents to win the pot.  
3. Game Rounds:  
   -Pre-Flop: Players get 2 private cards (hole cards).  
   -Flop: 3 community cards are dealt face up.  
   -Turn: 1 more community card is dealt.  
   -River: Final community card is dealt.  
   -Showdown: Remaining players reveal cards to determine the winner.  
4. Betting: Players can *check*, *bet*, *call*, *raise*, or *fold* during betting rounds.  

Rules of Poker  
1. Hand Rankings: Follow standard poker hand rankings (e.g., Royal Flush, Full House, etc.).  
2. Bluffing: You can bluff to make opponents fold.  
3. Betting Limits: Stick to the game’s limit (No-Limit, Pot-Limit, Fixed-Limit).  
4. Community Cards: Combine hole cards with community cards to form the best hand.  
5. Winning: Win by having the best hand or making all others fold.
    `,
  },
  {
    name: 'Ludo',
    image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/ludo.png',
    },
    howToPlay: `
How to Play Ludo  
1. Players: 2-4 players. Each player chooses a color and gets four tokens.  
2. Start: Roll a 6 to move a token out of the home base onto the starting square.  
3. Movement: Roll the dice and move the token forward by the number rolled.  
4. Goal: Move all four tokens from the starting square to the center of the board (home).  
5. Winning: The first player to get all four tokens to the home wins.

Rules of Ludo  
1. Rolling a 6: A 6 allows you to roll again.  
2. Safe Squares: Tokens on safe squares (marked with a star) cannot be captured.  
3. Capturing Tokens: Land on an opponent's token to send it back to their base.  
4. Exact Roll: You need an exact roll to move your token into the home.  
5. Blockade: Two tokens of the same color on a square form a blockade; no other token can pass it.
    `,
  },
  {
    name: 'Snakes & Ladders',
    image: {
      uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/games-images/snake.jpeg',
    },
    howToPlay: `
How to Play Snake and Ladder  
1. Players: 2 or more players.  
2. Objective: Reach square 100 first.  
3. Start: Roll a 6 to begin.  
4. Gameplay:  
   - Roll the dice and move forward by the number rolled.  
   - Land on a *ladder* to climb up.  
   - Land on a *snake* to slide down.  

Rules of Snake and Ladder  
1. Exact Roll: You need an exact roll to land on square 100 to win.  
2. One Token Per Player: Only one token is used per player.  
3. No Backward Move: If the dice roll exceeds square 100, wait for the next turn.  
4. Climbing and Sliding: Ladders advance you upward, snakes send you downward.  
5. No Blocking: Two players can occupy the same square.
    `,
  },
];

// Section Component
const Section = ({ title, items, onCardPress }) => (
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

const styles = StyleSheet.create({
  // All styles remain the same as your original code
  // Including modal styles, submenu, banner, etc.
  safeArea: {
    flex: 1,
    backgroundColor: '#1A2B4C',
  },
  container: {
    flex: 1,
    padding: 0,
    paddingLeft: 10,
  },
  submenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    marginTop: 0,
    borderRadius: 20,
  },
  submenuText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.Poppins,
    marginBottom: 5,
  },
  gameCardContainer: {
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 120,
    height: 120,
    overflow: 'hidden',
  },
  gameImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'rgba(0, 78, 112, 0.9)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  modalImage: {
    width: 130,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: fonts.Poppins,
    marginBottom: 10,
  },
  howToPlayContainer: {
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  howToPlayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E6F7FF',
    fontFamily: fonts.Poppins,
    marginBottom: -15,
  },
  howToPlayText: {
    fontSize: 12,
    color: '#E6F7FF',
    fontFamily: fonts.Poppins,
    lineHeight: 20,
  },
  inputContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    width: '97%',
    padding: 6,
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 0,
    marginBottom: 10,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
  },
  playButton: {
    backgroundColor: '#20B954',
  },
  closeButton: {
    backgroundColor: '#FF5C5C',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: fonts.Poppins,
  },
  banner: {
    position: 'absolute',
    bottom: 2,
    left: 10,
    right: 10,
    backgroundColor: '#002f53',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    marginRight: 16,
  },
  bannerText: {
    color: '#00c9ff',
    fontWeight: 'bold',
  },
  bannerDescription: {
    color: '#D0E7FF',
    fontSize: 12,
  },
});

export default NinzaMania;
