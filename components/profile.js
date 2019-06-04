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
                        <KeyboardAvoidingView style={styles.container}>
                            
                            <View style={styles.profileContainer}>
                                <Image source={profilePic} style={styles.profileImg}/>
                                <Text style={styles.username}> {user.username} </Text>
                                <Text style={styles.email}> {user.email} </Text>
                            </View>
                            
                            

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
    container: {
        paddingHorizontal: 15
    },
    profileContainer: {
        marginTop: 25,
    },
    profileImg: {
        width: 125,
        height: 125,
        alignSelf: 'center',
    },
    username: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        marginTop: 10,
        color: 'green',
    },
    email: {
        textAlign: 'center',
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