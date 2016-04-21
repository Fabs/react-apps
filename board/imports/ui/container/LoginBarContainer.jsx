import React from 'react';
import AccountsUIWrapper from '../presentation/AccountsUIWrapper.jsx';

export default class LoginBarContainer extends React.Component {
  render() {
    console.debug('RENDER',this);
    return (
      <div className={this.props.className}>
        <AccountsUIWrapper />
      </div>
    );
  }
}
