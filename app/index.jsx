import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./(tabs)/_layout";
import { NavigationIndependentTree } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="home"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default App;
