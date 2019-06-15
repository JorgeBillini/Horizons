import Map from '../screens/Map';
import Details from '../screens/Details';
import CreateEvent from '../screens/CreateEventForm'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MapStack = createStackNavigator({
    Map: {
        screen: Map,
        path:'map/'
    },
    Details :{
        screen: Details,
    },
})

const MapContainer = createAppContainer(MapStack);
export default MapContainer;