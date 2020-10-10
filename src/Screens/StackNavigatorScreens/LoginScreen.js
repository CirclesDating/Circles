import React from 'react';
import Style from './StyleSheets/LoginScreen'
import { StyleSheet, Text, View, TouchableHighlight,TextInput } from "react-native";

export default function Loginscreen({ navigation }){
    const [password, passwordChange] = React.useState('Username');
    const [username, usernameChange] = React.useState('Password');

    function login(){
        console.log(username + password)
        navigation.navigate('TabNav')
    } 
    function makeAccount(){
    }
   return(
   <View style={Style.background}>
        <View style={Style.mainContent}>
            <View style={Style.headerArea}>
                <View style={Style.header}>
                    <Text>Login</Text>
                </View>
            </View>
            <View style={Style.loginArea}>
                <View style={{flex:3}}>

                </View>
                <View style={Style.equalRankElementHolder}>
                    <Text>Username</Text>
                    <TextInput
                        style={Style.textInput}
                        onChangeText={text => usernameChange(text)}
                        value={username}
                    />
                </View>
                
                <View style={Style.equalRankElementHolder}>
                    <Text>Password</Text>
                    <TextInput
                        style={Style.textInput}
                        onChangeText={text => passwordChange(text)}
                        value={password}
                    />
                </View>
                <View style = {Style.equalRankElementHolder}>
                    <TouchableHighlight onPress={login} style={Style.LoginButton}>
                            <Text>Login</Text>
                    </TouchableHighlight>
                </View>
                <View style = {Style.equalRankElementHolder}>
                    <TouchableHighlight onPress={makeAccount} style={Style.MakeAccountButton}>
                            <Text>makeAccount</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    </View>
   )
}