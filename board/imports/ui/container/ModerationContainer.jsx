import React from 'react';
import { approve } from '/imports/actions/auth.js';

export default class ModerationContainer extends React.Component {
  approve(uid){
    console.log('approve');
    Meteor.call('approve.user',uid);
  }

  render() {
    console.debug('RENDER',this);
    const me = this.context.state.auth.user;
    const moderatables = this.context.state.moderatables;

    return (
      <ul>
        {moderatables.filter((u) => u._id != me).map((moderatable, i) => {
          return <li key={i}>
            <a onClick={this.approve.bind(this, moderatable._id)}>
              {moderatable.profile.name}
            </a>
          </li>;
        })}
      </ul>
    );
  }
}

ModerationContainer.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
