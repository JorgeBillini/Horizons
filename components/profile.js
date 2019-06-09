import React, {Component} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import {Text} from 'react-native-elements';
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
                                <Text h4 style={styles.username}> {user.username} </Text>
                                <Text style={styles.email}> {user.email} </Text>
                            </View>
                            
                            {/* <View>
                                <Text>badges...</Text>
                            </View>

                            <View>
                                <Text>xp pts progress bar: {user.xp}</Text>
                            </View>

                            <View>
                                <Text>Interests</Text>
                            </View> */}

                            <View style={styles.currEventsContainer}>
                                <Text h4 style={styles.title}>Events Created For Today</Text>

                            </View>

                            <View style={styles.pastEventsContainer}>
                                <Text h4 style={styles.title}>Past Created Events</Text>

                            </View>


                            {/* logout button */}
                            <TouchableOpacity 
                                style={styles.logoutBtn}
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
        marginTop: 10,
        color: 'green',
        textAlign: 'center'
    },
    email: {
        textAlign: 'center',
    },
    logoutBtn: {
        backgroundColor: 'grey',
        paddingVertical: 15,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15
    },
    logoutText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16
    },
    currEventsContainer: {
        marginTop: 15,
    },
    title: {
        textAlign: 'center',
        color: '#3582DB',
    },
    pastEventsContainer: {
        marginTop: 15,
    }
});