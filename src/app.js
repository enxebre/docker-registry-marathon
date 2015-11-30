import 'babel/polyfill';
import FastClick from 'fastclick';
import React from 'react';
import Router from 'react-router';
import Routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import NotFound from './pages/NotFoundPage';
import Home from './pages/Home';
import App from './components/App';
import Routing from './components/Routing';
import ReactDom from 'react-dom';

var  childContextTypes =   {
  onInsertCss: value => css.push(value),
  onSetTitle: value => data.title = value,
  onSetMeta: (key, value) => data[key] = value
};

let onSetMeta = (name, content) => {
  // Remove and create a new <meta /> tag in order to make it work
  // with bookmarks in Safari
  let elements = document.getElementsByTagName('meta');
  [].slice.call(elements).forEach((element) => {
    if (element.getAttribute('name') === name) {
      element.parentNode.removeChild(element);
    }
  });
  let meta = document.createElement('meta');
  meta.setAttribute('name', name);
  meta.setAttribute('content', content);
  document.getElementsByTagName('head')[0].appendChild(meta);
};

function run() {
  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  //Needed for React Developer Tools
  window.React = React;

  ReactDom.render((
  <Router history={createBrowserHistory()}>
    { Routes }
  </Router>
  ), document.getElementById('app'));
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(() => FastClick.attach(document.body))
]).then(run);
