import Style from './StyleSheets/SettingsScreen'
import React, {Component} from 'react'
import {Text, View, TouchableOpacity} from "react-native";
import { signout } from '../../services/firebase/account'



class SettingsScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={Style.background}>
                <View style={Style.logoHolder}>
                    <TouchableOpacity style={Style.logoutButton} title="Logout" onPress={signout}>
                        <Text>
                            Signout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
    }
}

export default SettingsScreen