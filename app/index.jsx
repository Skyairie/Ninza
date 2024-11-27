import React from 'react';
import { NavigationContainer,NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '@/components/SignupScreen';
import OTPScreen from '@/components/OTPScreen';
import Header from '@/components/header';
import Tabs from './(tabs)/_layout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="Home" component={Tabs} />

        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
