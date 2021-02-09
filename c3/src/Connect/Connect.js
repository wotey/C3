import React, { Component } from 'react';
import './Connect.css';
import Navigation from '../Nav/';
import hostpic from '../imgs/chris.svg';
import Plinks from '../Plinks';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Swal from '@sweetalert/with-react';
import * as emailjs from 'emailjs-com';

class Connect extends Component {
  constructor(props){
    super(props);
      this.state = {
        message: ''
      };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  
  handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = 'template_0doyy52';

    //This is a custom method from EmailJS that takes the information 
    //from the form and sends the email with the information gathered 
    //and formats the email based on the templateID provided.
    this.sendFeedback(templateId, {
                                    message: this.state.message
                                  })
  }

  //Custom EmailJS method
  sendFeedback = (templateId, variables) => {
    // const swal: SweetAlert = _swal as any;
    const serviceID = 'service_182hkc1';
    emailjs.send(
      serviceID, templateId,
      variables, 'user_QLvX0sQGJ0rK3cMdpFFMr'
      ).then(res => {
        alert('Subscribed!');
        this.resetForm();
        window.location.reload();
        
        // Email successfully sent alert
        // Swal.fire({
        //   title: 'Email Successfully Sent',
        //   icon: 'success'
        // })
        
      })
      // Email Failed to send Error alert
      .catch(err => {
        // Swal.fire({
        //   title: 'Email Failed to Send',
        //   icon: 'error'
        // })
        console.error('Email Error:', err)
      })
  }
resetForm() {
    this.setState({
      message: ''
    })
  }
messageChange = (event) => {
  this.setState({message: event.target.value})
}

  render() {
    return (
      <div className="Connect">
        <header>
          <Navigation/>
        </header>
        <main>
        <h1 className="home">
          Connect With<br></br>the <span id="green">Host</span>
        </h1>
        <Plinks></Plinks>
        <Container fluid>
          <Row>
            <Col md>
              <img id="C3host" src={hostpic} alt="The C3 Podcast host"></img>
            </Col>
            <Col md></Col>
          </Row>
          </Container>
          {/* <div id="p2"> */}
          <Container id="suggestion" fluid>
          <h2>
            Send a Suggestion/Message<br></br>to the Host 
          </h2>
          <Row className="justify-content-md-center">
          
          <Col id="colli" xs={16} md={4}>
          
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control type="message" placeholder="Message" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox"> */}
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            {/* </Form.Group> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
          </Row>
          
        </Container>
        
        {/* </div> */}
        <Footer></Footer>
        </main>
      </div>
    );
  }
}

export default Connect;