import React from 'react';
import axios from 'axios';
import {Image,View, ScrollView, StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
export default class EventDetails extends React.Component {
    static navigationOptions= {
        header:null
      }
      constructor(props){
          super(props)
          state={
            id:null,
            description_:'',
            starts:'',
            ends:"",
            price:'',
            lat:0,
            long:0,
            logo:"",
            url_:"",
            venue:{},
          }
      }
    //   async componentDidMount(){
    //     //   let url =` https://www.eventbriteapi.com/v3/events/${this.state.eventid}/`;
    //     //   const {data} = await axios.get(url);
    //     //   this.setState({data:data});
    //   }
      render(){
          return (<>
          <Text style={styles.titleText}>Event Details</Text>
          <View style={styles.image}>
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            style={{width:500, height: 400}} />
            </View>
            <ScrollView>
            <View>
                <Text style={{textAlign:'left',fontSize:30,color:'black'}}>Name</Text>
            </View>
            <View>
                <Text style={{textAlign:'left',fontSize:25,color:'black'}}>Free</Text>
            </View>
            <View style={{padding:10}}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
            <Button title="Go Here"></Button>
           
                </ScrollView>
            
          </>)
      }
} 

const styles = StyleSheet.create({
    container:{
       marginTop: 100,
       alignItems:'center'
    },
    title:{
        flex:12,
        flexDirection:'row',
        textAlign:'center',
        fontSize:30,
        backgroundColor:'#3BAA6B',
        
    },
    titleText:{
        flex:12,
        flexDirection:'column',
        flexWrap:'wrap',
        textAlign:'center',
    },
    image:{
        alignItems:'center'
    }
})