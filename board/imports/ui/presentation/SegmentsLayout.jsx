import React from 'react';
import ScoreContainer from '../container/ScoreContainer.jsx';
import TransactionsContainer from '../container/TransactionsContainer.jsx';
import LoginBarContainer from '../container/LoginBarContainer.jsx';

export default class SegmentsLayout extends React.Component {
  render() {
    return (
      <div className="ui stackable container">
        <div className="ui menu header">
          <span className="ui uix greyAccent item">
            <i className="ui icon coffee"/> + <i className="ui icon heart"/> = <i className="ui icon smile"/>
          </span>
          <LoginBarContainer className="ui item right floated" auth={ this.props.state.auth }/>
        </div>

        <h2 className="ui dividing header">Pontos</h2>
        <ScoreContainer className='ui' {... this.props.state}/>

        <h2 className="ui dividing header">Auditoria</h2>
        <TransactionsContainer className='ui' transactions={ this.props.state.transactions }/>


        <h2 className="ui dividing header">Links</h2>
        <a href="https://loja.reativo.com/" target="_blank">Acesso a loja</a>
        <br/>
      </div>
    );
  }
}

