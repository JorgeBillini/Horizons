import React from 'react';
import {Text, StyleSheet} from 'react-native';
import EventCard from '../components/eventCard';
import requests from '../scripts/requests';
import axios from 'axios'
import {InteractionManager} from 'react-native'
import { View } from 'native-base';

export default class EventList extends React.Component {
    static navigationOptions= {header:null}
    
        state = {
			regionlatlong: {
				latitude: 40.7127,
				longitude: -74.0059,
			},
			userlatlong: {
				latitude: 40.7127,
				longitude: -74.0059,
			},
			events: [.00725, 2],
			places: [{
					business_name: '',
					lat: 40.7127,
					long: -74.0059
				}]
		}
    

    componentDidMount = async () => {
        InteractionManager.runAfterInteractions(()=>{
            this.getUserLatLong();
            this.getPlaces();
        })
    }
    getPlaces = () => {
		const {latitude, longitude} = this.state.userlatlong
		axios.get(`http://horizons-api.herokuapp.com/places/?lat=${latitude}&long=${longitude}`)
		.then(data=>{
			const {msg} = data.data
			this.setState({places: msg},()=>{
                console.log(this.state , "after update")
            })
		})
	}

	getUserLatLong = () => {
		navigator.geolocation.getCurrentPosition(location=>{
				const {latitude, longitude} = location.coords
				this.setState({userlatlong: {latitude, longitude}})
			}
		
		)
	}	
    render(){
        return (
            <>
            {
                this.state.places.map((e,i)=>{
                    return <EventCard  key={i}/>
                })
            }
            </>

        )
    }
}