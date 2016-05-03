import React from 'react';
import {scoreSetType} from '../../actions/scoring.js';
import {iconFor, imageFor, nameFor} from '../simbology.js';

export default class ActionBarActions extends React.Component {
  handleTypeToggle(target) {
    this.context.store.dispatch(scoreSetType(target));
  }

  render() {
    return (
      <div className="categorySelector">
        <span className="title">Selecione uma Ação</span>
        <ul className="categories">
          {this.props.options.map((props, i) => {
            if (props[0] === this.context.state.scoring.type){
              return (
                <li key={i} className={`active ${props[1]}`} onClick={this.handleTypeToggle.bind(this, props[0])}>
                  <i className={`icon ${iconFor(props[0])} circular`} />
                  {`(${props[1] === 'red' ? -1 : 1}) ${nameFor(props[0])}`}
                </li>);
            } else {
              return (
                <li key={i} className={props[1]} onClick={this.handleTypeToggle.bind(this, props[0])}>
                  <i className={`icon ${iconFor(props[0])} circular`} />
                  {`(${props[1] === 'red' ? -1 : 1}) ${nameFor(props[0])}`}
                </li>);
            }
          })}
        </ul>
      </div>
    );
  }
}

// TODO: REFACTOR connect
// TODO: Presentation components should not use context
ActionBarActions.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
