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
  StatusBar,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";

const Chat = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("light-content", true);
      StatusBar.setBackgroundColor("#1A2B4C", true);

      return () => {
        StatusBar.setBarStyle("dark-content", true);
        StatusBar.setBackgroundColor("#FFFFFF", true);
      };
    }, [])
  );

  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! Welcome to GameZone Support. How can we help you today?", sender: "bot" },
  ]);
  const [messageText, setMessageText] = useState("");

  const [options, setOptions] = useState([]);

  const initialOptions = [
    { id: "1", text: "Withdrawal Issue" },
    { id: "2", text: "Deposit Issue" },
    { id: "3", text: "Server Issue" },
    { id: "4", text: "Game Assistance" },
  ];

  const subOptions = {
    "Withdrawal Issue": [
      { id: "1", text: "Transaction not processed" },
      { id: "2", text: "Delayed withdrawal time" },
    ],
    "Deposit Issue": [
      { id: "1", text: "Payment failed" },
      { id: "2", text: "Amount debited but not added" },
    ],
    "Server Issue": [
      { id: "1", text: "Game lagging" },
      { id: "2", text: "Unable to connect to server" },
    ],
    "Game Assistance": [
      { id: "1", text: "How to play the game?" },
      { id: "2", text: "How to unlock achievements?" },
    ],
  };

  const detailedReplies = {
    "Transaction not processed": "We're sorry to hear that your withdrawal is not processed. Please ensure that your payment details are correct. If the issue persists, kindly share your transaction ID so we can investigate further.",
    "Delayed withdrawal time": "Withdrawals may sometimes take longer due to server issues or bank processing times. Usually, it takes 1-3 business days. If it exceeds this period, let us know.",
    "Payment failed": "A failed payment can happen due to connectivity or payment gateway issues. Please check your bank or wallet statement. If the amount was deducted but not credited, let us know the date and time of the transaction.",
    "Amount debited but not added": "If the amount was deducted but doesn't reflect in your balance, this might be due to a synchronization delay. Rest assured, the amount should reflect soon. If it doesn't, contact us with your payment reference number.",
    "Game lagging": "Game lagging can occur due to a poor internet connection or server overload. Please ensure a stable connection and try again. If the issue persists, let us know your game version and device details.",
    "Unable to connect to server": "This could be a temporary server outage. Check your internet connection and restart the app. If the issue persists, share the error code or time of occurrence.",
    "How to play the game?": "Our games come with an in-game tutorial. You can access it from the main menu under 'Help' or 'How to Play'. Would you like detailed written instructions?",
    "How to unlock achievements?": "Achievements can be unlocked by completing specific tasks in the game. Check the 'Achievements' section in your profile for a list of tasks. Let us know if you'd like guidance on a specific achievement.",
  };

  const sendMessage = () => {
    if (messageText.trim() === "") return;

    const newMessage = {
      id: `${Date.now()}`,
      text: messageText,
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessageText("");

    if (messageText.toLowerCase() === "hi" || messageText.toLowerCase() === "hello") {
      setTimeout(() => {
        setOptions(initialOptions);
        addBotMessage("What can we help you with? Please select one of the options below.");
      }, 1000);
    } else if (subOptions[messageText]) {
      setTimeout(() => {
        setOptions(subOptions[messageText]);
        addBotMessage(`Thanks for letting us know. Here are some common issues related to "${messageText}":`);
      }, 1000);
    } else if (detailedReplies[messageText]) {
      setTimeout(() => {
        setOptions([]);
        addBotMessage(detailedReplies[messageText]);
      }, 1000);
    } else {
      setTimeout(() => {
        setOptions([]);
        addBotMessage("Thanks for your message! We'll get back to you soon.");
      }, 1000);
    }
  };

  const addBotMessage = (text) => {
    const botReply = {
      id: `${Date.now()}_bot`,
      text,
      sender: "bot",
    };
    setMessages((prevMessages) => [...prevMessages, botReply]);
  };

  const selectOption = (optionText) => {
    const newMessage = {
      id: `${Date.now()}`,
      text: optionText,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setOptions([]);
    setTimeout(() => {
      if (subOptions[optionText]) {
        setOptions(subOptions[optionText]);
        addBotMessage(`Here are the details for "${optionText}":`);
      } else if (detailedReplies[optionText]) {
        addBotMessage(detailedReplies[optionText]);
      } else {
        addBotMessage(`Thank you for selecting "${optionText}". We will assist you shortly.`);
      }
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

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={styles.optionButton}
      onPress={() => selectOption(item.text)}
    >
      <Text style={styles.optionText}>{item.text}</Text>
    </TouchableOpacity>
  );

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

      {options.length > 0 && (
        <FlatList
          data={options}
          keyExtractor={(item) => item.id}
          renderItem={renderOption}
          style={styles.optionsList}
          contentContainerStyle={styles.optionsListContent}
        />
      )}

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
    backgroundColor: "#006eb0",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chat;
