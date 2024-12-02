import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [messageText, setMessageText] = useState("");

  const sendMessage = () => {
    if (messageText.trim() === "") return;

    // Add user's message
    const newMessage = {
      id: `${Date.now()}`,
      text: messageText,
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessageText("");

    // Simulate bot reply
    setTimeout(() => {
      const botReply = {
        id: `${Date.now()}_bot`,
        text: "Thanks for your message! We'll get back to you soon.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 1000);
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";

    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <LinearGradient
        colors={["#1A2B4C", "#204173", "#006eb0"]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Chat Support</Text>
      </LinearGradient>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        style={styles.chatList}
        contentContainerStyle={styles.chatListContent}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          placeholderTextColor="#bbb"
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <FontAwesome5 name="paper-plane" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  chatList: {
    flex: 1,
    backgroundColor: "#121223",
  },
  chatListContent: {
    padding: 10,
  },
  messageContainer: {
    maxWidth: "75%",
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#0078ff",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#333",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#1e1e2e",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#2c2c44",
    color: "#fff",
    paddingHorizontal: 15,
    borderRadius: 25,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#0078ff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chat;
