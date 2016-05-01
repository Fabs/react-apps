import React from 'react';
import ScoreContainer from '../container/ScoreContainer.jsx';
import TransactionsContainer from '../container/TransactionsContainer.jsx';
import ModerationContainer from '../container/ModerationContainer.jsx';
import Brand from '../presentation/Brand.jsx';

export default class SegmentsLayout extends React.Component {
  // TODO: Do something about it
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
            <ScoreContainer />
          </main>
          <aside className="l-sidebar">
            <TransactionsContainer />
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
