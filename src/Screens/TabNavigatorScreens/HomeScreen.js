import Style from './StyleSheets/HomeScreen'
import React, {Component} from 'react'
import Image from 'react-native-scalable-image';
import {Text, View, TouchableHighlight} from "react-native";


class HomeScreen extends Component{
    componentDidMount(){
        //ssss
    }
    //this.props.stackNav.navigate('Login')
    render(){
        return(
            <View style={Style.background}>
                <View style={Style.logoHolder}>
                    <Image source={require("./Resources/Images/circleLogo.png")} style = {Style.logo}/>
                    <TouchableHighlight onPress={console.log("hi")}>
                        <Text>Logout</Text>
                    </TouchableHighlight>
                </View>
            </View>
            )
        }
}

export default HomeScreen