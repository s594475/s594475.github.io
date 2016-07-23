import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cards from './component/Cards.js';
class App extends Component {
  render(){

    return(
    <Cards />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'));
