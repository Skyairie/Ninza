import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./(tabs)/_layout"; // Main Tabs layout for the home screen
import ProfilePage from "@/components/profile"; // Profile screen component

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      {/* Home Screen with Tabs */}
      <Stack.Screen
        name="home"
        component={Tabs}
        options={{ headerShown: false }} // Hide header for the Tabs layout
      />
      {/* Profile Page */}
      <Stack.Screen name="Profile" component={ProfilePage} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default App;
