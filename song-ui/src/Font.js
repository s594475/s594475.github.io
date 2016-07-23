import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
  cursor: 'pointer',
};

const Font = () => (
  <div>
    <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
    <FontIcon className="material-icons" style={iconStyles}>done_all</FontIcon>
    <FontIcon className="material-icons" style={iconStyles}>bluetooth_search</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={red500}>usb</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={red500}>bubble_chart</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={red500}>brush</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={red500}>burst_mode</FontIcon>
  </div>
);

export default Font;
