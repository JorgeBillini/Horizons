import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Icon} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
export default class eventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{},
            error: '',
        }
    }

    submitEvent = () =>{
        console.log('submit pressed!');
    }

    render(){
        const {error} = this.state;

        return (
            <ScrollView>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    {/* Title */}
                    <View>
                        <Text style={styles.title}>
                            Enter your event info below
                        </Text>
                    </View>

                    {/* Submission error */}
                    {error ? 
                        <Text>{error}</Text> 
                        : 
                        <></>
                    }

                    {/* Input Form */}
                    <View style={styles.formContainer}>
                        <TextInput placeholder='event name' style={styles.input} />
                        <TextInput placeholder='event description' style={styles.input} />
                        <TextInput placeholder='venue name' style={styles.input} />
                        <TextInput placeholder='venue address' style={styles.input} />
                        <TextInput placeholder='start time' style={styles.input} />
                        <TextInput placeholder='end time' style={styles.input} />
                    </View>
                    
                    {/* Submit button */}
                    <TouchableOpacity 
                        style={{backgroundColor:'black',marginHorizontal:50,borderRadius:20,padding:15}}
                        onPress={() => this.submitEvent()}
                    >
                        <Text style={{color:'white',fontWeight:'700',fontSize:16,textAlign:'center'}}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 25
    },
    title: {
        textAlign:'center',
        fontWeight:'700',
        fontSize:20,
        color:'white',
        backgroundColor:'black',
        paddingVertical:10,
    },
    formContainer:{
        borderWidth: 1,
        borderColor: 'grey',
        padding:30,
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 2,
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
})