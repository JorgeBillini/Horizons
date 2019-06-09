import React from 'react';
import Details from '../screens/Details';
import EventList from '../screens/eventList';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const EventStack = createStackNavigator({
    List: {
        screen: EventList,
        path:'event/'
    },
    Details :{
        screen: Details,
    },
})
const EventContainer = createAppContainer(EventStack);
export default EventContainer;