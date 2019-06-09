import React from 'react';
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
          }
      }
      componentWillMount(){
        const data = this.props.navigation.getParam('data','loading')
          this.setState({type:'event',data:data})
      }
      render(){
          return (
          <>
          {
              this.state.type === 'event' ? <EventInfo data={this.state.data}/>:<></>
          }
          </>)
      }
} 

