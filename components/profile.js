import React, {Component} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Text, TouchableOpacity, Image} from 'react-native';
import {AuthContext} from '../contexts/auth';
import firebase from '../firebase';
import genericUserPic from '../assets/user.png';

export default class Profile extends Component{
    render (){
        return <AuthContext.Consumer>
            {
                user =>{
                    const profilePic = user.pic ? user.pic : genericUserPic;
                    return (
                        <KeyboardAvoidingView>
                            
                            <View style={styles.profile}>
                                <Image source={profilePic} />
                                <Text> {user.username} </Text>
                            </View>
                            
                            <Text> {user.email} </Text>

                            {/* logout button */}
                            <TouchableOpacity 
                                style={styles.logoutContainer}
                                onPress={()=>{firebase.auth().signOut()}}
                            >
                                <Text style={styles.logoutText}>
                                    Log Out
                                </Text>
                            </TouchableOpacity>

                        </KeyboardAvoidingView>
                    );
                }
            }
        </AuthContext.Consumer>
    }
}

const styles = StyleSheet.create({
    profile: {
        borderColor: 'black',
        borderWidth: 1,
        
    },
    logoutContainer: {
        backgroundColor: 'grey',
        paddingVertical: 15,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10
    },
    logoutText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16
    }
});