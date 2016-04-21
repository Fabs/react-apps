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
        <td><h2>{this.pointsLabel(this,'balance')}</h2></td>
        <td><h3>{this.pointsLabel(this,'coffee')}</h3></td>
        <td><h3>{this.pointsLabel(this,'bread')}</h3></td>
        <td><h3>{this.pointsLabel(this,'joke')}</h3></td>
        <td><h3>{this.pointsLabel(this,'mess')}</h3></td>
        <td className="right aligned"><h2>{this.props.total}</h2></td>
      </tr>
    )
  };
}
