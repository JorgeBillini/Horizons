import React from 'react';
import {Text, StyleSheet} from 'react-native';
import EventCard from '../components/eventCard';
import requests from '../scripts/requests';

export default class EventList extends React.Component {
    
    state = {

    }

    componentDidMount(){
        console.log('hi')
    }

    static navigationOptions= {
        header:null
    }
    render(){
        return (<EventCard />)
    }
}