import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';
import request from 'superagent';

class DeployButton extends Component {

  deploy() {
    let tag = this.props.tag;
    let url = 'api/v1/marathon/deploy/' + tag;
    var parentContext = this;
    request
    .get(url)
    .end(function(err, response){
      console.log('on deploy button');
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <RaisedButton primary={true} label="Deploy" onClick={this.deploy.bind(this)} />
      </div>
    );
  }

}

DeployButton.propTypes = {
  tag: PropTypes.string,
  onSave: PropTypes.func
};

export default DeployButton;
