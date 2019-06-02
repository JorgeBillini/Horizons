import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {ToggleAuthViewContext} from '../contexts/auth';
import firebase from '../firebase';

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
            console.log(res);
        })
        .catch(e => {
            this.setState({error: e.message+'.'});
        });
        
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
                        placeholder='username'
                        placeholderTextColor='rgba(255,255,255,0.7)'
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
                        placeholderTextColor='rgba(255,255,255,0.7)'
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
        justifyContent: 'center',
        paddingTop: 20
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