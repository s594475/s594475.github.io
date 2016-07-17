import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button.js';
import Input from './domp/input.js';

class App extends Component {
  render(){
    return(

      <div>
      <Input/>
      <Button />

      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
