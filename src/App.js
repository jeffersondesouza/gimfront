import React, { Component } from 'react';
import {Link} from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
           <h2 className="logo-title">gim</h2>
          </Link>
        </div>


          <div id="component">
            {this.props.children}
          </div>

      </div>
    );
  }
}

export default App;
