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
    const pageTitle = props.data.rating ? 'Location Detail' : 'Event Detail';

    return(
    <ScrollView>
        <View style={{backgroundColor:'white',height:height,flex:1}}>
            <Header
                centerComponent={{ text: pageTitle, style:{color:'white' ,fontSize:25,fontWeight:'700'} }}
                backgroundColor={'black'}
                containerStyle={{
                    borderBottomWidth: 0,
                }}
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

                <ScrollView >
                    <View>
                        <Text style={{textAlign:'left',fontSize:30,color:'black', paddingRight:10,paddingLeft:10}}>{props.data.name || props.data.name_}</Text>
                    </View>
                    <View>
                        <Text style={{textAlign:'left',fontSize:25,color:'black',paddingRight:10,paddingLeft:10,marginTop:5}}>{props.data.price}</Text>
                        <Text style={{textAlign:'left',fontSize:25,color:'black',paddingRight:10,paddingLeft:10}}>{props.data.categories ? props.data.categories[0].title :"" }</Text>
                    </View>
                {   props.data.description_ ? 
                    <Text style={{height:height/8,paddingRight:15,paddingLeft:15}}>
                        {props.data.description_}
                    </Text> : null}

                    <View style={{paddingRight:20,paddingLeft:20}}>
                    {props.data.rating ? <Ratings /> : null}
                    <Button style={{bottomMargin: 20}}
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
            
          
    </ScrollView>)
        
            
}
