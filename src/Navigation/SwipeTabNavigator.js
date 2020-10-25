import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import EventsScreen from '../Screens/SwipeTabNavigatorScreens/EventsScreen.js';
import PeopleScreen from '../Screens/SwipeTabNavigatorScreens/PeopleScreen.js';

export default  class SwipeTabNavigator extends Component{
    constructor(props){
        super(props)
    }
  render(){
    const Tab = createMaterialTopTabNavigator();
    return (
    <Tab.Navigator
        initialRouteName="Events"
        swipeEnabled={false}
        showIcon={true}
        tabBarOptions={{ 
            activeTintColor: "green",
            tabStyle: {height: 70},
            labelStyle : {
                marginTop : 15
            },
            style: {
                backgroundColor : "powderblue"
            } 
            }}>
        <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
            tabBarIcon: ({ color }) => <Ionicons name="ios-people" size={24} color="black" />,
        }}
        />
        <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chili-mild" size={24} color="black" />,
        }}
        />

    </Tab.Navigator>
    );
        }
}