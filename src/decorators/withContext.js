// eslint-disable-line no-unused-vars
import React, { Component, PropTypes } from 'react';

// TODO: verify deprecation and logic of emptyFunction
//import emptyFunction from '../../node_modules/react/lib/emptyFunction';

function withContext(ComposedComponent) {
  return class WithContext extends Component {

    static propTypes = {
      context: PropTypes.shape({
        onInsertCss: PropTypes.func,
        onSetTitle: PropTypes.func,
        onSetMeta: PropTypes.func
      })
    };

    static childContextTypes = {
      onInsertCss: PropTypes.func.isRequired,
      onSetTitle: PropTypes.func.isRequired,
      onSetMeta: PropTypes.func.isRequired
    };

    getChildContext() {
      //let context = this.props.context;
      let context = this.context;
      return {
        onInsertCss: context.onInsertCss || function(){ return true},
        onSetTitle: context.onSetTitle || function(){ return true},
        onSetMeta: context.onSetMeta || function(){ return true},
      };
    }

    render() {
      let { context, ...other } = this.props; // eslint-disable-line no-unused-vars
      return <ComposedComponent {...other} />;
    }

  };
}

export default withContext;
