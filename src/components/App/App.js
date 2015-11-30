import React from 'react';
import { RouteHandler, Link } from 'react-router';
import withContext from '../../decorators/withContext';
import mui, { AppBar, IconButton } from 'material-ui';
import { Router, Route } from 'react-router';

const ThemeManager = require('material-ui/lib/styles/theme-manager');
//TODO: Dark Theme does not seem to be taking effect.
const LightRawTheme = require('../../themes/light');
const Colors = require('material-ui/lib/styles/colors');

@withContext
class App extends React.Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = { muiTheme: ThemeManager.getMuiTheme(LightRawTheme) };
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.red400,
    });

     this.setState({muiTheme: newMuiTheme});
  }

  render() {
    let githubButton = (
      <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/capgemini/react-scaffold"
        linkButton={true}
      />
    );

    let containerStyle = {
      padding: '20',
    };

    return (
      <div>
        <header>
        <AppBar
            title="Docker Deployer"
            iconElementRight={githubButton} />
        </header>
        <section style={containerStyle} className="content">
            {this.props.children}
        </section>

      </div>
    );
  }
}

export default App;
