import React, { PropTypes } from 'react';
import DockerRegistryActions from '../../actions/DockerRegistryActions';
import DeployButton from './DeployButton';
import cx from 'classnames';

class TagItem extends React.Component {

  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  render() {
    var tag = this.props.tag;
    let containerStyle = {
      listStyleType: "none",
      padding: 20
    };

    return (
      <li style={containerStyle}
        className={cx({
          'completed': tag.complete,
          'editing': this.state.isEditing
        })}
        key={tag.id}>
        <div className="view">
          <div><b>Layer: </b>{tag.layer} </div>
          <div><b>Tag: </b>{tag.name}</div>
          <DeployButton tag={tag.name} onSave={this.onSave} />
        </div>
      </li>
    );
  }

}

TagItem.propTypes = {
   tag: PropTypes.object.isRequired
};

export default TagItem;
