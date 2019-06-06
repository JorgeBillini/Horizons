import React from 'react';
import {Text, StyleSheet} from 'react-native';
import EventCard from '../components/eventCard';
import axios from 'axios'
import {InteractionManager,StatusBar} from 'react-native'
import { View } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

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
        InteractionManager.runAfterInteractions(async()=>{
            await this.getUserLatLong();
            await this.getPlaces();
        })
    }
    getPlaces = async () => {
		const {latitude, longitude} = this.state.userlatlong
		axios.get(`http://horizons-api.herokuapp.com/places/?lat=${latitude}&long=${longitude}`)
		.then(async data=>{
			const {msg} = data.data
			this.setState({places: msg},()=>{
                console.log( "after update")
            })
		})
    }
	getUserLatLong = async () => {
		navigator.geolocation.getCurrentPosition(async location=>{
				const {latitude, longitude} = location.coords
				this.setState({userlatlong: {latitude, longitude}},()=>{
                    console.log("state after getting user locations")
                })
			}
		
		)
    }
    componentDidUpdate = async () => {
        navigator.geolocation.getCurrentPosition( async location=>{
            if(this.state.userlatlong.latitude === location.coords.latitude ){
                return;
            }
            else{
                await this.getUserLatLong();
                await this.getPlaces()
            }

        })
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <>
            <ScrollView style={{marginTop:50}}>
            {
                this.state.places.map((e,i)=>{
                    return <EventCard  navigate={navigate} price={e.price} address={e.address_} name={e.business_name} categories={e.categories}image={e.img_url}key={i} id={e.id}/>
                })
            }
            </ScrollView>
            </>

        )
    }
}