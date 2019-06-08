import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import axios from 'axios';

export default class Map extends React.Component {
	static navigationOptions = { header: null }

	constructor(props){
		super(props)
		this.state = {
			events: [],
			places: [],
			regionlatlong: {
				latitude: 40.7217,
				longitude: -74.0059, 
			},
			userlatlong: {
				latitude: 40.7217,
				longitude: -74.0059,
			},
		}
	}

	render() {
		return <>
			<MapView
					style = {{ flex: 1 }}
					initialRegion = {{
						latitude: this.state.regionlatlong.latitude,
						longitude: this.state.regionlatlong.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					provider = { MapView.PROVIDER_GOOGLE }
					customMapStyle = { generatedMapStyle }
					minZoomLevel = { 14.5 }
					maxZoomLevel = { 20 }
					showsUserLocation = { true }
					showsMyLocationButton = { true }
					onUserLocationChange = {() => {
						this.getUserLatLong()
					}}
			>
				{
				this.state.places.map((e, i) => {
					return <Marker
						key = { i }
						coordinate = {{ 
							latitude: e.coordinates.latitude,
							longitude: e.coordinates.longitude
						}}
						>
						<Callout
            onPress={()=>{
              this.props.navigation.navigate('Details',{data:e})}

            }>
							<View>
								<Text>{e.name}</Text>
							</View>
						</Callout>
            </Marker>})
        }
        {
          this.state.events.map((e,i)=>{
            return (
            	 <Marker
						key = { i }
						coordinate = {{ 
							latitude: e.lat,
							longitude: e.long
						}}
						>
						<Callout
            onPress={()=>{
              this.props.navigation.navigate('Details',{data:e})}

            }>
							<View>
								<Text>{e.name_}</Text>
							</View>
						</Callout>
						</Marker>)
          })
        }
			</MapView>
		</>
	}

	componentDidMount() {
		this.getUserLatLong()
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

}

const generatedMapStyle =
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
