import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Icon} from 'native-base';
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default class eventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            evName: '',
            evCategory: '',
            evDesc: '',
            evPrice: '',
            evUrl: '',
            evLogo: '',
            venueName: '',
            venueAddr: '',
            capacity: '',
            ageRestrict: '',
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: '',

            error: '',
        }
    }

    submitEvent = () =>{
        const {evName, evCategory, evDesc, evPrice, evUrl, evLogo, 
            venueName, venueAddr, capacity, ageRestrict, 
            startDate, startTime, endDate, endTime, error
        } = this.state;

        const user_id = parseInt(this.props.navigation.state.params.data.user_id);
        const venue = {name: venueName, age_restriction: ageRestrict, address: venueAddr};

        // Conditionals to ensure grabbing right data
        if (!evName || !evDesc || !evPrice){
            this.setState({error: 'Event name, description, and price must be filled out.'})
        } else if (!venueName || !venueAddr){
            this.setState({error: 'Venue name and address must be filled out.'})
        } else if (!startDate || !startTime || !endDate || !endTime){
            this.setState({error: 'Please enter a number for venue capacity.'})
        } else if (capacity && typeof parseInt(capacity) !== 'number'){
            this.setState({error: 'All Date & Time fields must be filled out.'})
        } else {
            // figure out lat long based on address input...
            const lat = null;
            const long = null;

            // Make event object for db
            const event = {
                user_id, 
                name_: evName, 
                description_: evDesc, 
                category: evCategory, 
                url_: evUrl, 
                starts: `${startDate} ${startTime}`, 
                ends: `${endDate} ${endTime}`, 
                price: evPrice, 
                logo: evLogo, 
                venue: JSON.stringify(venue), 
                lat, 
                long, 
                capacity
            }

            // Create user-event in db
            const config = {
                method: 'POST',
                url: `http://horizons-api.herokuapp.com/events/`,
                data: event,
            }
            
            Axios(config)
                .then(res =>{
                    console.log('event successfully posted...yay!!! ', res.data)
                    return {success: true}
                })
                .then(yay =>{
                    console.log(yay);
                    this.props.navigation.navigate('userProfile');
                })
                .catch(err =>{
                    console.log('event failed to post... oh no!!! ', err.toString())
                })
        }
    }

    render(){
        const {error} = this.state;

        return (
            <ScrollView>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    {/* Greeting */}
                    <View>
                        <Text style={{textAlign:'center',fontSize:20,marginTop:20,fontWeight:'bold'}}>
                            Hi, {this.props.navigation.state.params.data.username}!
                        </Text>
                    </View>

                    {/* Form Title */}
                    <View>
                        <Text style={styles.title}>
                            Enter your event info below
                        </Text>
                    </View>

                    {/* Input Form */}
                    <View style={styles.formContainer}>
                        <TextInput placeholder='Event name' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({evName: text})} />

                        <TextInput placeholder='Event type or category' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({evCategory: text})}/>

                        <TextInput placeholder='Event description' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({evDesc: text})}/>

                        <TextInput placeholder='Event price' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({evPrice: text})}/>

                        <TextInput placeholder='Event link or url' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({evUrl: text})}/>

                        <TextInput placeholder='Event logo' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({evLogo: text})}/>
                    </View>
                    
                    {/* Form Title */}
                    <View>
                        <Text style={styles.title}>
                            Location
                        </Text>
                    </View>

                    {/* Input Form */}
                    <View style={styles.formContainer}>
                        <TextInput placeholder='Venue name' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({venueName: text})}/>

                        <TextInput placeholder='Venue address' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({venueAddr: text})}/>

                        <TextInput placeholder='Venue capacity: # of people that fit' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({capacity: text})}/>

                        <TextInput placeholder='Age restriction' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({ageRestrict: text})}/>
                    </View>

                    {/* Form Title */}
                    <View>
                        <Text style={styles.title}>
                            Date & Time
                        </Text>
                    </View>

                    {/* Input Form */}
                    <View style={styles.formContainer}>
                        <TextInput placeholder='Start date: YYYY-MM-DD' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({startDate: text})}/>

                        <TextInput placeholder='Start time' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({startTime: text})}/>

                        <TextInput placeholder='End date: YYYY-MM-DD' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({endDate: text})}/>

                        <TextInput placeholder='End time' 
                            style={styles.input} 
                            onChangeText={(text) => this.setState({endTime: text})}/>
                    </View>

                    {/* Submission error */}
                    {error ? 
                        <View style={{borderWidth:1,borderColor:'red',paddingVertical:10,marginTop:20}}>
                            <Text style={{color:'red',textAlign:'center',fontSize:18,paddingVertical:5}}>
                                {error}
                            </Text>
                        </View>
                        : 
                        <></>
                    }

                    {/* Submit button */}
                    <TouchableOpacity 
                        style={{backgroundColor:'black',marginHorizontal:35,marginTop:20,borderRadius:20,padding:15}}
                        onPress={() => this.submitEvent()}
                    >
                        <Text style={{color:'white',fontWeight:'700',fontSize:16,textAlign:'center'}}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 30
    },
    title: {
        textAlign:'center',
        fontWeight:'700',
        fontSize:20,
        color:'white',
        backgroundColor:'black',
        paddingVertical:10,
        marginTop:20,
    },
    formContainer:{
        borderWidth: 1,
        borderColor: 'grey',
        padding:30,
    },
    input: {
        borderBottomWidth: 2,
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 5,
    },
})