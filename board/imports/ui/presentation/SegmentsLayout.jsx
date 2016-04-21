import React from 'react';
import ScoreContainer from '../container/ScoreContainer.jsx';
import TransactionsContainer from '../container/TransactionsContainer.jsx';
import LoginBarContainer from '../container/LoginBarContainer.jsx';
import ModerationContainer from '../container/ModerationContainer.jsx';

export default class SegmentsLayout extends React.Component {
  render() {
    console.debug('RENDER',this);
    return (
      <div>
        <div className="column row">
          <div className="ui menu header">
            <span className="ui uix greyAccent item">
              <i className="ui icon coffee"/> + <i className="ui icon heart"/> = <i className="ui icon smile"/>
            </span>
            <LoginBarContainer className="ui item right floated"/>
          </div>
        </div>
        <br/>
        <div className="ui two column stackable grid">
          <div className="column ten wide">
            <h2 className="ui dividing header">Pontos</h2>
            <ScoreContainer className='ui' />

            <h2 className="ui dividing header">Links</h2>
            <a href="https://loja.reativo.com/" target="_blank">Acesso a loja</a>
          </div>

          <div className="column six wide">
            <h2 className="ui dividing header">Auditoria</h2>
            <TransactionsContainer className='ui' />

            <h2 className="ui dividing header">Moderação</h2>
            <ModerationContainer className='ui' />
          </div>
        </div>
      </div>
    );
  }
}
