import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
export default class eventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{}
        }
    }

    render(){
        return (
        <>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput placeholder='some bullshit' style={styles.input} />
                <TextInput placeholder='some bullshit' style={styles.input} />
                <TextInput placeholder='some bullshit' style={styles.input} />
                <TextInput placeholder='some bullshit' style={styles.input} />
                <TextInput placeholder='some bullshit' style={styles.input} />

                </View>
               

            </KeyboardAvoidingView>
        </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 20
    },
    formContainer:{
        padding:40
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderBottomWidth: 2,
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
})