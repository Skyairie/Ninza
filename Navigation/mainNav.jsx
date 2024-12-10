import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '@/components/OnBoarding/SignupScreen';
import OTPScreen from '@/components/OnBoarding/OTPScreen';
import Tabs from '@/app/(tabs)/_layout';
import AddCash from '@/components/Wallet/addCash';
import PaymentInterface from '@/components/Wallet/payment';
import ProfilePage from '@/components/Profile/profile';
import GamingWalletScreen from '@/app/(tabs)/wallet';
import ReferEarn from '@/app/(tabs)/referEarn';
import WithdrawalPage from '@/components/Wallet/WithdrawalPage';
import Transaction from '@/components/Profile/transaction';
import GameHistory from '@/components/Profile/gameHistory';
import BankSelection from '@/components/Wallet/bank';
import ManualBattle from '@/components/NinzaMania/ManualBattle';
import RoomTournament from '@/components/NinzaMania/RoomTournament';

const Stack = createStackNavigator();

const MainNavigator = () => {
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
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="wallet" component={GamingWalletScreen} />
      <Stack.Screen name="share" component={ReferEarn} />
      <Stack.Screen name="WithdrawalPage" component={WithdrawalPage} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="GameHistory" component={GameHistory} />
      <Stack.Screen name="Bank" component={BankSelection} />
      <Stack.Screen name="ManualBattle" component={ManualBattle} />
      <Stack.Screen name="RoomTournament" component={RoomTournament} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
