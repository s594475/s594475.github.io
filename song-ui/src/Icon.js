import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500,greenA200} from 'material-ui/styles/colors';
import ActionBlur from 'material-ui/svg-icons/image/blur-on';
import ActionLocal from 'material-ui/svg-icons/maps/local-see';


const iconStyles = {
  marginRight: 24,
  cursor: 'pointer',
};

const Icon = () => (
  <div>
    <ActionBlur style={iconStyles} />
    <ActionHome style={iconStyles} />
    <ActionFlightTakeoff style={iconStyles} color={red500} hoverColor={greenA200} />
    <FileCloudDownload style={iconStyles} color={yellow500} hoverColor={greenA200} />
    <HardwareVideogameAsset style={iconStyles} color={blue500} hoverColor={greenA200} />
    <ActionLocal style={iconStyles} color={yellow500} hoverColor={greenA200} />
  </div>
);

export default Icon;
