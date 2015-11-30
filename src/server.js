import 'babel/polyfill';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import routes from './routes';
import { match, RoutingContext } from 'react-router'
import { renderToString } from 'react-dom/server'

const server = express();
server.set('port', (process.env.SERVER_PORT || 3000));
server.set('marathonUri', (process.env.MARATHON_URI || 'marathon:8080'));
server.use(express.static(path.join(__dirname, 'public')));

// The top-level React component + HTML template for it
const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

require('./server-api')(server);

// TODO: clarify the RoutingContext render side.
server.get('*', function(req, res, next) {
  try {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      console.log(req.url);
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        let data = { title: '', description: '', css: '', app: '' };
        let css = [];
        // data.app = renderToString(<RoutingContext
        //   onInsertCss = { value => css.push(value) }
        //   onSetTitle = { value => data.title = value }
        //   onSetMeta = {(key, value) => data[key] = value }
        // {...renderProps} />);

        data.css = css.join('');
        let html = template(data);
        res.status(200).send(html);
      } else {
        res.status(404).send('Not found')
      }
    })
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(server.get('port'), () => {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
