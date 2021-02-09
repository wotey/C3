import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Notes from './Notes';
import Connect from './Connect';
import Podcast from './Podcast';

const App = () => {
  return(
    <div className="App">
      <Switch>
      <Route exact path="/C3" render={() => <Home/>} />
      <Route exact path="/" render={() => <Home/>} />
        <Route path="/Notes" render={() => <Notes/>} />
        <Route path="/Connect" render={() => <Connect/>} />
        <Route path="/Podcast" render={() => <Podcast/>} />
      </Switch>
    </div>
  );
}

export default App;
