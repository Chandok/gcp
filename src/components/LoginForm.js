import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { ROOT_PATH } from "./Constants";
class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        if (length > 5) return 'warning';
        if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        const forgotPasswardLink = ROOT_PATH+'forgotPassword';
        const registrationLink = ROOT_PATH+'registration';
        
        return (
            <Form className="login-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <a href={forgotPasswardLink}>Forgot password?</a>
                <span className="tab"/><span className="tab"/><span className="tab"/>
                <a href={registrationLink}>Create account</a>
                <Button variant="primary" className="btn-lg btn-block" type="submit">
                    Login
                </Button>
            </Form>
        );
    }
}
export default LoginForm;
  //render(<LoginForm />);