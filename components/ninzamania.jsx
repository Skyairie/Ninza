// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   Modal,
//   Pressable,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useFonts, Poppins_700Bold, Poppins_400Regular } from "@expo-google-fonts/poppins";
// import CurvedDivider from "./curvedDivider";
// import { fonts } from "@/utils/fonts";
// import { XIcon } from "lucide-react-native";
// import { BlurView } from "expo-blur";
// const NinzaMania = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedGame, setSelectedGame] = useState(null);
//   const [showBanner, setShowBanner] = useState(true);

//   const openModal = (game) => {
//     setSelectedGame(game);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedGame(null);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="light-content" backgroundColor="#1A2B4C" />
//       <LinearGradient colors={["#1A2B4C", "#204173", "#006eb0"]} style={styles.container}>
//         {/* Submenu */}
//         <View style={styles.submenu}>
//           <Text style={styles.submenuText}>OFFERS</Text>
//           <Text style={styles.submenuText}>SEARCH</Text>
//           <Text style={styles.submenuText}>WORLD WAR</Text>
//         </View>

//         {/* Game Sections */}
//         <ScrollView style={styles.scrollContainer}>
//           <Section title="TRENDING" items={dummyGames} onCardPress={openModal} />
//           <Section title="FOR YOU" items={dummyGames} onCardPress={openModal} />
//           <Section title="POPULAR ON Ninza" items={dummyGames} onCardPress={openModal} />
//           <Section title="POPULAR ON Ninza" items={dummyGames} onCardPress={openModal} />

//         </ScrollView>

//         {/* Modal */}
//         <Modal
//           visible={modalVisible}
//           animationType="slide"
//           transparent={true}
//           onRequestClose={closeModal}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               {selectedGame && (
//                 <>
//                   <Image source={selectedGame.image} style={styles.modalImage} />
//                   <Text style={styles.modalTitle}>{selectedGame.name}</Text>
//                   <Text style={styles.modalDescription}>
//                     Play {selectedGame.name} and enjoy the best experience!
//                   </Text>
//                   <Pressable style={styles.closeButton} onPress={closeModal}>
//                     <Text style={styles.closeButtonText}>Close</Text>
//                   </Pressable>
//                 </>
//               )}
//             </View>
//           </View>
//         </Modal>
//       </LinearGradient>

//       {/* Bottom Banner */}
//       {showBanner && (
//         <View style={styles.banner}>
//           <View style={styles.bannerIcon} />
//           <View style={{ flex: 1 }}>
//             <Text style={styles.bannerText}>60% off Fantasy Coupon</Text>
//             <Text style={styles.bannerDescription}>
//               Make your Fantasy team. Max. discount up to ₹5
//             </Text>
//           </View>
//           <TouchableOpacity onPress={() => setShowBanner(false)}>
//             <XIcon size={24} color="white" />
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// // Dummy game data
// const dummyGames = [
//   { name: "Rummy", image: require("../assets/images/gameslogo/rummy.jpg") },
//   { name: "Callbreak", image: require("../assets/images/gameslogo/callbreak.jpg") },
//   { name: "Poker", image: require("../assets/images/gameslogo/pokar.jpg") },
//   { name: "Ludo", image: require("../assets/images/gameslogo/ludo.jpg") },
//   { name: "Snakes & Ladders", image: require("../assets/images/gameslogo/snake.jpg") },
// ];

// // Section Component
// const Section = ({ title, items, onCardPress }) => (

//   <View style={styles.section}>
//   <CurvedDivider />
//   <Text style={styles.sectionTitle}>{title}</Text>
//   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//     {items.map((item, index) => (
//       <TouchableOpacity
//         key={index}
//         style={styles.gameCardContainer}
//         onPress={() => onCardPress(item)}
//       >
//         {/* Blurred Background */}
//         <BlurView
//           intensity={30}
//           tint="light"
//           style={StyleSheet.absoluteFill}
//         />
//         {/* Content */}
//         <Image source={item.image} style={styles.gameImage} />
//         <Text style={styles.gameText}>{item.name}</Text>
//       </TouchableOpacity>
//     ))}
//   </ScrollView>
// </View>

// );

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#1A2B4C",
//   },
//   container: {
//     flex: 1,
//     padding: 0,
//     paddingLeft:10
//   },
//   submenu: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     backgroundColor: "#1E4D73",
//     paddingVertical: 7,
//     borderRadius: 20,
//     marginTop: 10,
//     // marginLeft:30,
//      marginRight:20,
//     margin:10
//   },
//   submenuText: {
//     color: "#D0E7FF",
//     fontSize: 14,
//     fontFamily: fonts.Poppins,
//   },
//   scrollContainer: {
//     paddingVertical: 0,
//   },

