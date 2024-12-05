import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '@/components/SignupScreen';
import OTPScreen from '@/components/OTPScreen';
import AddCash from '@/components/addCash';
import PaymentInterface from '@/components/payment';
import ProfilePage from '@/components/profile';
import GamingWalletScreen from './(tabs)/wallet';
import ReferEarn from '@/components/referEarn';
import WithdrollInterface from '@/components/withdroll';
import Tabs from './(tabs)/_layout';
import BankSelection from '@/components/banks';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="SignupScreen"
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
        options={{ title: 'progile' }}
      />
      <Stack.Screen
        name="wallet"
        component={GamingWalletScreen}
        options={{ title: 'progile' }}
      />
      <Stack.Screen
        name="share"
        component={ReferEarn}
        options={{ title: 'bbb' }}
      />
      <Stack.Screen
        name="withdroll"
        component={WithdrollInterface}
        options={{ title: 'bbb' }}
      />
      <Stack.Screen
        name="banks"
        component={BankSelection}
        options={{ title: 'bbb' }}
      />
    </Stack.Navigator>
  );
}
