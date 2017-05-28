import React, { Component } from 'react';
import './App.css';
import { Button, Checkbox, Image } from 'semantic-ui-react';
import myimage from './image.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-page">
          <p className="App-intro">Britt Brundin</p>
          <p>Hi world</p>
          <ul>
            <li>lol</li>
            <li>awesome</li>
            <Image src={myimage} size='small' />
          </ul>
          <Button>
            Click Here
          </Button>
          <div>
            <Button primary>Hello</Button>
            <Button secondary>Secondary</Button>
          </div>
          <Checkbox slider />
        </div>
      </div>
    );
  }
}

export default App;
