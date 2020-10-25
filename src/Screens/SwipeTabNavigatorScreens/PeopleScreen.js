import React, {Component} from 'react'
import { Link } from "react-router-native"
import { signin, signout } from '../../services/firebase/account'
import { TextInput } from 'react-native-gesture-handler'
import {Text, StyleSheet, Keyboard, View, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native'
import Style from './StyleSheets/PeopleScreen.js'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, {Circle, Rect} from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient';
import PersonProfile from "./Components/PersonProfile"

const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    }
  }); 

function fetchEvents(){
    return ([
        {
            name : "Event 1",
            images : [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
                "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp"
            ]
        }
    ])
}
export default class PeopleScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            profiles : [],
            useless : true
        }
    }
    componentDidMount() {
        this.setState({
            profiles : fetchEvents()
        })
    }
    generateLoadingScreen() {
        const centerX = Math.random()*23 + 55
        const centerY = Math.random()*190 + 60
        const centerX2 = Math.random()*40 + 110
        const centerY2 = Math.random()*190 + 60
        const centerX3 = Math.random()*25 + 210
        const centerY3 = Math.random()*180 + 60
        return(
            <View backgroundColor="powderblue" style={{justifyContent:"center",alignItems:"center", flex : 1}}>
                <SvgAnimatedLinearGradient
                primaryColor="powderblue"
                secondaryColor="blue"
                duration = {3500}
                offset = {2}
                height={300}>
                     <Circle cx="150" cy="150" r="150"/>
                     <Circle cx={centerX} cy={centerY} r="30"/>
                     <Circle cx={centerX2} cy={centerY2} r="30"/>
                     <Circle cx={centerX3} cy={centerY3} r="30"/>
                </SvgAnimatedLinearGradient>
            </View>
            )
    }

    render(){
        return(
            this.state.profiles.length > 0 ?
                <View style={{backgroundColor:"purple", flex : 1}}>
                    <PersonProfile profileInfo={this.state.profiles[0]}></PersonProfile>
                </View>
                :
                this.generateLoadingScreen()
        )
    }
}

