import React from 'react';
import ActionBarActions from '../presentation/ActionBarActions.jsx';
import ActionBarBegin from '../presentation/ActionBarBegin.jsx';
import ActionBarPlayers from '../presentation/ActionBarPlayers.jsx';
import ActionBarConfirmation from '../presentation/ActionBarConfirmation.jsx';
import {scoreSetType, scoreSetPlayer, scoreGrant, scoreGrantFinish, scoreSetActing} from '../../actions/scoring.js';
import {iconFor, imageFor, nameFor} from '../simbology.js';

export default class ActionBarContainer extends React.Component {
  selectScoreMode(scoreType) {
    this.context.store.dispatch(scoreSetType(scoreType));
  }

  selectPlayer(evt) {
    this.context.store.dispatch(scoreSetPlayer(evt.target.value));
  }

  confirmTransaction() {
    this.context.store.dispatch(scoreGrant(this.props.scoring));
  }

  abortTransaction() {
    this.context.store.dispatch(scoreGrantFinish());
  }

  toggleAction() {
    const step = this.props.scoring.step;
    if (step === 1) {
      this.context.store.dispatch(scoreSetActing());
    } else {
      this.context.store.dispatch(scoreGrantFinish());
    }
  }

  renderControl(step) {
    console.log(step);
    if (step === 0) {
      return <div style={{height: '16px'}}></div>;
    } else {
      return (
        <ActionBarBegin
          active={this.props.scoring.step === 1}
          onClick={this.toggleAction.bind(this)}
        />);
    }
  }

  renderStep(step) {
    switch (step) {
    case 1:
      return '';
    case 2:
      const options = [['coffee', 'green'], ['bread', 'green'], ['joke', 'red'],
        ['mess', 'red']];

      const transaction = Object.assign({},
          this.props.scoring,
          {owner: 'Você', points: 1});

      return(<div className="selectors">
        <ActionBarActions options={options}/>
        <ActionBarPlayers players={this.props.players} />
        <ActionBarConfirmation transaction={transaction} />
      </div>);
    case 3:
      return '';
    default:
      return (<span style={{color: 'red', marginLeft: 20}}>
          Seu cadastro precisa ser aprovado para poder distribuir Pontos!
      </span>);
    }
  }

  // TODO: REFACTOR control state and callbacks only
  render() {
    console.debug('RENDER', this);
    if (!this.props.auth.online) {return (<div></div>);}

    let classNameOption = '';
    if (this.props.scoring.step !== 1) {
      classNameOption = 'actionArea';
    }
    return (
      <div className="actionBar">
        {this.renderControl(this.props.scoring.step)}
        <div className={classNameOption}>
          {this.renderStep(this.props.scoring.step)}
        </div>
      </div>
    );
  }
}

// TODO: REFACTOR connect
ActionBarContainer.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};

ActionBarContainer.propTypes = {
  scoring: React.PropTypes.object,
};
