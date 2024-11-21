import React, { useState } from 'react';
import { 
  View, 
  Image, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  Platform, 
  Modal, 
  TextInput 
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import for navigation
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

const ProfilePage = () => {
  const navigation = useNavigation(); // Hook for navigation
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('Username');
  const [email, setEmail] = useState('abc123@gmail.com');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const saveData = () => closeModal();

  return (
    <View style={styles.container}>
      <StatusBar/>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('@/assets/images/6.png')} // Update with actual path
          style={styles.avatarCircle}
        />
        <Text style={styles.userName}>{name}</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.infoText}>{name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>🎂</Text>
          <Text style={styles.infoText}>07-01-2003</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>📱</Text>
          <Text style={styles.infoText}>+91 8004916157</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>📸</Text>
          <Text style={styles.infoText}>Instagram account</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>📩</Text>
          <Text style={styles.infoText}>{email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.icon}>🔒</Text>
          <Text style={styles.infoText}>Password</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#143A5A',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: Platform.OS === 'ios' ? 100 : 50,
  },
  backButtonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    borderWidth: 3,
    borderColor: '#ddd',
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
    color: '#143A5A',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  editButton: {
    margin: 20,
    backgroundColor: '#143A5A',
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
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#143A5A',
  },
  modalForm: {
    width: '100%',
  },
  formLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  formInput: {
    width: '100%',
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    padding: 5,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#143A5A',
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
});

export default ProfilePage;
