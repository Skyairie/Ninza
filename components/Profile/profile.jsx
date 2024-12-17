import React, { useState, useEffect } from 'react';
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
  ActivityIndicator,
} from 'react-native';
import axios from 'axios'; // Import Axios
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ProfilePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profileData, setProfileData] = useState(null); // State for profile data
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [name, setName] = useState(''); // Editable name field
  const [email, setEmail] = useState(''); // Editable email field

  const navigation = useNavigation();

  // Fetch data from API
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.1.14:3000/api/profile/12345',
        ); // Replace with your API URL
        const data = response.data.data;

        setProfileData(data); // Set the profile data
        setName(data.Name); // Set initial name
        setEmail(data.Email); // Set initial email
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const saveData = () => {
    // Update the state with edited data
    setProfileData((prevData) => ({
      ...prevData,
      Name: name,
      Email: email,
    }));
    closeModal();
  };

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('#520864');
      StatusBar.setBarStyle('light-content');
      StatusBar.setHidden(false);

      return () => {
        StatusBar.setBackgroundColor('#ffff');
        StatusBar.setBarStyle('default');
      };
    }, []),
  );

  const goBack = () => {
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f06543" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <LinearGradient
        colors={['#0b0d2d', '#2a0845', '#521262']}
        style={styles.container1}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <FontAwesome5 name="arrow-left" size={20} color="#ffff" />
          </TouchableOpacity>
          <Image
            style={styles.bannerImage}
            source={{
              uri: 'https://ninza-game.s3.eu-north-1.amazonaws.com/logo/profile-images/banner.jpg',
            }}
          />
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: profileData.avatar,
            }}
            style={styles.avatarCircle}
          />
          <Text style={styles.userName}>{profileData.Name}</Text>
          <Text style={styles.userLevel}>Level 20 • Champion</Text>
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <FontAwesome5 name="user-circle" style={styles.icon} />
            <Text style={styles.infoText}>{profileData.Name}</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="envelope" style={styles.icon} />
            <Text style={styles.infoText}>{profileData.Email}</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="phone" style={styles.icon} />
            <Text style={styles.infoText}>{profileData.Phone}</Text>
          </View>
          <TouchableOpacity
            style={styles.infoItem}
            onPress={() => navigation.navigate('Transaction')}
          >
            <FontAwesome5 name="coins" style={styles.icon} />
            <Text style={styles.infoText}>
              Wallet Balance: ${profileData.Wallet_balance}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoItem}
            onPress={() => navigation.navigate('GameHistory')}
          >
            <FontAwesome5 name="gamepad" style={styles.icon} />
            <Text style={styles.infoText}>Game History</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 25,
    zIndex: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  avatarCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#444',
    borderWidth: 1,
    borderColor: '#ff4d4d',
  },
  userName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  userLevel: {
    fontSize: 16,
    color: '#d1d1d1',
    marginTop: 5,
  },
  infoSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1e1e2e',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
    fontSize: 24,
    color: '#f06543',
  },
  infoText: {
    fontSize: 16,
    color: '#f0f0f0',
  },
  editButton: {
    margin: 20,
    backgroundColor: '#f06543',
    borderRadius: 25,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.9,
    backgroundColor: '#1e1e2e',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  modalForm: {
    width: '100%',
  },
  formLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  formInput: {
    width: '100%',
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#555',
    marginBottom: 20,
    color: '#fff',
    padding: 5,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#f06543',
    paddingVertical: 12,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bannerImage: {
    height: 200,
    width: '100%',
  },
});

export default ProfilePage;
