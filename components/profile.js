import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../contexts/auth';

export default class Profile extends Component{
    render (){
        return <AuthContext.Consumer>
            {
                user =>{
                    return <View>
                        <Text> User's Profile </Text>
                        <Text> {user.id} </Text>
                        <Text> {user.username} </Text>
                        <Text> {user.email} </Text>
                    </View>
                }
            }
        </AuthContext.Consumer>
    }
}