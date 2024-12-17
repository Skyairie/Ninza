// // GameModal.js
// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Modal,
//   Pressable,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import styles from '../../utils/styles';

// const GameModal = ({ modalVisible, selectedGame, closeModal }) => (
//   <Modal
//     visible={modalVisible}
//     animationType="slide"
//     transparent={true}
//     onRequestClose={closeModal}
//   >
//     <View style={styles.modalOverlay}>
//       <View style={styles.modalContent}>
//         {selectedGame && (
//           <>
//             <Image source={selectedGame.image} style={styles.modalImage} />
//             <Text style={styles.modalTitle}>{selectedGame.name}</Text>

//             <ScrollView style={styles.howToPlayContainer}>
//               <Text style={styles.howToPlayTitle}>How to Play</Text>
//               <Text style={styles.howToPlayText}>
//                 {selectedGame.howToPlay ||
//                   'No instructions available for this game.'}
//               </Text>
//             </ScrollView>

//             {selectedGame.name === 'Ludo' && (
//               <View style={styles.inputContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter Room Code Here"
//                   placeholderTextColor="black"
//                 />
//               </View>
//             )}

//             <View style={styles.buttonRow}>
//               <Pressable style={[styles.button, styles.playButton]}>
//                 <Text style={styles.buttonText}>Play Now</Text>
//               </Pressable>
//               <Pressable
//                 style={[styles.button, styles.closeButton]}
//                 onPress={closeModal}
//               >
//                 <Text style={styles.buttonText}>Close</Text>
//               </Pressable>
//             </View>
//           </>
//         )}
//       </View>
//     </View>
//   </Modal>
// );

// export default GameModal;

// GameModal.js
import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../../utils/styles';

const GameModal = ({ modalVisible, selectedGame, closeModal }) => (
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
            <Image source={selectedGame.image} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedGame.name}</Text>

            <ScrollView style={styles.howToPlayContainer}>
              <Text style={styles.howToPlayTitle}>Coming Soon...</Text>
              {/* <Text style={styles.howToPlayText}> 
                {selectedGame.howToPlay ||
                  'No instructions available for this game.'}
              </Text>  */}
            </ScrollView>

            {selectedGame.name === 'Ludo' && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Room Code Here"
                  placeholderTextColor="black"
                />
              </View>
            )}

            <View style={styles.buttonRow}>
              <Pressable style={[styles.button, styles.playButton]}>
                <Text style={styles.buttonText}>Coming Soon...</Text>
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
);

export default GameModal;
