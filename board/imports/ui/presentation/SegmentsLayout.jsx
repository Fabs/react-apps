import React from 'react';
import ScoreContainer from '../container/ScoreContainer.jsx';
import TransactionsContainer from '../container/TransactionsContainer.jsx';
import ActionBar from '../container/ActionBarContainer.jsx';

export default class SegmentsLayout extends React.Component {
  render() {
    return (
      <div className="ui stackable container">
        <div className="ui menu header">
          <span className="ui uix greyAccent item">
            <i className="ui icon coffee"/> + <i className="ui icon heart"/> = <i className="ui icon smile"/>
          </span>
          <ActionBar className="ui item right floated"/>
        </div>
        <ScoreContainer className='ui' players={ this.props.state.players }/>
        <TransactionsContainer className='ui' transactions={ this.props.state.transactions }/>
        <a href="https://loja.reativo.com/" target="_blank">Acesso a loja</a>
      </div>
    );
  }
}

