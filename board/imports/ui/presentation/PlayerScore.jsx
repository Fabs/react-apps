import React from 'react';
import { iconFor, imageFor } from '/imports/ui/simbology.js'

export default class PlayerScore extends React.Component {
  pointsLabel(content, key){
    const value = content.props[key];
    if(value != 0 && !isNaN(value)){
      return <span>{value} <i className={'ui icon ' + iconFor(key)}/></span>
    }
  }

  render() {
    console.debug('RENDER',this);
    return (
      <tr>
        <td>
          <img className="ui tiny circular image" src={ imageFor(this.props.name) }/>
          {this.props.name}
        </td>
        <td>{this.pointsLabel(this,'balance')}</td>
        <td>{this.pointsLabel(this,'coffee')}</td>
        <td>{this.pointsLabel(this,'bread')}</td>
        <td>{this.pointsLabel(this,'joke')}</td>
        <td>{this.pointsLabel(this,'mess')}</td>
        <td className="right aligned">{this.props.total}</td>
      </tr>
    )
  };
}
