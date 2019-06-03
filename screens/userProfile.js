import React from 'react';
import Login from '../components/login';
import SignUp from '../components/signup';
import Profile from '../components/profile';
import {AuthContext, ToggleAuthViewContext,} from '../contexts/auth';

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