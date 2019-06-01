import React from 'react';
import NavBar from './components/navbar'
import Map from './screens/Map';
import eventList from './screens/eventList';
import UserProfile from './screens/userProfile';
import {createStackNavigator, createAppContainer} from 'react-navigation';


const RootStack = createStackNavigator({
    Home: {
      screen: NavBar
    },
    Profile: {
      screen:UserProfile
    },
    eventList: {
      screen:eventList
    },
    Map:{
      screen:Map
    }
	
  });

const App = createAppContainer(RootStack);
export default App
