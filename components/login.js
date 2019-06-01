import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View>
                    <Text style={styles.title}>Log In</Text>
                </View>

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
                        />
                    <TextInput
                        placeholder='password'
                        secureTextEntry
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        style={styles.input}
                        returnKeyType='go'
                        ref={input => this.pwInput = input}
                        />

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
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
    title: {
        textAlign: 'center',
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
        backgroundColor: '#2980B9',
        paddingVertical: 15,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700'
    }
});