import React from 'react';

export default class ModerationContainer extends React.Component {
  render() {
    const me = this.context.state.auth.user;
    const moderatables = this.context.state.moderatables;

    return (
      <ul>
        {moderatables.filter((u) => u._id != me).map((moderatable, i) => {
          console.log(moderatable)
          return <li key={i} onClick="">{moderatable.profile.name} {moderatable.status}</li>;
        })}
      </ul>
    );
  }
}

ModerationContainer.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
