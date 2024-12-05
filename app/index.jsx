import React from 'react';
import { NavigationContainer,NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '@/components/SignupScreen';
import OTPScreen from '@/components/OTPScreen';
import Header from '@/components/header';
import Tabs from './(tabs)/_layout';
import AddCash from '@/components/addCash';
import PaymentInterface from '@/components/payment';
import ProfilePage from '@/components/profile';
import GamingWalletScreen from './(tabs)/wallet';
import ReferEarn from '@/components/referEarn';
import WithdrawalPage from '@/components/WithdrawalPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen
          name="addCash"
          component={AddCash}
          options={{ title: "Add Cash"}}
        />
        <Stack.Screen
          name="payment"
          component={PaymentInterface}
          options={{ title: "Add Cash"}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ title: "progile"}}
        />
        <Stack.Screen
          name="wallet"
          component={GamingWalletScreen}
          options={{ title: "progile"}}
        />
        <Stack.Screen
          name="share"
          component={ReferEarn}
          options={{ title: "progile"}}
        />
        <Stack.Screen
          name="WithdrawalPage"
          component={WithdrawalPage}
          options={{ title: "progile"}}
        />
      


        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
