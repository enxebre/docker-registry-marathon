import React, { PropTypes } from 'react';
import DockerRegistryActions from '../../actions/DockerRegistryActions';
import TagItem from './TagItem';

class MainSection extends React.Component {


  render() {
    // This section should be hidden by default
    // and shown when there are todos.
    // if (this.props.allTodos.length < 1) {
    //   return null;
    // }

    var allTags  = this.props.allTags;
    var tags = [];
    var tag = this.props.tag;

    let containerStyle = {
      ul: {
        listStyleType: "none",
        margin: 0,
        padding: 0
      },
      section: {
        marginTop: 30
      }
    };

    for (var key in allTags ) {
      tags.push(<TagItem key={key} tag={allTags[key]} />);
    }

    return (
      <section id="main" style={containerStyle.section}>
        <h3>Builds</h3>
        <ul style={containerStyle.ul} id="tag-list">{tags}</ul>
      </section>
    );
  }

}

MainSection.propTypes = {
  allTags: PropTypes.array.isRequired
};

export default MainSection;
