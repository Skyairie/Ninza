import { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(''); // Set initial state as an empty string
  const [hasPermission, setHasPermission] = useState(undefined); // Default state as undefined

  useEffect(() => {
    // Request permission to access photos on mount
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    if (hasPermission === undefined) {
      alert('Checking permission...');
      return;
    }

    if (!hasPermission) {
      alert('Permission to access gallery is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Set image URI
    }
  };

  return (
    <View style={styles.container}>
      {/* Custom Button using TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Screenshot</Text>
      </TouchableOpacity>

      {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 15,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#1A73E8', // Blue color for button
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
