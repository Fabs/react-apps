import React from 'react';
import LoginBarContainer from '../container/LoginBarContainer.jsx';
import ModerationContainer from '../container/ModerationContainer.jsx';
import Logo from './Logo.jsx';

export default class Brand extends React.Component {
  // TODO: Do something about it
  renderModerationPanel() {
    if (this.context.state.auth.status !== 'admin') {
      return '';
    }
    return (
      <div>
        <ModerationContainer />
      </div>
    );
  }

  render() {
    return (
      <div className="brand">
        <div className="actionLine">
          <LoginBarContainer />
        </div>

        {this.renderModerationPanel()}
        <Logo />

        <h1>
          Placar <a target="_blank" href="http://loja.reativo.com" className="externalStore handwritten"> da Loja</a>
        </h1>
        <div className="actionLine"></div>
      </div>
    );
  }
}


// TODO: REFACTOR connect
Brand.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
