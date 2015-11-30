import React from 'react';

import App from './components/App';
import Home from './pages/Home';
import NotFound from './pages/NotFoundPage';

export default {
  component: require('./components/App'),
  childRoutes: [
    { path: '/',
      indexRoute: {
        getComponent: (location, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./pages/Home'))
          })
        }
      },
    },
    { path: '*',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./pages/NotFoundPage'))
        })
      }
    }
  ]
}
