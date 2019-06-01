import React from 'react';
import {Text} from 'react-native';
import NavBar from '../components/navbar'

export default class UserProfile extends React.Component{
    static navigationOptions= {
        header:null
      }

    render(){
        let {navigate} = this.props.navigation;
        return (
            <>
        <Text>User</Text>
        </>
        )
    }
}