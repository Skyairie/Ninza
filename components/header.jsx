// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StatusBar,
//   StyleSheet,
// } from "react-native";
// import { useFocusEffect, useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { LinearGradient } from "expo-linear-gradient";
// import Icon from "react-native-vector-icons/Ionicons";
// import BoardScreen from "@/app/(tabs)/boardScreen";
// import NinzaMania from "./ninzamania";
// import Tournament from "./Tournament";
// import { fonts } from "@/utils/fonts";

// const Header = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState("NINZAMANIA");
//   const [gradientColors, setGradientColors] = useState([
//     "#1A2B4C",
//     "#204173",
//     "#006eb0",
//   ]);
//   const [HeaderColor, setHeaderColor] = useState("#1A2B4C");
//   const [tabBlockColor, setTabBlockColor] = useState("#1A2B4C");

//   useFocusEffect(
//     React.useCallback(() => {
//       // Reset active tab and colors when screen is focused
//       setActiveTab("NINZAMANIA");
//       setGradientColors(["#1A2B4C", "#204173", "#006eb0"]);
//       setHeaderColor("#1A2B4C");
//       setTabBlockColor("#1A2B4C");
//     }, [])
//   );

//   const handleTabPress = (tab) => {
//     setActiveTab(tab);

//     // Update colors based on selected tab
//     switch (tab) {
//       case "LEADERBOARD":
//         setGradientColors(["#14bf98", "#14bf98", "#14bf98"]);
//         setHeaderColor("#004845");
//         setTabBlockColor("#004B4A");
//         break;
//       case "NINZAMANIA":
//         setGradientColors(["#1A2B4C", "#204173", "#006eb0"]);
//         setHeaderColor("#1A2B4C");
//         setTabBlockColor("#1A2B4C");
//         break;
//       case "TOURNAMENT":
//         setGradientColors(["#58003b", "#b8007a", "#ff0090"]);
//         setHeaderColor("#58003b");
//         setTabBlockColor("#5A003C");
//         break;
//       default:
//         setGradientColors(["#1A2B4C", "#204173", "#006eb0"]);
//         setHeaderColor("#1A2B4C");
//         setTabBlockColor("#1A2B4C");
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* StatusBar dynamically updates */}
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor={HeaderColor} // Synchronize StatusBar with Header
//       />
//       <LinearGradient colors={gradientColors} style={styles.container}>
//         {/* Header */}
//         <View style={[styles.navbar, { backgroundColor: HeaderColor }]}>
//           <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//             <Icon name="person-circle-outline" size={30} color="#ffffff" />
//           </TouchableOpacity>
//           <View style={styles.walletContainer}>
//             <Icon
//               name="wallet-outline"
//               size={20}
//               color="#00CFFD"
//               style={styles.walletIcon}
//             />
//             <Text style={styles.walletLabel}>₹</Text>
//             <Text style={styles.walletBalance}>200</Text>
//           </View>
//           <Icon
//             name="notifications-outline"
//             size={24}
//             color="#ffffff"
//             style={styles.iconSpacing}
//           />
//         </View>

