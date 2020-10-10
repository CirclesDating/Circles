import { FontAwesome5, FontAwesome, Feather, MaterialCommunityIcons, SimpleLineIcons, Entypo} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from '../Screens/TabNavigatorScreens/HomeScreen';
import SettingsScreen from '../Screens/TabNavigatorScreens/SettingsScreen';
import SwipeScreen from '../Screens/TabNavigatorScreens/SwipeScreen';
import ConversationsScreen from '../Screens/TabNavigatorScreens/ConversationsScreen';


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({navigation}) {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: "lightgreen" }}>
      <BottomTab.Screen
        name="Home"
        component={() => <HomeScreen stackNav={navigation}/>}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={25}/>,
        }}
      />
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
  );
}