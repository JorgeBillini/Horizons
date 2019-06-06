import React from 'react';
import RootStack from './navigation/navigation';
import {StatusBar, SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
const Container = createAppContainer(RootStack);

export default App = () => {
    return (<>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Container style={{flex:1}}/>
    
    </>
        )

}
