import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../App.css';

export default class RegistrationPage extends React.Component {
    constructor(props,state){
        super(props);
        this.state = {
            validate:false,
            state:'TX'
        }
      
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        if (event.target.options) {
            //select
            var options = event.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
            }
            this.setState( {[event.target.id]: value} )
        }
        else {
            // input
            this.setState( {[event.target.id]: event.target.value} )
        }
    }

    render() {
        const handleSubmit = event => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            console.info(this.state.password);
            this.setState({validated:true})
          };
        
        return (
            
            <div class="registration">
                <div className="row">
                <div className="col-12">
                    <h3>Bootstrap 4 React Form</h3>
                </div>
                <div className="col-auto">State => </div>
                {Object.keys(this.state).map((val, k) => {
                    return (<div className="col-auto" key={k}>{val}:{this.state[val]}</div>)
                    })
                }
            </div>
                <Form noValidate validated={this.state.validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="firstName">
                        <Form.Control placeholder="Enter First Name" required  onChange={event => this.handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Control placeholder="Enter Last Name" required onChange={event => this.handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Control placeholder="Enter Phone" required onChange={event => this.handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Control type="email" placeholder="Enter Email" required onChange={event => this.handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control type="password" placeholder="Enter Password" required onChange={event => this.handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="confirmPassword">
                        <Form.Control type="password" placeholder="Confirm Password" required onChange={event => this.handleChange(event)}/>
                        <Form.Control.Feedback type="invalid">
                            Password does not match.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" required onChange={event => this.handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Control type="text" placeholder="Enter City" required onChange={event => this.handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="state">
                        <Form.Control as="select" onChange={event => this.handleChange(event)}>
                            <option>TX</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="zip">
                        <Form.Control type="text" placeholder="Enter Zip" required onChange={event => this.handleChange(event)}/>
                    </Form.Group>

                    <Button variant="primary" className="btn-lg btn-block" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

