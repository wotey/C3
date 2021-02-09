import React, { Component } from 'react';
import './Plinks.css';
import {ReactComponent as PodcastApple} from "../assets/podcastApple.svg";
import {ReactComponent as PodcastGoogle} from "../assets/podcastGoogle.svg";
import {ReactComponent as PodcastOvercast} from "../assets/podcastOvercast.svg";
import {ReactComponent as PodcastPocketcasts} from "../assets/podcastPocketcasts.svg";
import {ReactComponent as PodcastSpotify} from "../assets/podcastSpotify.svg";
import {ReactComponent as PodcastRss} from "../assets/podcastRss.svg";
import {ReactComponent as PodcastTwitter} from "../assets/podcastTwitter.svg";
class Plinks extends Component {
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
      <div>
        <div className="social-links-wrapper">
          <div className="social-links">
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://twitter.com/codechefsdev" title="Twitter">
              <PodcastTwitter/>
            </a>
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://podcasts.apple.com/us/podcast/code-chefs-hungry-web-developer-podcast/id1536223859" title="iTunes">
              <PodcastApple/>
            </a>
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuY29kZWNoZWZzLmRldi9yc3MueG1s?sa=X&ved=0CBQQ27cFahcKEwjg4Obtj7_sAhUAAAAAHQAAAAAQAQ" title="Google Podcast">
              <PodcastGoogle/>
            </a>
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://open.spotify.com/show/6DxHVg6CAOzwHnLgQClrs7" title="Spotify">
              <PodcastSpotify/>
            </a>
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://pca.st/wtu4690d" title="Pocketcasts">
              <PodcastPocketcasts/>
            </a>
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://overcast.fm/p2403384-t859cb" title="Overcast">
              <PodcastOvercast/>
            </a>
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://codechefs.dev/rss.xml" title="RSS">
              <PodcastRss/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Plinks;