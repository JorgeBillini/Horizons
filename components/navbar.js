import React from 'react';

import {StyleSheet,Button, Text, View} from 'react-native';


export default class NavBar extends React.Component{
    static navigationOptions= {
        header:null
      }
    render(){
        return(<>
        <Button title="map"
            onPress={()=> {this.props.navigation.navigate('Map')}}
        />
        <Button title="Profile"
            onPress={()=> {this.props.navigation.navigate('Profile')}}
        />
        <Button title="event list"
            onPress={()=> {this.props.navigation.navigate('eventList')}}
        />
        </>)
        
    }
}