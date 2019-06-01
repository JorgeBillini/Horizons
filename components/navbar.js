import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Button, ThemeProvider} from 'react-native-elements';
import {StyleSheet, Text, View,TouchableHighlight} from 'react-native';
export default class NavBar extends React.Component{
    static navigationOptions= {
        header:null
      }
      
    render(){
        const Theme = {
            colors:{
                primary:'black'
            }
        }
        return(<>
        <ThemeProvider theme={Theme}>
        <View style={styles.container}>

        <View style={styles.button}>
        < Button   title=""
            onPress={()=> {this.props.navigate('Home')}}
            icon={<Ionicons name="ios-map" size={32} color="white" />}
        />
        </View>
        <View style={styles.button}>
        <Button  title=""
            icon={<Ionicons name="ios-list" size={32} color="white" />}
            onPress={()=> {this.props.navigate('eventList')}}
        <Button title="Profile"
            onPress={()=> {this.props.navigation.navigate('Profile')}}
        />
        </View>
       <View style={styles.button}>
       <Button title=""
            icon={<Ionicons name="ios-person" size={32} color="white" />}
            onPress={()=> {this.props.navigate('Profile')}}
        />
       </View>
        </View>
        </ThemeProvider>
        </>)
        
    }
}
const styles = StyleSheet.create({
     container:{
        marginTop: 100,
        flex:1,
        flexDirection:'row',
        position:'absolute',
        bottom:0
     },
     button:{
        flexDirection:'column',
        flex:1,
        backgroundColor:'black'
        
     }
})