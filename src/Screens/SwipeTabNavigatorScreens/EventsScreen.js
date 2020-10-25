import React, {Component} from 'react'
import { Link } from "react-router-native"
import { signin, signout } from '../../services/firebase/account'
import { TextInput } from 'react-native-gesture-handler'
import {Text, Keyboard, View, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native'
import Style from './StyleSheets/EventsScreen.js'
import AnimatedLoader from "react-native-animated-loader";
// import fetchEvents 

function fetchEvents(){
    return ([
        {
            name : "Event 1",
            picture : "./Resources/Images/IMPORTANT.jpg"
        }
    ])
}
export default class EventScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            eventsQueue : [],

        }
    }
    componentDidMount(){
        this.setState({
            eventsQueue : fetchEvents()
        })
    }
    render(){
        return(
        this.state.eventsQueue.size ?
        
            <View style={{flex : 1}}>
                <AnimatedLoader></AnimatedLoader>
            </View>
        :
       
            <View style={{backgroundColor:"white"}}>
                
            </View>
        )
    }
}