import React from 'react';
import NavBar from './components/navbar'
import Map from './screens/Map';
import EventList from './screens/eventList';
import UserProfile from './screens/userProfile';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// const RootStack = createStackNavigator({
//     Home: {
//       screen: NavBar
//     },
//     Profile: {
//       screen:UserProfile
// 	},
// 	eventList: {
// 		screen:EventList
// 	},
// 	Map:{
// 		screen:Map
// 	}
//   });

// const App = createAppContainer(RootStack);

const App = () => {
	return(<EventList />)
}

export default App
