import React from 'react';
import {Button,Header,Divider} from 'react-native-elements';
import {View,ScrollView,Image,Text} from 'react-native';
import {Dimensions} from 'react-native';

export default props =>{
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    console.log(props.data, "is data");
    return(
    <>
        <View style={{backgroundColor:'white',height:height}}>
        <Header
            centerComponent={{ text: "", style:{color:'black' ,fontSize:25} }}
            backgroundColor={'white'}
            />
            <View style={{backgroundColor:'white'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={{uri: props.data.image_url}}
            style={{width:width, height:height/3}} />
            </View>
            <Divider style={{backgroundColor:'black'}}/>
            <ScrollView>
            <View>
                <Text style={{textAlign:'left',fontSize:30,color:'black', padding:8}}>{props.data.name}</Text>
            </View>
            <View>
                <Text style={{textAlign:'left',fontSize:25,color:'black',padding:8}}>{props.data.price}</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={{color:"black"}}>{props.id} is id</Text>
            </View>
            <Button title="Go Here"
            color={'black'}></Button>
           
                </ScrollView>

            </View>

        </View>
            
          
    </>)
        
            
}