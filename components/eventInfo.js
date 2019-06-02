import React from 'react';
import {Button,Header,Divider} from 'react-native-elements';
import {View,ScrollView,Image,Text} from 'react-native';
import {Dimensions} from 'react-native';

export default props =>{
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    return(
    <>
        <View style={{backgroundColor:'black',height:height}}>
        <Header
            centerComponent={{ text: 'Event Details', style:{color:'white' ,fontSize:25} }}
            backgroundColor={'black'}
            />
            <View style={{backgroundColor:'black'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            style={{width:width, height:height/3}} />
            </View>
            <Divider style={{backgroundColor:'white'}}/>
            <ScrollView>
            <View>
                <Text style={{textAlign:'left',fontSize:30,color:'white'}}>Name</Text>
            </View>
            <View>
                <Text style={{textAlign:'left',fontSize:25,color:'white'}}>Free</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
            <Button title="Go Here"></Button>
           
                </ScrollView>

            </View>

        </View>
            
          
    </>)
        
            
}