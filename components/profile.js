import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import {Text, ListItem, Icon} from 'react-native-elements';
import Axios from 'axios';
import firebase from '../firebase';
import genericUserPic from '../assets/user.png';

export default class Profile extends Component{
    state = {
        user: {},
        currEvents: [],
        pastEvents: [],
    }

    componentDidMount(){
        const {user} = this.props;

        const p1 = Axios.get(`http://horizons-api.herokuapp.com/events/${user.id}`);
        const p2 = Axios.get(`http://horizons-api.herokuapp.com/events/past/${user.id}`);

        Promise.all([p1, p2])
            .then(([res1, res2]) =>{
                this.setState( {user, currEvents: res1.data.data, pastEvents: res2.data.data});
            })
            .catch(err =>{
                console.log('get user created events error...', err);
            })
    }

    UtcToNicerTime = (utc) =>{
        const primitiveTime = utc.split('T').join(' ').slice(0,-8);
        let time = primitiveTime.slice(-5,-3);
        if(parseInt(time) > 12){
            time = (parseInt(time)-12).toString() + primitiveTime.slice(-3) + 'PM'
        } else {
            time = time + primitiveTime.slice(-3) + 'AM';
        }
        return primitiveTime.slice(0,11) + time;
    }

    render (){
        const {user, currEvents, pastEvents} = this.state;
        const profilePic = user.pic ? user.pic : genericUserPic;

        return (
            <ScrollView>
            <KeyboardAvoidingView style={styles.container}>
                
                {/* Profile Section */}
                <View style={styles.profileContainer}>
                    <Image source={profilePic} style={styles.profileImg}/>
                    <Text h3 style={styles.username}> {user.username} </Text>
                    <Text style={styles.email}> {user.email} </Text>
                </View>

                {/* Current Events Section */}
                <View style={styles.currEventsContainer}>
                    <Text style={styles.title}>Events Created For Today</Text>
<<<<<<< HEAD
                    <View style={{borderWidth:1,borderColor:'grey',borderTopWidth:0}}>
=======
                    <View>
>>>>>>> master
                        {currEvents.length? 
                            currEvents.map( (l, i) =>{
                                const nicerDateTime = this.UtcToNicerTime(l.starts);
                                const venue = JSON.parse(l.venue).name;

                                return (
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: { uri: l.logo } }}
                                        title={l.name_}
                                        subtitle={`${nicerDateTime} ★ ${venue}`}
                                    />
                                )
                            })
                            :
                            <></>
                        }

                        <View style={{paddingVertical:15, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Icon name='add-circle' onPress={ () => this.props.navigate('EventForm', {data: user}) } />
                            <Text style={{textAlign:'center', fontSize:14, color:'grey'}}
                                onPress={ () => this.props.navigate('EventForm', {data: user}) }
                                >
                                &nbsp;Create an event!
                            </Text>
                        </View>
                        
                    </View>
                </View>
                
                {/* Past Events Section */}
                <View style={styles.pastEventsContainer}>
                    <Text style={styles.title}>Past Created Events</Text>
<<<<<<< HEAD
                    <View style={{borderWidth:1,borderColor:'grey',borderTopWidth:0}}>
=======
                    <View style={styles.pastEventsList}>
>>>>>>> master
                        {pastEvents.length?
                            pastEvents.map( (l, i) =>{
                                const nicerDateTime = this.UtcToNicerTime(l.starts);
                                const venue = JSON.parse(l.venue).name;

                                return (
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: { uri: l.logo } }}
                                        title={l.name_}
                                        subtitle={`${nicerDateTime} ★ ${venue}`}
                                        onPress={()=>{
                                            this.props.navigate('Details', {data: l})
                                        }}
                                    />
                                )
                            })
                            :
                            <Text style={{textAlign: 'center', paddingVertical: 15, fontSize: 14, color:'grey'}}>
                                No events created yet
                            </Text>
                        }
                    </View>
                </View>


                {/* logout button */}
                <TouchableOpacity 
                    style={styles.logoutBtn}
                    onPress={()=>{firebase.auth().signOut()}}
                >
                    <Text style={styles.logoutText}>
                        Log Out
                    </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    profileContainer: {
        marginTop: 25,
        paddingBottom: 20,
    },
    profileImg: {
        width: 125,
        height: 125,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 100,
        borderColor: 'white',
    },
    username: {
        marginTop: 10,
        color: 'black',
        textAlign: 'center'
    },
    email: {
        textAlign: 'center',
        color: 'grey'
    },
    logoutBtn: {
        backgroundColor: 'grey',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15
    },
    logoutText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16
    },
    currEventsContainer: {
        paddingBottom: 20,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black',
        paddingVertical: 10,
        fontWeight: '700',
        fontSize: 20,
    },
    pastEventsContainer: {
        paddingBottom: 20,
    },
    pastEventsList: {
        
    }
});