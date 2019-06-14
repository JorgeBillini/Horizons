import React from 'react';
import {Header,Divider} from 'react-native-elements';
import {Button} from 'native-base';
import {View,ScrollView,Image,Text} from 'react-native';
import StarRating from 'react-native-star-rating';
import getDirections from 'react-native-google-maps-directions';

import {Dimensions} from 'react-native';

export default props =>{
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    return(
    <>
        <View style={{backgroundColor:'white',height:height,flex:1}}>
        <Header
            centerComponent={{ text: "", style:{color:'black' ,fontSize:25} }}
            backgroundColor={'white'}
            />
            <View style={{backgroundColor:'white'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
		{
		props.data.image_url === '' ?
          <Image source={require('./../assets/question.png')}
            style={{width:width, height:height/3}} />
		:
          <Image source={{uri: props.data.image_url || props.data.logo}}
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
                <Text style={{textAlign:'left',fontSize:25,color:'black',padding:8}}>{props.data.categories ? props.data.categories[0].title :"" }</Text>

            </View>
            <View style={{padding:10,flex:1}}>
            {
                props.data.rating ? <StarRating disabled={true} maxStars={5} halfStarEnabled={true} rating={props.data.rating} fullStarColor="black" /> : <Text style={{color:'white'}}>{props.data.description}</Text>

            }

                {/* <Text >
                  {props.data.location.display_address[0]}
                </Text>
                <Text >
                  {props.data.location.display_address[1]}
                </Text> */}
            </View>
            <Button 
            dark block onPress={()=>{
                const data = {
                    destination:{
                        latitude: props.data.coordinates ? props.data.coordinates.latitude : props.data.lat,
                        longitude: props.data.coordinates ? props.data.coordinates.longitude : props.data.long
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
           
                </ScrollView>

            </View>

        </View>
            
          
    </>)
        
            
}
