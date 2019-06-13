import Map from '../screens/Map.js';
import eventList from '../screens/eventList';
import { Ionicons } from '@expo/vector-icons';
import UserProfile from '../screens/userProfile';
import EventContainer from './listViewScreens';
import MapContainer from './MaptoDetails';
import ProfileContainer from './profile';
import {createBottomTabNavigator,} from 'react-navigation';
import React from 'react';
// create navigation stack for main nav
export default  RootStack = createBottomTabNavigator({
    Home: {
      screen: MapContainer
    },
    List: {
      screen: EventContainer,
      path:'/event'
    },
    Profile: {
      screen: ProfileContainer,
      path: '/profile'
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-map`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
        } else if (routeName === 'Profile') {
          iconName = `ios-person`;
        } else if(routeName === 'List'){
            iconName=`ios-list`
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={34} color={'white'} />;
      },
    }),
    tabBarOptions: {
        activeBackgroundColor:'black',
        inactiveBackgroundColor:'black',
        activeTintColor: 'gray',
        inactiveTintColor: 'white',
        safeAreaInset:{
          bottom:'always'
        },
        style:{
          backgroundColor:'black'
        }
        
      },

})
