import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../App.css';

export default class RegistrationPage extends React.Component {
    constructor(props,state){
        super(props);

        this.state = {
            validate:false
        }
      
        
        
    }
    render() {
        const handleSubmit = event => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
        
            this.setState({validated:true})
          };
        
        return (
            <div class="registration">
                <Form noValidate validated={this.state.validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="firstName">
                        <Form.Control placeholder="Enter First Name" required />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Control placeholder="Enter Last Name" required />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Control placeholder="Enter Phone" required />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Control type="email" placeholder="Enter Email" required />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control type="password" placeholder="Enter Password" required />
                    </Form.Group>
                    <Form.Group controlId="confirmPassword">
                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" required />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Control type="text" placeholder="Enter City" required />
                    </Form.Group>
                    <Form.Group controlId="state">
                        
                        <Form.Control as="select">
                            <option>TX</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="zip">
                        <Form.Control type="text" placeholder="Enter Zip" required />
                    </Form.Group>

                    <Button variant="primary" className="btn-lg btn-block" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

