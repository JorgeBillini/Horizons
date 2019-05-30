import React from 'react';
import {Text, StyleSheet} from 'react-native';
import EventCard from '../components/eventCard';

export default class EventList extends React.Component {
    static navigationOptions= {
        header:null
      }
    render(){
        return (<EventCard />)
    }
}