//   section: {
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     color: "#D0E7FF",
//     fontSize: 18,
//     fontWeight: "bold",
//     fontFamily: fonts.Poppins,
//     marginBottom: 5,
//   },
//   gameCardContainer: {
//     borderRadius: 10,
//     marginRight: 10,
//     alignItems: "center",
//     width: 120,
//     overflow: "hidden", // Ensures the blur effect is contained
//     position: "relative", // Allows layering of BlurView and content
//   },
//   gameImage: {
//     width: 120,
//     height: 90,
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//     zIndex: 1, // Ensures it appears above the blurred background
//   },
//   gameText: {
//     color: "#ffffff",
//     fontSize: 14,
//     textAlign: "center",
//     paddingTop: 5,
//     fontFamily: fonts.Poppins,
//     zIndex: 1, // Ensures it appears above the blurred background
//   },

//   /////
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   modalContent: {
//     backgroundColor: "#1A2B4C",
//     borderRadius: 20,
//     padding: 20,
//     alignItems: "center",
//     width: "100%",
//   },
//   modalImage: {
//     width: 150,
//     height: 100,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//     fontFamily: fonts.Poppins,
//     marginBottom: 10,
//   },
//   modalDescription: {
//     fontSize: 14,
//     color: "#D0E7FF",
//     fontFamily: fonts.Poppins,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   closeButton: {
//     backgroundColor: "#00CFFD",
//     paddingVertical: 10,
//     paddingHorizontal: 40,
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 14,
//     fontFamily: fonts.Poppins,
//   },
//   banner: {
//     position: "absolute",
//     bottom: 2,
//     left: 10,
//     right: 10,
//     backgroundColor: "#002f53",
//     borderRadius: 20,
//     padding: 16,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   bannerIcon: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     backgroundColor: "white",
//     marginRight: 16,
//   },
//   bannerText: {
//     color: "#00c9ff",
//     fontWeight: "bold",
//   },
//   bannerDescription: {
//     color: "white",
//     fontSize: 12,
//   },
// });

// export default NinzaMania;
import React, { useState } from "react";
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
  ImageBackground, // Import ImageBackground
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "@/utils/fonts";
import { XIcon } from "lucide-react-native";
import Icon from "react-native-vector-icons/Ionicons";

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
        source={require("../assets/images/tabbackimg/1.png")} // Your image here
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
                  <Image
                    source={selectedGame.image}
                    style={styles.modalImage}
                  />
                  <Text style={styles.modalTitle}>{selectedGame.name}</Text>
                  <Text style={styles.modalDescription}>
                    Play {selectedGame.name} and enjoy the best experience!
                  </Text>
                  <Pressable style={styles.closeButton} onPress={closeModal}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </Pressable>
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
  { name: "Rummy", image: require("../assets/images/gameslogo/rummy.png") },
  {
    name: "Callbreak",
    image: require("../assets/images/gameslogo/callbreak.png"),
  },
  { name: "Poker", image: require("../assets/images/gameslogo/poker.png") },
  { name: "Ludo", image: require("../assets/images/gameslogo/ludo (2).png") },
  {
    name: "Snakes & Ladders",
    image: require("../assets/images/gameslogo/snake.jpeg"),
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
  safeArea: {
    flex: 1,
    backgroundColor: "#1A2B4C",
  },
  container: {
    flex: 1,
    padding: 0,
    paddingLeft: 10,
  },
  submenu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    marginTop: 0,
    borderRadius: 20,
  },
  submenuText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: fonts.Poppins,
    marginBottom: 5,
  },
  gameCardContainer: {
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    width: 120, // Adjusted width
    height: 120, // Adjusted height
    overflow: "hidden",
  },
  gameImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10, // Optional rounded corners
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1A2B4C",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  modalImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: fonts.Poppins,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    color: "#D0E7FF",
    fontFamily: fonts.Poppins,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#00CFFD",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: fonts.Poppins,
  },
  banner: {
    position: "absolute",
    bottom: 2,
    left: 10,
    right: 10,
    backgroundColor: "#002f53",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "white",
    marginRight: 16,
  },
  bannerText: {
    color: "#00c9ff",
    fontWeight: "bold",
  },
  bannerDescription: {
    color: "white",
    fontSize: 12,
  },
});

export default NinzaMania;

