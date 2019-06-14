import userProfile from '../screens/userProfile';
import Details from '../screens/Details';
import EventForm from '../screens/CreateEventForm';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const ProfileStack = createStackNavigator({
    userProfile: {
        screen: userProfile,
        path:'profile/'
    },
    Details: {
        screen: Details,
    },
    EventForm: {
        screen: EventForm,
        navigationOptions: {
            header: null,
        },
    }
})

const ProfileContainer = createAppContainer(ProfileStack);
export default ProfileContainer;