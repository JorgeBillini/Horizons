import React from 'react';
import {Text} from 'react-native';
import Login from '../components/login';

export default class UserProfile extends React.Component{
    static navigationOptions= {
        header:null
    }

    state = {
        isLoggedIn: null,
    }
    render(){
        const {isLoggedIn} = this.state;
        if (isLoggedIn){
            return (<Text>User</Text>)
        } else {
            return (
                <Login />
            );
        }
    }
}