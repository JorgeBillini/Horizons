import React from 'react';
import {Text, StyleSheet} from 'react-native';


export default class eventList extends React.Component {
    static navigationOptions= {
        header:null
      }
    render(){
        let {navigate} = this.props.navigation;
        return (<>
        
        <Text>Hi guys, this is event list </Text>
        </>)
    }
}