import React, {Component} from 'react'
import { Link } from "react-router-native"
import { signin, signout } from '../../services/firebase/account'
import { TextInput } from 'react-native-gesture-handler'
import {Text, Keyboard, View, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native'
import Style from './StyleSheets/LoginScreen.js'


export default class LoginScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            email: 'dick@gmail.com',
            password: '123456',
            logoHolderStyle : {
                flex : 1
            }
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(text) {
        this.setState({
            ...this.state,
            email: text
        });
    }

    handleChangePass(text) {
        this.setState({
            ...this.state,
            password: text
        });
    }

    async handleSubmit() {
        this.setState({ ...this.state, error: '' });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({...this.state, error: error.message });
            await signout()
        }
    }
    render(){
        return(
            
            <KeyboardAvoidingView style={Style.loginScreen} behavior={"padding"}>
                <View style={Style.logoHolder}>
                    <Image source={require("./Resources/Images/circleLogo.png")} resizeMode= {"stretch"} style={Style.logo}/>
                </View>
                <View style={Style.loginForm}>
                    <TextInput style = {Style.textInputs} placeholder="email" selectionColor ="green" onChangeText={this.handleChangeEmail} value={this.state.email} autoCompleteType="username" ></TextInput>
                    <TextInput style = {Style.textInputs} placeholder="password" onChangeText={this.handleChangePass} value={this.state.password} autoCompleteType="password" secureTextEntry={true}></TextInput>
                    <TouchableOpacity style={Style.loginButton} title="Login" onPress={this.handleSubmit}>
                        <Text style={Style.loginText}>Login</Text>
                    </TouchableOpacity>
                    <Link to="/register"><Text>Need to register?</Text></Link>
                </View>
            </KeyboardAvoidingView>
        )
    }
}