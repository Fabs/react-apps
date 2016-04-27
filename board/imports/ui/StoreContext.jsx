import React from 'react';

// TODO: REFACTOR use <Provider>
export default class StoreContext extends React.Component {
  getChildContext() {
    return {store: this.props.store, state: this.props.store.getState()};
  }

  render() {
    return this.props.children;
  }
}

StoreContext.childContextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
