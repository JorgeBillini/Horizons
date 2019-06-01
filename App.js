import React from 'react';
import NavBar from './components/navbar'
import RootStack from './navigation/navigation'
import {createAppContainer} from 'react-navigation';
const App = createAppContainer(RootStack);
export default App
