import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/pages/LoginPage'
import MenuBar from './components/MenuBar';
import { Route, Switch } from "react-router";
import './App.css';
import RegistrationPage from './components/pages/RegistrationPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import { ROOT_PATH } from './components/Constants';


export default class App extends React.Component {
  render() {
    
    const getPath= function(input){
        return ROOT_PATH+input;
    }
    return (
      <div class="App">
        <MenuBar />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route  path={getPath('registration')} component={RegistrationPage} />
          <Route  path={getPath('forgotPassword')} component={ForgotPasswordPage} />
        </Switch>
      </div>
    );
  }
}

