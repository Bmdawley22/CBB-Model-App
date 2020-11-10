import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      stats: false
    }
  }


  render () {
    return (
      <div>
        <Header 
          loggedIn={this.state.loggedIn}
        />
        <Switch>
          <Route exact path='/' render={() => {
            return <Home/>
            }}
          />
        </Switch>
        
      </div>
    )
  }
}

export default App
