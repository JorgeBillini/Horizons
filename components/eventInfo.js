import React from 'react';
import {Header,Divider} from 'react-native-elements';
import {Button} from 'native-base';
import {View,ScrollView,Image,Text} from 'react-native';
import {Dimensions} from 'react-native';

export default props =>{
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    console.log(props.data, "is data");
    return(
    <>
        <View style={{backgroundColor:'white',height:height,flex:1}}>
        <Header
            centerComponent={{ text: "", style:{color:'black' ,fontSize:25} }}
            backgroundColor={'white'}
            />
            <View style={{backgroundColor:'white'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={{uri: props.data.image_url || props.data.logo}}
            style={{width:width, height:height/3}} />
            </View>
            <Divider style={{backgroundColor:'black'}}/>
            <ScrollView>
            <View>
                <Text style={{textAlign:'left',fontSize:30,color:'black', padding:8}}>{props.data.name || props.data.name_}</Text>
            </View>
            <View>
                <Text style={{textAlign:'left',fontSize:25,color:'black',padding:8}}>{props.data.price}</Text>
                <Text style={{textAlign:'left',fontSize:25,color:'black',padding:8}}>{props.data.categories[0].title}</Text>

            </View>
            <View style={{padding:10,flex:1}}>
                <Text style={{color:'black'}}>{props.data.description_ || props.data.rating}</Text>
            </View>
            <Button 
            dark block><Text style={{color:'white'}}>Go Here</Text></Button>
           
                </ScrollView>

            </View>

        </View>
            
          
    </>)
        
            
}