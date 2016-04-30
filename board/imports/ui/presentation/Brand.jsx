import React from 'react';
import LoginBarContainer from '../container/LoginBarContainer.jsx';
import Logo from './Logo.jsx';

export default class Brand extends React.Component {
  render() {
    return (
      <div className="brand">
        <div className="actionLine">
          <LoginBarContainer />
        </div>

        <Logo />

        <h1>
          Placar <a target="_blank" href="http://loja.reativo.com" className="externalStore handwritten"> da Loja</a>
        </h1>
        <div className="actionLine"></div>
      </div>
    );
  }
}
