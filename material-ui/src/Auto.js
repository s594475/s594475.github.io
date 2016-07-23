import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class Auto extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }
  render() {
    return (
      <div>
          <AutoComplete
            hintText="Type anything"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
          />
          <AutoComplete
            hintText="Type anything"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            floatingLabelText="Full width"
            fullWidth={true}
          />
      </div>
    );
  }
}
