import React from 'react';
import axios from 'axios';
import EventInfo from '../components/eventInfo';
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
          this.setState({type:'event'})
      }
      render(){
          return (
          <>
          {
              this.state.type === 'event' ? <EventInfo/>:<></>
          }
          </>)
      }
} 

