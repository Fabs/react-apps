import React from 'react';
import {iconFor, imageFor, nameFor} from '../simbology.js';

export default class ActionBarActions extends React.Component {
  // this.selectScoreMode.bind(this, props[0])
  // {props[1] === 'red' ? -1 : 1}
  render() {
    return (
      <div className="categorySelector">
        <span className="title">Selecione um Colega</span>
        <ul className="categories">
          {this.props.options.map((props, i) => {
            return (
              <li key={i}>
                <i className={`icon ${iconFor(props[0])} circular`} />
                {`(${props[1] === 'red' ? -1 : 1}) ${nameFor(props[0])}`}
              </li>);
          })}
        </ul>
      </div>
    );
  }
}
