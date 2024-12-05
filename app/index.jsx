import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '@/components/SignupScreen';
import OTPScreen from '@/components/OTPScreen';
import Tabs from './(tabs)/_layout';
import AddCash from '@/components/addCash';
import PaymentInterface from '@/components/payment';
import ProfilePage from '@/components/profile';
import GamingWalletScreen from './(tabs)/wallet';
import ReferEarn from '@/components/referEarn';
import WithdrawalPage from '@/components/WithdrawalPage';
import Transaction from '@/components/transaction';
import GameHistory from '@/components/gameHistory';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen
        name="addCash"
        component={AddCash}
        options={{ title: 'Add Cash' }}
      />
      <Stack.Screen
        name="payment"
        component={PaymentInterface}
        options={{ title: 'Add Cash' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{ title: 'profile' }}
      />
      <Stack.Screen
        name="wallet"
        component={GamingWalletScreen}
        options={{ title: 'profile' }}
      />
      <Stack.Screen
        name="share"
        component={ReferEarn}
        options={{ title: 'profile' }}
      />
      <Stack.Screen
        name="WithdrawalPage"
        component={WithdrawalPage}
        options={{ title: 'profile' }}
      />
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{ title: 'Transaction' }}
      />
      <Stack.Screen
        name="GameHistory"
        component={GameHistory}
        options={{ title: 'GameHistory' }}
      />
    </Stack.Navigator>
  );
}
