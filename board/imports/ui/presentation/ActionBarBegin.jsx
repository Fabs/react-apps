import React from 'react';

export default class ActionBarBegin extends React.Component {
  render() {
    return (
      <a className="actionStart" onClick={this.props.onClick}>
        <i className="add square icon" />
        Adicionar Pontos
      </a>
    );
  }
}
