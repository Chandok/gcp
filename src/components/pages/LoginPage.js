import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import LoginForm from "../LoginForm";
import Paypal from "../Paypal";
import '../../App.css';
class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginSuccess: false,
            username: '',
        }
    }

    render() {
        console.log('Render method invoked');
        const responseGoogle = (response) => {
            console.log(response);
            const username = response.profileObj.name;
            console.log(username);
            this.setState({

                loginSuccess: true,
                username: username,

            });
        }
        let cname = this.state.loginSuccess ? 'hidden' : '';
        return (
            <div className="welcome">
                    <div className={cname}>
                        <h1 className="center"></h1>
                        <LoginForm/>
                        <br/>
                        <GoogleLogin
                            clientId="317480724089-cfbjbdid0oel6hcjek5o1nnro5qsn52n.apps.googleusercontent.com"
                            buttonText="Login With Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        
                    </div>
                    <div className={this.state.loginSuccess ? '' : 'hidden'}>
                        Welcome {this.state.username} !!
                        <br/><br/><br/>
                        You owe me $100,  <Paypal/>
                    </div>
                
            </div>
        );
    }
}

export default LoginPage;