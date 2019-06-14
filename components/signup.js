import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {ToggleAuthViewContext} from '../contexts/auth';
import firebase from '../firebase';
import Axios from 'axios';

export default class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        interests: [],
        error: '',
    }

    onPressSignUp = () =>{
        console.log('pressed sign up! => firebase => db => profile')
        const {username, email, password} = this.state;

        // sign up with firebase
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res =>{
            console.log('created user in firebase...', res);
            if(res.user){
                const user = {username, email}

        // post user to db
                return Axios.post(`http://horizons-api.herokuapp.com/users/`, user);
            } 
        })
        .then(res =>{
            // console.log('user posted to db...', res);
        })
        .catch(e => {
            console.log('user sign up error...', e);
            this.setState({error: e.message+'.'});
        });
        
        
        // go to user profile page via firebase auth on userProfile.js
    }

    render() {

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
            
                {/* sign up form */}
                <View style={styles.formContainer}>
                    <Text style={styles.greeting}> Ready for your new adventure? </Text>

                    <TextInput
                        placeholder='username'
                        placeholderTextColor='grey'
                        style={styles.input}
                        returnKeyType='next'
                        onSubmitEditing={ () => this.email.focus() }
                        keyboardType='default'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        />

                    <TextInput
                        placeholder='email'
                        placeholderTextColor='grey'
                        style={styles.input}
                        returnKeyType='next'
                        ref={input => this.email = input}
                        onSubmitEditing={ () => this.pwInput.focus() }
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        />

                    <TextInput
                        placeholder='password'
                        secureTextEntry
                        placeholderTextColor='grey'
                        style={styles.input}
                        returnKeyType='go'
                        ref={input => this.pwInput = input}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        />

                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={this.onPressSignUp}
                    >
                        <Text style={styles.buttonText}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>

                    {/* login option */}
                    <View style={styles.loginContainer}>
                        <Text style={styles.text}>Already have an account?</Text>

                        <ToggleAuthViewContext.Consumer>
                            {
                                toggle =>{
                                    return (
                                        <TouchableOpacity 
                                            style={styles.buttonContainer}
                                            onPress={() => toggle()}
                                        >
                                            <Text style={styles.buttonText}>
                                                LOGIN
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }
                            }
                        </ToggleAuthViewContext.Consumer>

                    </View>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20
    },
    greeting: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 15
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
        height: 0,
        width: 0,
        },
        elevation: 3,
    },
    buttonContainer: {
        backgroundColor: 'black',
        paddingVertical: 15,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
    },
    loginContainer: {
        padding: 0,
        marginTop: 25,
    },
    text: {
        textAlign: 'center',
        paddingVertical: 15,
    }
});