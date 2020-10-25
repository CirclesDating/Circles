import { FontAwesome5, FontAwesome, Feather, MaterialCommunityIcons, SimpleLineIcons, Entypo} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from '../Screens/MainTabNavigatorScreens/SettingsScreen';
import SwipeScreen from '../Screens/MainTabNavigatorScreens/SwipeScreen';
import ConversationsScreen from '../Screens/MainTabNavigatorScreens/ConversationsScreen';


class BottomTabNavigator extends Component{
  render(){
    const BottomTab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Swipe"
          tabBarOptions={{ activeTintColor: "lightgreen" }}>
          <BottomTab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color }) => <Feather name="settings" color={color} size={25}/>,
            }}
          />
          <BottomTab.Screen
            name="Swipe"
            component={SwipeScreen}
            options={{
              tabBarIcon: ({ color }) => <FontAwesome5 name="hand-pointer" color={color} size={25} />,
            }}
          />
          <BottomTab.Screen
            name="Conversations"
            component={ConversationsScreen}
            options={{
              tabBarIcon: ({ color }) => <SimpleLineIcons name="speech" color={color} size={25} />,
            }}
          />

        </BottomTab.Navigator>
        </NavigationContainer>
    );
        }
}
export default BottomTabNavigator