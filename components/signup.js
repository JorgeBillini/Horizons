import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {ToggleAuthViewContext} from '../contexts/auth';

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        interests: [],
    }

    onPressSignUp = () =>{
        console.log('pressed sign up! => firebase => db => profile')
        // signup with firebase
        // post user to db
        // go to user profile page
    }

    render() {
        console.log(this.state);

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
            
                {/* sign up form */}
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder='email'
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        style={styles.input}
                        returnKeyType='next'
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
                        placeholderTextColor='rgba(255,255,255,0.7)'
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
        backgroundColor: 'lightblue',
        justifyContent: 'center'
    },
    formContainer: {
        padding: 20
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#3582DB',
        paddingVertical: 15,
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