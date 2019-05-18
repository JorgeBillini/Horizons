import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo'
//import BackgroundGeolocation from "react-native-background-geolocation";

export default class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			latlong: {
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
    		return <>
			<MapView
				style={{ flex: 1 }}
				provider={ MapView.PROVIDER_GOOGLE }
				customMapStyle= { generatedMapStyle }
				minZoomLevel = { 14.5 }
				maxZoomLevel = { 20 }
				region={{
				latitude: this.state.latlong.latitude,
				longitude: this.state.latlong.longitude,
				latitudeDelta: 0.0922,
          			longitudeDelta: 0.0421,
				}}
			>
			<MapView.Marker
				coordinate={{latitude: this.state.latlong.latitude,
					longitude: this.state.latlong.longitude,}}
				title={"YOU"}
				description={"HERE"}	
			/>
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
			<View 
				style={styles.button}
			>
				<Button
					color='orange'
					onPress={this.getLatLong}
					title="Locate Me"
					style={styles.button}
				/>
			</View>
    		</>
  	}
	
	componentDidMount(){
		this.getLatLong()
	}

	getLatLong = () => {
		navigator.geolocation.getCurrentPosition(location=>{
				const {latitude, longitude} = location.coords
				this.setState({latlong: {latitude, longitude}})
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
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
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
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
