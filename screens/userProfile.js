import React from 'react';
import Login from '../components/login';
import SignUp from '../components/signup';
import Profile from '../components/profile';
import {AuthContext, ToggleAuthViewContext,} from '../contexts/auth';
import firebase from '../firebase';
import Axios from 'axios';

export default class UserProfile extends React.Component{
    static navigationOptions= {
        header:null
    }

    state = {
        isLoggedIn: null,
        signUpView: false,
    }

    toggleLoginAndSignUpView = () =>{
        const {signUpView} = this.state;
        this.setState({signUpView: !signUpView});
    }

    componentDidMount() {

        this.unsubscribe = firebase.auth().onAuthStateChanged( user =>{
          if (user) {
            // get user from db by email
            const {email} = user;
            Axios.get(`http://horizons-api.herokuapp.com/users/email/${email}`)
                .then(res =>{
                    this.setState({isLoggedIn: res.data});
                })
                .catch(err =>{
                    console.log('error', err);
                })

          } else {
            this.setState({isLoggedIn: null});
          }
        })
      }
    
    componentWillUnmount () {
        this.unsubscribe();
    }


    render(){
        const {isLoggedIn, signUpView} = this.state;

        if (isLoggedIn){
            return (
                <AuthContext.Provider value={isLoggedIn}>
                    <Profile />
                </AuthContext.Provider>
            )
        } else {
            return (
                <ToggleAuthViewContext.Provider value={this.toggleLoginAndSignUpView}>
                {   signUpView ?
                        <SignUp />
                        :
                        <Login />
                }
                </ToggleAuthViewContext.Provider>
            )
        }

        
    }
}