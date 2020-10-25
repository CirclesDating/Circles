import React, {Component} from 'react'
import { Link } from "react-router-native"
import { signup, signout } from '../../services/firebase/account'
import { TextInput } from 'react-native-gesture-handler'
import {Text, View, TouchableOpacity} from 'react-native'

import Style from './StyleSheets/RegisterScreen.js'

export default class RegisterScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            email: '',
            password: '',
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
            await signup(this.state.email, this.state.password);
        } catch (error) {
            this.setState({...this.state, error: error.message });
            await signout()
        }
    }
    render(){
        return(
            <View style={Style.regiserPage}>
                 <View style={Style.registerForm}>
                    <TextInput style = {Style.textInputs} placeholder="email" onChangeText={this.handleChangeEmail} value={this.state.email} autoCompleteType="username"></TextInput>
                    <TextInput style = {Style.textInputs} placeholder="password" onChangeText={this.handleChangePass} value={this.state.password} autoCompleteType="password" secureTextEntry={true}></TextInput>
                    <TouchableOpacity Style={Style.registerButton} title="Register" onPress={this.handleSubmit}>
                        <Text style={Style.registerText}>Sign up</Text>
                    </TouchableOpacity>
                    <Link to="/"><Text>Already have an account?</Text></Link>
                </View>
            </View>
        )
    }
}