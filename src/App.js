import React, { Component } from 'react';
import './App.css';
import { Button, Checkbox } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-page">
          <p className="App-intro">Britt Brundin</p>
          <p>Hi world</p>
          <ul>
            <li>howdy</li>
            <li>hoooo</li>
          </ul>
          <Button>
            Click Here
          </Button>
          <div>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
          </div>
          <Checkbox slider />
        </div>
      </div>
    );
  }
}

export default App;
