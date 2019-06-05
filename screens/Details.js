import React from 'react';
import axios from 'axios';
import EventInfo from '../components/eventInfo';
import {createStackNavigator} from 'react-navigation';
export default class Details extends React.Component {
    static navigationOptions= {
        header:null
      }
      constructor(props){
          super(props)
          state={
            id:null,
            data:{},
            type:'event'
          }
      }
      componentWillMount(){
        const id = this.props.navigation.getParam('id',1)
          this.setState({type:'event',id:id})
      }
      render(){
          return (
          <>
          {
              this.state.type === 'event' ? <EventInfo id={this.state.id}/>:<></>
          }
          </>)
      }
} 

