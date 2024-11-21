import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from "../app/{tabs}/_layout"
const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default HomeStack;