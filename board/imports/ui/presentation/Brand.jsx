import React from 'react';
import LoginBarContainer from '../container/LoginBarContainer.jsx';

export default class Brand extends React.Component {
  render() {
    return (
      <div className="brand">
        <div className="actionLine">
        <LoginBarContainer />
        </div>

        <span className="logo">
          <i className="icon coffee" /> +
          <i className="icon heart " /> =
          <i className="icon smile " />
        </span>

        <h1>
          Placar <a target="_blank" href="http://loja.reativo.com" className="externalStore handwritten"> da Loja</a>
        </h1>
        <div className="actionLine"></div>
      </div>
    );
  }
}
