import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/StackNavigatorScreens/LoginScreen'
import MainTabNavigator from "./MainTabNavigator"

const Stack = createStackNavigator();
export default function MainStackNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TabNav" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }