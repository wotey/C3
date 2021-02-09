import React, { Component } from 'react';
import Navigation from '../Nav';
import './Podcast.scss';
import '../Plinks';
import YouTube from 'react-youtube';
import Plinks from '../Plinks';



// import { Link } from "gatsby";
class Podcast extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.postList ={};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const opts = {
      height: '450',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 1,
      },
    };
    const postList = [
      {videourl:"GfnWByzFwp0", title: "Podcast Episode 1", details: "This is the first episode of the C3 podcast", date: "8/31/2020"},
      {videourl:"GfnWByzFwp0", title: "Podcast Episode 2", details: "This is the first episode of the C3 podcast", date: "8/31/2020"},
    ];
    const renderPost = (post, index) => {
      return (
      <section className="cc-container post-listing-container">
      <div id="cc"className="cc-podcast-wrapper">
            <div key={`podcast-${index}`} className="podcast-wrapper cc-card mb-7">
              <a className="podcast-episode"> 
                <div className="podcast-number">
                  Episode: {index + 1} 
                </div>
                <div className="cc-padding">
                  <svg id="svg2">
                    <rect>
                      
                    </rect>
                  </svg>
                  <YouTube videoId={post.videourl} opts={opts} onReady={this._onReady} />
                  <div className="podcast-inner-card">
                    <div className="podcast-content-right">
                      <div className="podcast-title">{post.title}</div>
                      <p>{post.date}</p> 
                      <p className="mt-0 short-description">{post.details}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
      </div>
    </section>
    );
    };
    return (
      <div>
        <header>
          <Navigation/>
        </header>
        <div className="cc-layout">
        <main>
        <h1 className="home">
            The C<span id="green">3</span><br></br>Podcast Episodes
        </h1>
        <Plinks></Plinks>
          {postList.map(renderPost)}
        </main>
        </div>
        <div id="end"></div>
      </div>
    );
  }
}

export default Podcast;