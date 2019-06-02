import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {ToggleAuthViewContext} from '../contexts/auth';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    
    onPressLogin = () =>{
        console.log('pressed login! verify thru firebase => db call => user profile')
        // connect to firebase
        // get from db
        // show user profile
    }

    render() {
        console.log(this.state);

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
            
                {/* login form */}
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
    signUpContainer: {
        padding: 20
    },
    text: {
        textAlign: 'center',
        paddingVertical: 15,
    }
});