import React from 'react';
import ScoreContainer from '../container/ScoreContainer.jsx';
import TransactionsContainer from '../container/TransactionsContainer.jsx';
import ModerationContainer from '../container/ModerationContainer.jsx';
import Brand from '../presentation/Brand.jsx';

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
          <Brand />
        </header>
        <div className="l-body">
          <main className="l-content">
            <h2 className="title">Pontos</h2>
            <ScoreContainer className="ui" />
          </main>
          <aside className="l-sidebar">
            <TransactionsContainer />
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
