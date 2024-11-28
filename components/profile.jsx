  import React, { useState } from "react";
  import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
    Modal,
    TextInput,
    SafeAreaView,
    StatusBar,
  } from "react-native";
  import { useNavigation, useFocusEffect } from "@react-navigation/native";
  import { LinearGradient } from "expo-linear-gradient";
  import Icon from "react-native-vector-icons/Ionicons";

  const { width, height } = Dimensions.get("window");

  const ProfilePage = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState("GamerX");
    const [email, setEmail] = useState("gamerx@ggmail.com");

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    const saveData = () => closeModal();

    useFocusEffect(
      React.useCallback(() => {
        StatusBar.setBackgroundColor("#0b0d2d");
        StatusBar.setBarStyle("light-content");
        StatusBar.setHidden(false);

        return () => {
          StatusBar.setBackgroundColor("#ffff");
          StatusBar.setBarStyle("default");
        };
      }, [])
    );

    return (
      <SafeAreaView style={styles.safearea}>
        <LinearGradient
          colors={["#0b0d2d", "#2a0845", "#521262"]}
          style={styles.container1}
        >
          {/* Header */}
          <View style={styles.header}>
            <Image
              style={styles.bannerImage}
              source={require("@/assets/images/profile-images/banner.jpg")} // Replace with gaming banner
            />
          </View>

          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image
              source={require("@/assets/images/logo-images/app.png")} // Replace with a gaming avatar
              style={styles.avatarCircle}
            />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userLevel}>Level 25 • Champion</Text>
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Icon name="person-circle" style={styles.icon} />
              <Text style={styles.infoText}>{name}</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="trophy" style={styles.icon} />
              <Text style={styles.infoText}>Highest Score: 9999</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="chatbubbles" style={styles.icon} />
              <Text style={styles.infoText}>Discord: GamerX#1234</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="logo-instagram" style={styles.icon} />
              <Text style={styles.infoText}>@GamerX</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="mail" style={styles.icon} />
              <Text style={styles.infoText}>{email}</Text>
            </View>
          </View>

          {/* Edit Button */}
          <TouchableOpacity style={styles.editButton} onPress={openModal}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Edit Profile</Text>
                <View style={styles.modalForm}>
                  <Text style={styles.formLabel}>Name</Text>
                  <TextInput
                    style={styles.formInput}
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
                  <Text style={styles.formLabel}>Email</Text>
                  <TextInput
                    style={styles.formInput}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                  <TouchableOpacity style={styles.saveButton} onPress={saveData}>
                    <Text style={styles.saveButtonText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </LinearGradient>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    safearea: {
      flex: 1,
    },
    container1: {
      flex: 1,
    },
    header: {
      height: 180,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: Platform.OS === "ios" ? 40 : 20,
      position: "relative",
    },
    headerTitle: {
      color: "#f0f0f0",
      fontSize: 28,
      fontWeight: "bold",
      marginTop: -40,
    },
    avatarContainer: {
      alignItems: "center",
      marginTop: -50,
    },
    avatarCircle: {
      width: 130,
      height: 130,
      borderRadius: 65,
      backgroundColor: "#444",
      borderWidth: 3,
      borderColor: "#ff4d4d",
    },
    userName: {
      marginTop: 10,
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
    userLevel: {
      fontSize: 16,
      color: "#d1d1d1",
      marginTop: 5,
    },
    infoSection: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    infoItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
      padding: 15,
      borderRadius: 10,
      backgroundColor: "#1e1e2e",
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    icon: {
      marginRight: 10,
      fontSize: 24,
      color: "#f06543",
    },
    infoText: {
      fontSize: 16,
      color: "#f0f0f0",
    },
    editButton: {
      margin: 20,
      backgroundColor: "#f06543",
      borderRadius: 25,
      paddingVertical: 12,
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,
    },
    editButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: width * 0.9,
      backgroundColor: "#1e1e2e",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#fff",
    },
    modalForm: {
      width: "100%",
    },
    formLabel: {
      fontSize: 16,
      color: "#fff",
      marginBottom: 5,
    },
    formInput: {
      width: "100%",
      fontSize: 16,
      borderBottomWidth: 1,
      borderColor: "#555",
      marginBottom: 20,
      color: "#fff",
      padding: 5,
    },
    saveButton: {
      marginTop: 10,
      backgroundColor: "#f06543",
      paddingVertical: 12,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    saveButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    bannerImage: {
      height: 200,
      width: "100%",
    },
  });

  export default ProfilePage;
