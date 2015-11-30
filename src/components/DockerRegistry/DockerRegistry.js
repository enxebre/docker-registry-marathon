import React from 'react';
import Header from './Header';
import DockerRegistryStore from '../../stores/DockerRegistryStore';
import MainSection from './MainSection';

/**
 * Retrieve the current TODO data from the TodoStore
 */
export function getDockerRegistryState() {
  return {
    allTags: DockerRegistryStore.getTags()
  };
}

class DockerRegistry extends React.Component {

  constructor(props){
    super(props);
    this.state = getDockerRegistryState();
  }

  componentDidMount() {
    DockerRegistryStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    DockerRegistryStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState(getDockerRegistryState());
  }

  render() {
    return (
      <div>
        <Header />
        <MainSection
          allTags={this.state.allTags}
        />
      </div>
    );
  }

}

export default DockerRegistry;
