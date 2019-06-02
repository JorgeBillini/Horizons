import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { MapView } from 'expo'
import axios from 'axios'

export default class Map extends React.Component {
	static navigationOptions= {header:null}

	constructor(props){
		super(props)
		this.state = {
			regionlatlong: {
				latitude: 40.7127,
				longitude: -74.0059,
			},
			userlatlong: {
				latitude: 40.7127,
				longitude: -74.0059,
			},
			events: [],
			places: [{
					business_name: '',
					lat: 40.7127,
					long: -74.0059
				}]
		}
  }
    	render() {
		console.log(this.state)
    		return <>
			<MapView
				style={{ flex: 1 }}
				provider={ MapView.PROVIDER_GOOGLE }
				customMapStyle= { generatedMapStyle }
				minZoomLevel = { 14.5 }
				maxZoomLevel = { 20 }
				initialRegion={{
				latitude: this.state.regionlatlong.latitude,
				longitude: this.state.regionlatlong.longitude,
				latitudeDelta: 0.0922,
          			longitudeDelta: 0.0421,
				}}
				showsUserLocation = {true}
				showsMyLocationButton = {true}
				onUserLocationChange = {() => {
					this.getUserLatLong()
				}}
			>
			{
				this.state.places.map((e, i)=>{
					return <MapView.Marker
						key={i}
						coordinate={{latitude: parseFloat(e.lat),
							longitude: parseFloat(e.long)}}
						title={e.business_name}
						description={``}
						image={require('../assets/forknife.png')}
					/>
				})
			}
			</MapView>
    		</>
  	}
	
	componentDidMount(){
		this.getUserLatLong()
	}

	getPlaces = (latitude, longitude) => {
		axios.get(`http://horizons-api.herokuapp.com/places/?lat=${latitude}&long=${longitude}`)
		.then(data=>{
			const {msg} = data.data
			this.setState({places: msg})
		})
	}

	getUserLatLong = () => {
		navigator.geolocation.getCurrentPosition(location=>{
				const {latitude, longitude} = location.coords
				const lat = this.state.userlatlong.latitude
				const long = this.state.userlatlong.longitude
				if(lat <= (latitude - (.00725/2)) || lat >= (latitude - (.00725/2)) || long <= (longitude - (.00725/2)) || long >= (longitude - (.00725/2))) {
					this.setState({userlatlong: {latitude, longitude}})
					this.getPlaces(latitude, longitude)
					this.getRegionLatLong()
				}
			}
		
		)
	}	

	getRegionLatLong = () => {
		navigator.geolocation.getCurrentPosition(location=>{
				const {latitude, longitude} = location.coords
				this.setState({regionlatlong: {latitude, longitude}})
			}
		)
	}
}

const styles = StyleSheet.create({
	button: {
    		flex: 1,
		position: 'absolute',
		bottom: 5,
		right: 2,
		backgroundColor: '#000'
  	},
});

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



