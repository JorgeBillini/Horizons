import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo'

export default class Map extends React.Component {
	static navigationOptions= {
    header:null
  }
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
			markers: [
				{
					latitude: 40.7127,
					longitude: -74.0059,
				},
				{
					latitude: 40.7127,
					longitude: -74.0059,
				},
				{
					latitude: 40.7127,
					longitude: -74.0059,
				},
				{
					latitude: 40.7127,
					longitude: -74.0059,
				},
				{
					latitude: 40.7127,
					longitude: -74.0059,
				},
			]
		}
  }
    	render() {
        let {navigate} = this.props.navigation;
    		return <>
			<MapView
				style={{ flex: 1 }}
				provider={ MapView.PROVIDER_GOOGLE }
				customMapStyle= { generatedMapStyle }
				minZoomLevel = { 14.5 }
				maxZoomLevel = { 20 }
				region={{
				latitude: this.state.regionlatlong.latitude,
				longitude: this.state.regionlatlong.longitude,
				latitudeDelta: 0.0922,
          			longitudeDelta: 0.0421,
				}}
				showsUserLocation = {true}
			>
			{
				this.state.markers.map((e, i)=>{
					return <MapView.Marker
						key={i}
						coordinate={{latitude: e.latitude,
							longitude: (e.longitude - Math.random()),}}
						title={"EVENT"}
						description={`${e.latitude}, ${e.longitude}`}
					/>
				})
			}
			</MapView>
    		</>
  	}
	
	componentDidMount(){
		this.getRegionLatLong()
		this.getUserLatLong()
	}

	getUserLatLong = () => {
		navigator.geolocation.getCurrentPosition(location=>{
				const {latitude, longitude} = location.coords
				this.setState({userlatlong: {latitude, longitude}})
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

const generatedMapStyle = [
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
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
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
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
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
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
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
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
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
