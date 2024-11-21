import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { fonts } from "../utils/fonts";
const screenWidth = Dimensions.get("window").width;

function HomeScreen() {
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselData = [
    { id: "01", image: require("../assets/images/carousel/slider (2).gif") },
    { id: "02", image: require("../assets/images/carousel/slider.png") },
    { id: "03", image: require("../assets/images/carousel/slider.gif") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % carouselData.length;
      flatlistRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const renderItem = ({ item }) => (
    <View style={styles.imageWrapper}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </View>
  );

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
  
      <ScrollView>
        <View style={styles.carouselContainer}>
          <FlatList
            data={carouselData}
            ref={flatlistRef}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            getItemLayout={getItemLayout}
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            snapToInterval={screenWidth}
            decelerationRate="fast"
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        {/* Add other scrollable content below the FlatList if needed */}
        <Text style={styles.headings}>Featured Games</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.card, styles.cardEleveted]}>
            <Image
              source={require("../assets/images/card/header.gif")}
              style={styles.images}
            />
            <Text style={styles.cardText}>Chess</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PLAY NOW</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, styles.cardEleveted]}>
            <Image
              source={require("../assets/images/card/header (2).gif")}
              style={styles.images}
            />
            <Text style={styles.cardText}>Ludo</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PLAY NOW</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, styles.cardEleveted]}>
            <Image
              source={require("../assets/images/card/header (1).gif")}
              style={styles.images}
            />
            <Text style={styles.cardText}>Poker</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PLAY NOW</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, styles.cardEleveted]}>
            <Image
              source={require("../assets/images/card/header (3).gif")}
              style={styles.images}
            />
            <Text style={styles.cardText}>Call Break</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PLAY NOW</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text style={styles.headings}>Recently Played</Text>

        <View style={styles.cardContainer1}>
          <View style={styles.textContainer1}>
            <Text style={styles.title1}>Ludo</Text>
            <Text style={styles.subtitle1}>Recently Played</Text>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText1}>Continue</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/images/ludo.png')} // Replace with your image URL
            style={styles.image1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#191A25",
  },
  carouselContainer: {
    alignItems: "center", // Center the carousel
  },
  flatListContent: {
    justifyContent: "center",
  },
  imageWrapper: {
    width: screenWidth * 0.9, // Adjust width to be 90% of the screen width
    borderRadius: 20,
    overflow: "hidden",
    ///marginVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  image: {
    height: 200, // Fixed height for better display
    width: "100%", // Ensure the image matches the width of the wrapper
  },
  //-----carousel----end---------

  headings: {
    color: "white",
    fontSize: 24,
    paddingHorizontal: 9,
    marginTop: 10,
    fontFamily: fonts.Secondary,
  },
  scrollContainer: {
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  card: {
    borderRadius: 12,
    backgroundColor: "#20212D",
    overflow: "hidden",
    marginVertical: 10,
    elevation: 4,
    marginLeft: 5,
    alignItems: "center",
  },
  images: {
    width: 180,
    height: 100,
  },
  cardContent: {
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  cardEleveted: {
    marginRight: 8,
  },
  button: {
    backgroundColor: "#0CC0DF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginTop: 12,
    width: 110,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 20,
    color: "white",
    marginTop: 8,
    textAlign: "center",
    fontFamily: fonts.Primary,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    //fontFamily: "Arial",
  },
  //-------fetured--------end--
  cardContainer1: {
    flexDirection: 'row',
    backgroundColor: '#20212D',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  textContainer1: {
    flex: 1,
    marginRight: 10,
    alignItems:'flex-start'
  },
  title1: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily:fonts.Primary
  },
  subtitle1: {
    color: '#8a8d96',
    fontSize: 14,
    marginTop: 4,
  },
  button1: {
    backgroundColor: '#0CC0DF',
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 10,
    borderRadius: 14,
    // backgroundColor: "#0CC0DF",
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 14,
    // marginTop: 12,
    // width: 110,
    // marginBottom: 10,
  },
  buttonText1: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'bold'
  },
  image1: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
});

export default HomeScreen;
