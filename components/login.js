import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {ToggleAuthViewContext} from '../contexts/auth';
import firebase from '../firebase';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
    }
    
    onPressLogin = () =>{
        console.log('pressed login! verify thru firebase => db call => user profile')
        const {email, password} = this.state;

        // sign in & authenticate via firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res =>{
            console.log('login response: ', res);
        })
        .catch(e =>{
            this.setState({error: e.message+'.'});
        })
    }

    render() {

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
            
                {/* login form */}
                <View style={styles.formContainer}>
                    <Text style={styles.greeting}>Welcome back</Text>

                    <TextInput
                        placeholder='email'
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        style={styles.input}
                        returnKeyType='next'
                        onSubmitEditing={ () => this.pwInput.focus() }
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        />
                    <TextInput
                        placeholder='password'
                        secureTextEntry
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        style={styles.input}
                        returnKeyType='go'
                        ref={input => this.pwInput = input}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        />

                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={this.onPressLogin}
                    >
                        <Text style={styles.buttonText}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* signup option */}
                <View style={styles.signUpContainer}>
                    <Text style={styles.text}>New?</Text>

                    <ToggleAuthViewContext.Consumer>
                        {
                            toggle =>{
                                return (
                                    <TouchableOpacity 
                                        style={styles.buttonContainer}
                                        onPress={() => toggle()}
                                    >
                                        <Text style={styles.buttonText}>
                                            SIGN UP
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }
                        }
                    </ToggleAuthViewContext.Consumer>

                </View>

            </KeyboardAvoidingView>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center'
    },
    greeting: {
        color: '#3582DB',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 15
    },
    formContainer: {
        padding: 20
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    buttonContainer: {
        backgroundColor: '#3582DB',
        paddingVertical: 15,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
    },
    signUpContainer: {
        padding: 20,
        borderRadius: 20
    },
    text: {
        textAlign: 'center',
        paddingVertical: 15,
    }
});