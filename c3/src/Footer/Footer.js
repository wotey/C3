import React, { Component } from 'react';
import './Footer.css';
import SubscribeForm from '@bit/mybit.ui.showcase.subscribe-form';
import  { Col, Row, Container } from 'react-bootstrap';
import '../Home/Home.css';
class Footer extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="Footer" >
        <Container className="footCont" fluid>
          <Row className="justify-content-md-center">
            <Col>
              <h4>Subcribe and Stay Informed!</h4>
            <SubscribeForm/>
            </Col>
          </Row> 
        </Container>   
      </div>
    );
  }
}

export default Footer;