import React, { PropTypes } from 'react';
import DockerRegistry from '../../components/DockerRegistry/DockerRegistry';

class Home extends React.Component {
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    //let title = 'Home';
    //this.context.onSetTitle(title);
    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <DockerRegistry />
        </div>
      </div>
    );
  }

}

export default Home;