//         {/* Tabs */}
//         <View style={[styles.HeaderTabs, { backgroundColor: tabBlockColor }]}>
//           {["NINZAMANIA", "LEADERBOARD", "TOURNAMENT"].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               onPress={() => handleTabPress(tab)}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.HeaderTab,
//                   activeTab === tab && styles.activeTabText,
//                 ]}
//               >
//                 {tab}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Dynamic Content */}
//         {activeTab === "NINZAMANIA" && <NinzaMania />}
//         {activeTab === "LEADERBOARD" && <BoardScreen />}
//         {activeTab === "TOURNAMENT" && <Tournament />}
//       </LinearGradient>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#1A2B4C",
//   },
//   container: {
//     flex: 1,
//   },
//   navbar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 17,
//     paddingBottom: 10,
//     paddingTop: 10,
//   },
//   walletContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#143F62",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   walletIcon: {
//     marginRight: 5,
//   },
//   walletLabel: {
//     color: "#00CFFD",
//     fontFamily: "Poppins_700Bold",
//     fontSize: 16,
//     marginRight: 5,
//   },
//   walletBalance: {
//     color: "#ffffff",
//     fontFamily: "Poppins_700Bold",
//     fontSize: 16,
//   },
//   HeaderTabs: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//   },
//   tabButton: {
//     paddingHorizontal: 5,
//     paddingVertical: 2,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   activeTabButton: {
//     borderBottomWidth: 3,
//     borderBottomColor: "#e4be00",
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   HeaderTab: {
//     color: "#A9C1E8",
//     fontSize: 16,
//     fontFamily: fonts.Poppins,
//   },
//   activeTabText: {
//     color: "#e4be00",
//     fontSize: 20,
//   },
// });
// export default Header;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StatusBar } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import BoardScreen from '@/app/(tabs)/boardScreen';
// import NinzaMania from './ninzamania';
// import Tournament from './Tournament';
// import { fonts } from '@/utils/fonts';

// const Tab = createMaterialTopTabNavigator();

// const getColors = (routeName) => {
//   switch (routeName) {
//     case 'LeaderBoard':
//       return { bgColor: '#004845', navbarColor: '#004845' };
//     case 'Tournament':
//       return { bgColor: '#58003b', navbarColor: '#58003b' };
//     default:
//       return { bgColor: '#1A2B4C', navbarColor: '#1A2B4C' };
//   }
// };

// const Header = () => {
//   const [colors, setColors] = useState(getColors('NinzaMania'));

//   useEffect(() => {
//     StatusBar.setBackgroundColor(colors.navbarColor);
//   }, [colors]);

//   return (
//     <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.bgColor }]}>
//       <View style={[styles.container, { backgroundColor: colors.bgColor }]}>
//         <View style={[styles.navbar, { backgroundColor: colors.navbarColor }]}>
//           <Icon name="person-circle-outline" size={30} color="#ffffff" />
//           <View style={styles.walletContainer}>
//             <Icon name="wallet-outline" size={20} color="#00CFFD" style={styles.walletIcon} />
//             <Text style={styles.walletLabel}>₹</Text>
//             <Text style={styles.walletBalance}>200</Text>
//           </View>
//           <Icon name="notifications-outline" size={24} color="#ffffff" />
//         </View>

//         {/* Tab Navigator */}
//           <Tab.Navigator
//             screenOptions={({ route }) => ({
//               tabBarStyle: styles.tabBar,
//               tabBarIndicatorStyle: styles.tabIndicator,
//               tabBarLabel: ({ focused }) => (
//                 <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
//                   {route.name.toUpperCase()}
//                 </Text>
//               ),
//             })}
//             screenListeners={{
//               state: (e) => {
//                 const routeName = e.data.state.routes[e.data.state.index].name;
//                 const newColors = getColors(routeName);
//                 setColors(newColors);
//               },
//             }}
//           >
//             <Tab.Screen name="NinzaMania" component={NinzaMania} />
//             <Tab.Screen name="LeaderBoard" component={BoardScreen} />
//             <Tab.Screen name="Tournament" component={Tournament} />
//           </Tab.Navigator>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#1A2B4C',
//   },
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 17,
//     paddingBottom: 10,
//     paddingTop: 10,
//   },
//   walletContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#143F62',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   walletIcon: {
//     marginRight: 5,
//   },
//   walletLabel: {
//     color: '#00CFFD',
//     fontFamily: 'Poppins_700Bold',
//     fontSize: 16,
//     marginRight: 5,
//   },
//   walletBalance: {
//     color: '#ffffff',
//     fontFamily: 'Poppins_700Bold',
//     fontSize: 16,
//   },
//   tabBar: {
//     backgroundColor: 'transparent',
//     elevation: 0,
//     padding:0,
//     margin:0
//   },
//   tabLabel: {
//     fontSize: 12,
//     color: '#A9C1E8',
//     fontFamily: fonts.Poppins,
//   },
//   activeTabLabel: {
//     fontSize: 16.5,
//     color: '#e4be00',
//     fontWeight: 'bold',
//   },
//   tabIndicator: {
//     backgroundColor: '#e4be00',
//     height: 3,
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
// });

// export default Header;

// import React, { useState, useEffect, useCallback } from "react";
// import { View, Text, StatusBar, Image, ImageBackground } from "react-native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { SafeAreaView, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import { useFocusEffect } from "@react-navigation/native";
// import BoardScreen from "@/app/(tabs)/boardScreen";
// import NinzaMania from "./ninzamania";
// import Tournament from "./Tournament";
// import { fonts } from "@/utils/fonts";

// const Tab = createMaterialTopTabNavigator();

// const getColors = (routeName) => {
//   switch (routeName) {
//     case "LeaderBoard":
//       return { bgColor: "#004845", navbarColor: "#004845" };
//     case "Tournament":
//       return { bgColor: "#58003b", navbarColor: "#58003b" };
//     default:
//       return { bgColor: "#1A2B4C", navbarColor: "#1A2B4C" };
//   }
// };

// const Header = () => {
//   const [colors, setColors] = useState(getColors("NinzaMania"));

//   useFocusEffect(
//     useCallback(() => {
//       // Apply StatusBar settings only for this screen
//       StatusBar.setBackgroundColor(colors.navbarColor);
//       StatusBar.setBarStyle("light-content");
//       StatusBar.setHidden(false);

//       return () => {
//         // Reset StatusBar to default when leaving the screen
//         StatusBar.setBackgroundColor("#FFFFFF"); // Default color
//         StatusBar.setBarStyle("dark-content"); // Default style
//         StatusBar.setHidden(false); // Ensure it's visible
//       };
//     }, [colors])
//   );

//   return (
//     <SafeAreaView
//       style={[styles.safeArea, { backgroundColor: colors.bgColor }]}
//     >
//       <View style={[styles.container, { backgroundColor: colors.bgColor }]}>
//         <View style={[styles.navbar, { backgroundColor: colors.navbarColor }]}>
//           {/* Left - Profile Icon */}
//           <Icon name="person-circle-outline" size={30} color="#ffffff" />

//           {/* Center - Wallet */}
//           <View style={styles.walletContainer1}>
//             <ImageBackground
//               source={require("../assets/images/1.png")} // Replace with your background image
//               style={styles.walletBackground} // Style to fit the container
//             >
//               {/* Position elements over the image */}
//               <View style={styles.walletOverlay}>
//                 <Icon
//                   name="wallet-outline"
//                   size={24}
//                   color="#FFD700"
//                   style={styles.walletIcon}
//                 />
//                 <Text style={styles.walletLabel}>₹</Text>
//                 <Text style={styles.walletBalance}>200</Text>
//               </View>
//             </ImageBackground>
//           </View>

//           {/* Right - Notifications and Spin */}
//           <View style={styles.rightIcons}>
//             <Icon name="notifications" size={24} color="#ffffff" />
//             <Image
//               source={require("../assets/images/spin.png")}
//               style={styles.spin}
//             />
//           </View>
//         </View>

//         {/* Tab Navigator */}
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarStyle: styles.tabBar,
//             tabBarIndicatorStyle: styles.tabIndicator,
//             tabBarLabel: ({ focused }) => (
//               <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
//                 {route.name.toUpperCase()}
//               </Text>
//             ),
//           })}
//           screenListeners={{
//             state: (e) => {
//               const routeName = e.data.state.routes[e.data.state.index].name;
//               const newColors = getColors(routeName);
//               setColors(newColors);
//             },
//           }}
//         >
//           <Tab.Screen name="NinzaMania" component={NinzaMania} />
//           <Tab.Screen name="LeaderBoard" component={BoardScreen} />
//           <Tab.Screen name="Tournament" component={Tournament} />
//         </Tab.Navigator>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#1A2B4C",
//   },
//   navbar: {
//     flexDirection: "row",
//     justifyContent: "space-between", // Distribute space between left, center, and right
//     alignItems: "center", // Align items vertically centered
//     paddingHorizontal: 17,
//     paddingBottom: 10,
//     paddingTop: 10,
//   },
//   walletContainer1: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 10,
//     paddingHorizontal: 25,
//     paddingVertical: 2,
//     marginLeft: 35,
//     width: 200, // Adjust to the width of your choice
//     height: 40, // Adjust to the height of your choice
//   },
//   walletBackground: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10, // Ensure the background matches the container's radius
//     height: 45,
//   },
//   walletOverlay: {
//     // position: 'absolute', // Position over the image
//     flexDirection: "row", // Align elements in a row
//     alignItems: "center", // Align items vertically centered
//     zIndex: 0, // Ensure this content is on top of the image
//   },
//   walletIcon: {
//     marginRight: 10,
//     marginBottom: 5,
//   },
//   walletLabel: {
//     color: "#FFD700",
//     fontFamily: "Poppins_700Bold",
//     fontSize: 16,
//     marginRight: 5,
//     marginBottom: 5,
//   },
//   walletBalance: {
//     color: "#ffffff",
//     fontFamily: "Poppins_700Bold",
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   rightIcons: {
//     flexDirection: "row", // Align spin and notifications horizontally
//     alignItems: "center",
//     gap: 10, // Space between the icons (use `gap` or margin)
//   },
//   spin: {
//     width: 24,
//     height: 24,
//     marginLeft: 10, // Add space between notification and spin
//   },
//   tabBar: {
//     backgroundColor: "transparent",
//     elevation: 0,
//     padding: 0,
//     margin: 0,
//   },
//   tabLabel: {
//     fontSize: 16,
//     color: "#A9C1E8",
//     fontFamily: fonts.Poppins,
//   },
//   activeTabLabel: {
//     fontSize: 16.5,
//     color: "#e4be00",
//     fontWeight: "bold",
//   },
//   tabIndicator: {
//     backgroundColor: "#e4be00",
//     height: 3,
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
//   spin: {
//     height: 40,
//     width: 30,
//   },
// });

// export default Header;


import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import BoardScreen from '@/app/(tabs)/boardScreen';
import NinzaMania from './ninzamania';
import Tournament from './Tournament';
import { fonts } from '@/utils/fonts';

const Tab = createMaterialTopTabNavigator();

const getColors = (routeName) => {
  switch (routeName) {
    case 'LeaderBoard':
      return { bgColor: '#004845', navbarColor: '#004845', walletColor: '#003D3C' };
    case 'Tournament':
      return { bgColor: '#58003b', navbarColor: '#58003b', walletColor: '#46002f' };
    default:
      return { bgColor: '#1A2B4C', navbarColor: '#1A2B4C', walletColor: '#143F62' };
  }
};

const Header = () => {
  const [colors, setColors] = useState(getColors('NinzaMania'));

  useFocusEffect(
    useCallback(() => {
      // Apply StatusBar settings only for this screen
      StatusBar.setBackgroundColor(colors.navbarColor);
      StatusBar.setBarStyle('light-content');
      StatusBar.setHidden(false);

      return () => {
        // Reset StatusBar to default when leaving the screen
        StatusBar.setBackgroundColor('#FFFFFF'); // Default color
        StatusBar.setBarStyle('dark-content');  // Default style
        StatusBar.setHidden(false);            // Ensure it's visible
      };
    }, [colors])
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.bgColor }]}>
      <View style={[styles.container, { backgroundColor: colors.bgColor }]}>
        <View style={[styles.navbar, { backgroundColor: colors.navbarColor }]}>
          {/* Left - Profile Icon */}
          <Icon name="person-circle-outline" size={30} color="#ffffff" />

          {/* Center - Wallet */}
          <View style={[styles.walletContainer, { backgroundColor: colors.walletColor }]}>
            <Icon name="wallet-outline" size={20} color="#FFD700" style={styles.walletIcon} />
            <Text style={[styles.walletLabel, { color: '#FFD700' }]}>₹</Text>
            <Text style={[styles.walletBalance, { color: '#ffffff' }]}>200</Text>
          </View>

          {/* Right - Notifications and Spin */}
          <View style={styles.rightIcons}>
            <Icon name="notifications" size={24} color="#ffffff" />
            <Image source={require('../assets/images/spin.png')} style={styles.spin} />
          </View>
        </View>

        {/* Tab Navigator */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: styles.tabBar,
            tabBarIndicatorStyle: styles.tabIndicator,
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
                {route.name.toUpperCase()}
              </Text>
            ),
          })}
          screenListeners={{
            state: (e) => {
              const routeName = e.data.state.routes[e.data.state.index].name;
              const newColors = getColors(routeName);
              setColors(newColors);
            },
          }}
        >
          <Tab.Screen name="NinzaMania" component={NinzaMania} />
          <Tab.Screen name="LeaderBoard" component={BoardScreen} />
          <Tab.Screen name="Tournament" component={Tournament} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1A2B4C',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between left, center, and right
    alignItems: 'center', // Align items vertically centered
    paddingHorizontal: 17,
    paddingBottom: 10,
    paddingTop: 10,
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center', // Center within the parent navbar
    marginLeft: 35,
  },
  walletIcon: {
    marginRight: 5,
  },
  walletLabel: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    marginRight: 5,
  },
  walletBalance: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
  },
  rightIcons: {
    flexDirection: 'row', // Align spin and notifications horizontally
    alignItems: 'center',
    gap: 10, // Space between the icons (use `gap` or margin)
  },
  spin: {
    width: 30,
    height: 30,
    marginLeft: 10, // Add space between notification and spin
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    padding: 0,
    margin: 0,
  },
  tabLabel: {
    fontSize: 16,
    color: '#A9C1E8',
    fontFamily: fonts.Poppins,
  },
  activeTabLabel: {
    fontSize: 16.5,
    color: '#e4be00',
    fontWeight: 'bold',
    // borderRadius:5,
    // borderWidth:2,
  },
  tabIndicator: {
    backgroundColor: '#e4be00',
    height: 3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default Header;
