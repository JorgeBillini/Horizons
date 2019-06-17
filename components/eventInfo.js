import React from 'react';
import {Header,Divider} from 'react-native-elements';
import {Button} from 'native-base';
import {View,ScrollView,Image,Text} from 'react-native';
import StarRating from 'react-native-star-rating';
import getDirections from 'react-native-google-maps-directions';

import {Dimensions} from 'react-native';

export default props =>{
    console.log(props);
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const image_url = props.data.image_url || props.data.logo || ""
    const Ratings  = () => {
        return(
            <>
             <View style={{padding:10,flex:1}}>
            {
                props.data.rating ? <StarRating disabled={true} maxStars={5} halfStarEnabled={true} rating={props.data.rating} fullStarColor="black" /> : <Text style={{color:'white'}}>{props.data.description}</Text>

            }
            </View>
            </>
        )
    }
    let lat;
    let long;
    if(props.data.coordinates){
        lat = props.data.coordinates.latitude;
        long = props.data.coordinates.longitude;
    }
    else{
        lat = parseFloat(props.data.lat);
        long = parseFloat(props.data.long);
    }
    return(
    <>
        <View style={{backgroundColor:'white',height:height,flex:1}}>
        <Header
            centerComponent={{ text: "Details", style:{color:'white' ,fontSize:25,fontWeight:'700'} }}
            backgroundColor={'black'}
            />
            <View style={{backgroundColor:'white'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
		{
		image_url === '' ?
          <Image source={require('./../assets/question.png')}
            style={{width:width, height:height/3}} />
		:
          <Image source={{uri: image_url}}
            style={{width:width, height:height/3}} />
		}
            </View>
            <Divider style={{backgroundColor:'black'}}/>
            <ScrollView>
            <View>
                <Text style={{textAlign:'left',fontSize:30,color:'black', padding:8}}>{props.data.name || props.data.name_}</Text>
            </View>
            <View>
                <Text style={{textAlign:'left',fontSize:25,color:'black',padding:8}}>{props.data.price}</Text>
                <Text style={{textAlign:'left',fontSize:25,color:'black',padding:1}}>{props.data.categories ? props.data.categories[0].title :"" }</Text>
            </View>
           
            <Text style={{padding:8}}>
                {props.data.description_}
            </Text>
            <View style={{padding:20}}>
            {props.data.rating ? <Ratings /> : null}
            <Button 
            dark block 
            onPress={()=>{
                const data = {
                    destination:{
                        latitude: lat,
                        longitude: long
                    },
                    params:[{
                        key:'travelmode',
                        value:'walking'

                    },{
                        key:'dir_action',
                        value:'navigate'
                    }
                    ]
                }
                getDirections(data)}}><Text style={{color:'white'}}>Go Here</Text></Button>

            </View>
         
           
                </ScrollView>

            </View>

        </View>
            
          
    </>)
        
            
}
