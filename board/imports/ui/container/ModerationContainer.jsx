import React from 'react';
import {approve} from '../../actions/auth.js';

export default class ModerationContainer extends React.Component {
  approve(uid) {
    this.context.store.dispatch(approve(uid));
  }

  render() {
    console.debug('RENDER', this);
    const moderatables = this.context.state.moderatables;

    return (
      <ul className="moderation">
        Moderação
        {moderatables.map((moderatable, i) => {
          return (<li key={i}>
            <a onClick={this.approve.bind(this, moderatable._id)}>
              {moderatable.profile.name}
            </a>
          </li>);
        })}
      </ul>
    );
  }
}

// TODO: REFACTOR connect
ModerationContainer.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
