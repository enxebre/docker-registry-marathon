import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import request from 'superagent';

class DockerImageTextInput extends Component {

  save() {
    let dockerImage = this.refs.dockerImageTextField.getValue();
    let url = 'api/v1/docker/image/' + dockerImage;
    var parentContext = this;
    request
    .get(url)
    .end(function(err, response){
      let tags = response.body || []
      parentContext.props.onSave(tags);
    });
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className}>
        <TextField
          id={this.props.id}
          ref="dockerImageTextField"
          hintText="capgemini/voting-demo"/>
        <RaisedButton secondary={true} label="Submit" onClick={this.save.bind(this)} />
      </div>
    );
  }

}

DockerImageTextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

export default DockerImageTextInput;
