import React, { Component } from 'react';
import DockerRegistryActions from '../../actions/DockerRegistryActions';
import DockerImageTextInput from './DockerImageTextInput';

export default class Header extends Component {

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  onSave(array) {
    DockerRegistryActions.refreshTags(array);
  }

  render() {
    return (
      <header id="header">
        <h2>Docker Image</h2>
        <DockerImageTextInput
          id="DockerImage"
          placeholder="Your docker image."
          onSave={this.onSave}
        />
      </header>
    );
  }
}
