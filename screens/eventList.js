import React from 'react';
import {Text, StyleSheet} from 'react-native';
import EventCard from '../components/eventCard';
import requests from '../scripts/requests';

export default class EventList extends React.Component {
    
    state = {
        values: null,
    }

    componentDidMount = async () => {
        requests.getEventsInRadius(41.2140224, -73.51878290000002, 0.0435)
    }

    static navigationOptions= {
        header:null
    }
    
    render(){
        return (<EventCard />)
    }
}