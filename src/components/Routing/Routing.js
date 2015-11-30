import React from 'react';
import { RouteHandler, Link } from 'react-router';
import { Router, Route } from 'react-router';
import Routes from '../../routes';
import createBrowserHistory from 'history/lib/createBrowserHistory'

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/dark-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

class Routing extends React.Component {

  //TODO: This is not being tested. Context object is empty in components. Sort out the context properly.
  static childContextTypes = {
    onInsertCss: React.PropTypes.func,
    onSetTitle: React.PropTypes.func,
    onSetMeta: React.PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value
    };
  }

  render() {

    return (
      <Router history={createBrowserHistory()}>
        { Routes }
      </Router>
    );
  }
}

export default Routing;
