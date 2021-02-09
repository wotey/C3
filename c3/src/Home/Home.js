import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Nav';
import mic from '../imgs/mic.png';
import { Player,ControlBar, BigPlayButton} from 'video-react';
import vid from '../imgs/video.mov';
import "video-react/dist/video-react.css";
import { Button, BDiv, Nav} from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';
import "video-react/dist/video-react.css";
import {Link} from 'react-scroll';
import Plinks from '../Plinks';
import  { Col, Row, Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';

class Home extends Component {
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
      <div className="Home"> 
        <header>
          <Navigation/>
        </header>
          <main>
          <img id="mic" src={mic} alt="The C3 Podcast mic"></img>
          <BDiv class="mid" display="flex"  flex="column sm-column md-row"mb="2">
        <BDiv id="first" justifyContent="center" >
        <h1 className="home">
            The C<span id="green">3</span><br></br>Podcast
          </h1>
          <h3 className="h3home">
          Your Millennial/Gen Z Survival Guide.
          </h3>
          <Link  to="page2" spy={true} smooth={true}>
          <Button>
            See the latest episode!
          </Button>
          </Link>
          {/* <source src={vid} type='video/mp4' /> */}
        
        </BDiv>
        <BDiv  id="second" flex="fill">
          <Player id="vid1" playsInline src={vid} autoPlay={true} loop={true} muted={false} >
            <BigPlayButton position="center" />
          </Player>
        </BDiv>
      </BDiv>
      <BDiv id="page2" class="mid" display="flex"  flex="column sm-column md-row"mb="1">
        {/* <BDiv id="p2" justifyContent="center"> */}
          {/* <Player playsInline src={vid} autoPlay={true} loop={true} muted={false} style={{height: "50%"}, {width: "50%"}}></Player> */}
        {/* </BDiv> */}
        <BDiv id="vid2"  flex="fill" >
          <h2>
            The Latest C3 Episode
          </h2>
            <Player playsInline src={vid} autoPlay={true} loop={true} muted={false} style={{height: "100%"}, {width: "100%"}}>
              <BigPlayButton position="center" />
            </Player>
        </BDiv>
      </BDiv>
      <Container id="page3" fluid>
        <Row>
          <Col>
            <h3>
              Follow the Channel!
            </h3>
          <Plinks id="links" ></Plinks>
          </Col>
        </Row>
        
      </Container>
      <Footer></Footer>
      </main>
      </div>
      
    );
  }
}

export default Home;