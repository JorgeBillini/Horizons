import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Icon} from 'native-base';
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker'

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
            capacity:'',
            ageRestrict: null,
            starts: '',
            ends: '',

            error: '',
        }
    }

    submitEvent = () =>{
        const {evName, evCategory, evDesc, evPrice, evUrl, evLogo, 
            venueName, venueAddr, capacity, ageRestrict, 
            starts, ends, error
        } = this.state;

        const user_id = parseInt(this.props.navigation.state.params.data.id);
        const venue = {name: venueName, age_restriction: ageRestrict, address: venueAddr};

        // Conditionals to ensure grabbing right data
        if (!evName || !evPrice){
            this.setState({error: 'Event name and price must be filled out.'})
        } else if (!venueAddr){
            this.setState({error: 'Venue name and address must be filled out.'})
        } else if (!starts || !ends){
            this.setState({error: 'Please enter a number for venue capacity.'})
        } else if (capacity && typeof parseInt(capacity) !== 'number'){
            this.setState({error: 'All Date & Time fields must be filled out.'})
        } else {
            // figure out lat long based on address input...
            let lat = 40.7563454;
            let long = -73.9244968;

            // Make event object for db
            const event = {
                user_id, 
                name_: evName, 
                description_: evDesc, 
                category: evCategory, 
                url_: evUrl, 
                starts: `${starts}:00`,
                ends: `${ends}:00`, 
                price: evPrice, 
                logo: evLogo, 
                venue: JSON.stringify(venue), 
                lat, 
                long, 
                capacity
            }

            // Create user-event in db
            Axios.post(`http://horizons-api.herokuapp.com/events/`, event, {headers: { 'Content-Type': 'application/json' }})
                .then(res =>{
                    console.log('event successfully posted...yay!!! ', res.data)
                    return {success: true}
                })
                .then(yay =>{
                    console.log(yay);
                    this.props.navigation.navigate('userProfile',{submitted:true});
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

                    {/* Form Title */}
                    <View>
                        <Text onPress={()=>{this.setState({
                            evName: 'Pursuit Demo Day', 
                            evPrice: 'Free',
                            evLogo: 'https://www.arborbrothers.org/wp-content/uploads/2018/10/Pursuit-Logo.jpg',
                            evUrl: 'https://pursuit52webdemoday.splashthat.com/',
                            evDesc: 'We are pleased to invite you to experience the products built by our Pursuit Full Stack Web developers! Join us on June 19, 2019 as our developers showcase their apps. They will be exhibiting their hard work, passion, and creativity that brought them to this moment. Come celebrate their achievements!',
                            venueAddr: '36-01 35th Ave, Astoria, NY 11106',
                            venueName:'Museum of Moving Images', 
                            capacity: 24
                            })}} 
                            style={styles.title}>
                            Enter your event info below
                        </Text>
                    </View>

                    {/* Input Form */}
                    <View style={styles.formContainer}>
                        <TextInput placeholder='Event name' 
                            style={styles.input} 
                            value={this.state.evName} />

                        <TextInput placeholder='Event price' 
                            style={styles.input} 
                            value={this.state.evPrice}/>
                    </View>
                    
                    {/* Form Title */}
                    <View>
                        <Text style={styles.title}>
                            Location
                        </Text>
                    </View>

                    {/* Input Form */}
                    <View style={styles.formContainer}>
                        <TextInput placeholder='Venue address' 
                            style={styles.input} 
                            value={this.state.venueAddr}/>

                        <TextInput placeholder='Venue name' 
                            style={styles.input} 
                            value={this.state.venueName}/>

                        <TextInput placeholder='Venue capacity: # of people that fit' 
                            style={styles.input} 
                            value={`${this.state.capacity}`}/>
                    </View>

                    {/* Form Title */}
                    <View>
                        <Text style={styles.title}>
                            Date & Time
                        </Text>
                    </View>

                    {/* Input Form */}
                    <View style={styles.formContainer}>
		      <DatePicker
			style={{width: 200}}
			date={this.state.starts}
			mode="datetime"
			placeholder="starts"
			format="YYYY-MM-DD HH:mm"
			minDate="2019-06-01"
			maxDate="2030-12-31"
			confirmBtnText="Confirm"
			cancelBtnText="Cancel"
			customStyles={{
			  dateIcon: {
			    position: 'absolute',
			    left: 0,
			    top: 4,
			    marginLeft: 0,
			    marginBottom: 3
			  },
			  dateInput: {
			    marginLeft: 36
			  }
			  // ... You can check the source to find the other keys.
			}}
			onDateChange={(date) => {this.setState({starts: date})}}
		      />

		      <DatePicker
			style={{width: 200}}
			date={this.state.ends}
			mode="datetime"
			placeholder="ends"
			format="YYYY-MM-DD HH:mm"
			minDate="2019-06-01"
			maxDate="2030-12-31"
			confirmBtnText="Confirm"
			cancelBtnText="Cancel"
			customStyles={{
			  dateIcon: {
			    position: 'absolute',
			    left: 0,
			    top: 4,
			    marginLeft: 0
			  },
			  dateInput: {
			    marginLeft: 36
			  }
			  // ... You can check the source to find the other keys.
			}}
			onDateChange={(date) => {this.setState({ends: date})}}
		      />
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
