import React, { Component ,useState }from 'react';
import './Notes.css';
import Navigation from '../Nav';
import dropdown from '../imgs/dropdown.svg';
import Card from 'react-bootstrap/Card'
import still from '../imgs/host picture.jpg';
import logo from '../imgs/CCC Logo -SVG.svg';
import {Collapse, Button} from 'react-bootstrap';
import { BDiv} from 'bootstrap-4-react';
import Plinks from '../Plinks';

class Notes extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      Season1: false
    };

  }
  S1 = () => {
    console.log('dropdown')
    this.setState({
      Season1: true
    });
  };
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}

  // componentDidUpdate(){}
  
  render() {
    function Drop() {
      const [open, setOpen] = useState(false);
    
      return (
        <>
        <div className="btn-container">
          <Button
            id="sznone"
            onClick={() => setOpen(!open)}
            aria-controls="hide"
            aria-expanded={open}
          >
            Season 1 <img id="dropdown" src={dropdown} alt="The C3 Podcast dropdown"></img>
          </Button>
          </div>
          <Collapse in={open}>
          <div id="hide">
          <BDiv id="note"class="mid" display="flex"  flex="column sm-column md-row"mb="2">
          <BDiv id="first" justifyContent="center" flex="fill">
          <Card className="bg-dark text-white">
            <Card.Img src={logo} id="cardimg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>Episode 1</Card.Title>
              {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
            <Card.Body>
            <Card.Text>
                  episode description of episode 1
            </Card.Text>
            </Card.Body>
          </Card>
          </BDiv>
          <BDiv id="first" justifyContent="center" flex="fill">
          <Card  className="bg-dark text-white">
            <Card.Img variant="top"src={logo} id="cardimg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>Episode 1</Card.Title>
              {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
            <Card.Body>
            <Card.Text>
                  episode description of episode 1
            </Card.Text>
            </Card.Body>
          </Card>
          </BDiv>
          </BDiv>
          </div>
          </Collapse>
        </>
      );
    }
    return (
      <div className="Notes">
        <header>
          <Navigation/>
        </header>
        <main>
          <h1>
          The C<span id="green">3</span><br></br>Show Notes
          </h1>
          <Plinks></Plinks>
          
          <Drop/>
          
        </main>
      </div>
    );
  }
}

export default Notes;