import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <span className="logo">
        <i className="icon coffee" /> +
        <i className="icon heart " /> =
        <i className="icon smile " />
      </span>
    );
  }
}
