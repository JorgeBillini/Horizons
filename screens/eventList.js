import React from 'react';
import EventCard from '../components/eventCard';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
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
                }],
                loading:true    
		}
        componentDidMount(){
            this.getUserLatLong();
           
        }
        componentDidUpdate(){
            if(this.state.places[0].business_name !=="" && this.state.loading !== false){
                this.setState({loading:false})
            }
        }

    	getEvents = (latitude, longitude) => {
            const 	min_lat = latitude - 0.00725
                min_long = longitude - 0.00909
                max_lat = latitude + 0.00725
                max_long = longitude + 0.00909
                url = `http://horizons-api.herokuapp.com/events`
                term = `?min_lat=${min_lat}&max_lat=${max_lat}&min_long=${min_long}&max_long=${max_long}`
            axios.get(`${url}${term}`)
            .then(res=>this.setState({events:res.data.data}))
            .catch(_ => _)
        }
    
        getPlaces = (latitude, longitude, offset = 0) => {
            const 	url = `https://api.yelp.com/v3/businesses/search`
                term = `?latitude=${latitude}&longitude=${longitude}&limit=50&offset=${offset}&radius=600`
                API_Key = `OO3Saz0hvxk-v0QFSvDyL79ElNRxg_BPX0A46BOqWVtdjYN_xRPa4vpvFuPwr6T-wZpzUNUM3uaL_FticZyIhVkKMwm3yFfDY_m7MQ-MxDI4lLQOeTDcaJjPwoXhXHYx`
            axios.get(`${url}${term}`,
                {headers: {Authorization: `Bearer ${API_Key}`}}
            )
            .then(res => {
                const { businesses } = res.data
                this.setState({ places: businesses })
            })
            .catch(_ => _)
        }
    
        getUserLatLong = () => {
            navigator.geolocation.getCurrentPosition(location=>{
                const 	{latitude, longitude} = location.coords
                    lat = this.state.userlatlong.latitude
                    long = this.state.userlatlong.longitude
                if(lat <= (latitude - (.00725/2)) || lat >= (latitude + (.00725/2) ) || long <= (longitude - (.00909/2)) || long >= (longitude + (.00909/2))) {
                    this.setState({userlatlong: {latitude, longitude}})
                    this.getPlaces(latitude, longitude)
                    this.getEvents(latitude, longitude)
                }
            })
        }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <>
            <ScrollView style={{marginTop:50}}>
            {
                this.state.loading === true ? <Button loading type="clear"  size={42} />:
                this.state.places.map((e,i)=>{
                    return <EventCard navigate={navigate} data={e} key={i}/>
                })
            }
            </ScrollView>
            </>

        )
    }
}
