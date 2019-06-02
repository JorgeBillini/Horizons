import Map from '../screens/Map';
import eventList from '../screens/eventList';
import { Ionicons } from '@expo/vector-icons';
import UserProfile from '../screens/userProfile';
import Details from '../screens/Details';
import {createBottomTabNavigator,} from 'react-navigation';
import React from 'react';
// create navigation stack for main nav
export default  RootStack = createBottomTabNavigator({
    Home: {
      screen: Map
    },
    List: {
      screen: eventList
    },
    Profile: {
      screen: UserProfile
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
      },

})