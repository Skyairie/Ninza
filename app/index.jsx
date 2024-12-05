import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '@/components/SignupScreen';
import OTPScreen from '@/components/OTPScreen';
import AddCash from '@/components/addCash';
import PaymentInterface from '@/components/payment';
import ProfilePage from '@/components/profile';
import GamingWalletScreen from './(tabs)/wallet';
import ReferEarn from '@/components/referEarn';
import WithdrawalPage from '@/components/WithdrawalPage';
import Tabs from './(tabs)/_layout';
import BankSelection from '@/components/banks';

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
      <Stack.Screen name="addCash" component={AddCash} />
      <Stack.Screen name="payment" component={PaymentInterface} />
      <Stack.Screen name="profile" component={ProfilePage} />
      <Stack.Screen name="wallet" component={GamingWalletScreen} />
      <Stack.Screen name="share" component={ReferEarn} />
      <Stack.Screen name="withdraw" component={WithdrawalPage} />
      <Stack.Screen name="banks" component={BankSelection} />

      {/* Add other screens here */}
    </Stack.Navigator>
  );
}
