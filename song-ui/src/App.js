import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Date from './Date.js';
import Auto from './Auto.js';
import Drawer from './Drawer.js';
import Icon from './Icon.js';
import Font from './Font.js';
import {brown500,deepOrangeA400} from 'material-ui/styles/colors';
var myTheme={
  fontFamily: 'DFKai-SB',
  palette:{
    alternateTextColor: brown500,
    primary1Color:deepOrangeA400,
  }
}

class App extends React.Component {
    LeftTouchTap(){
      this.refs.myDrean.handleToggle();
    }

    getChildContext() {
      return {muiTheme: getMuiTheme(myTheme)};
    }

    render () {
      return(
        <div>
          <AppBar title="My dealing"
            onLeftIconButtonTouchTap={this.LeftTouchTap.bind(this)} />

          <RaisedButton label="Primary" primary={true} onClick={this.LeftTouchTap.bind(this)} />
          <Date />
          <Auto />
          <Drawer ref="myDrean"/>
          <Icon />
          <Font />
        </div>
      )
    }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


export default App;
