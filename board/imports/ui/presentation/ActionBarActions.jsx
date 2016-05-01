import React from 'react';

export default class ActionBarActions extends React.Component {
  render() {
    return <div>No pain no gain those animals</div>;
    // return (
    //   <div>
    //     {options.map((props, i) => {
    //       return (
    //         <div
    //           key={i}
    //           onClick={this.selectScoreMode.bind(this, props[0])}
    //           className="ui labeled button"
    //         >
    //           <div className={`ui button ${props[1]}`}>
    //             <i className={`icon ${iconFor(props[0])}`} />
    //             {nameFor(props[0])}
    //           </div>
    //           <a className={`ui basic ${props[1]} left pointing label`}>
    //             {props[1] === 'red' ? -1 : 1}
    //           </a>
    //         </div>);
    //     })}
    //   </div>
    // );
  }
}
