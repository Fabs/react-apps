import React from 'react';
import ScoreContainer from '../container/ScoreContainer.jsx';
import TransactionsContainer from '../container/TransactionsContainer.jsx';
import LoginBarContainer from '../container/LoginBarContainer.jsx';
import ModerationContainer from '../container/ModerationContainer.jsx';

export default class SegmentsLayout extends React.Component {
  renderModerationPanel() {
    if (this.context.state.auth.status !== 'admin') {
      return '';
    }
    return (
      <div>
        <h2 className="ui dividing header">Moderação</h2>
        <ModerationContainer className="ui" />
      </div>
    );
  }

  render() {
    console.debug('RENDER', this);
    return (
      <div className="l-container">
        <header className="l-header">
          <div className="brand">

            <span className="ui uix greyAccent item">
              <i className="ui icon coffee"/> + <i className="ui icon heart"/> = <i className="ui icon smile"/>
            </span>
            <LoginBarContainer className="ui item right floated"/>

          </div>
        </header>
        <div className="l-body">
          <main className="l-content">

            <h2 className="ui dividing header">Pontos</h2>
            <ScoreContainer className="ui" />
            <h2 className="ui dividing header">Links</h2>
            <a href="https://loja.reativo.com/" target="_blank">Acesso a loja</a>

          </main>
          <aside className="l-sidebar">

            <h2 className="ui dividing header">Auditoria</h2>
            <TransactionsContainer className="ui" />
            {this.renderModerationPanel()}

          </aside>
        </div>
      </div>
    );
  }
}

// TODO: REFACTOR connect
SegmentsLayout.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
