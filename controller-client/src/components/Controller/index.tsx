import * as React from 'react';
import {IGameController} from '../../controllers';

import "./style.css";

export class ControlPanel extends React.Component<{controller? : IGameController}, {}> {

  do_up = () => {
    console.log("up");
    this.props.controller.do_up().then();
  }

  do_down = () => {
    console.log("down");
    this.props.controller.do_down().then();
  }

  render() {
    const c = this.props.controller;
    return <div className="controller">
        <button className="up" onClick={this.do_up}> Up </button>
        <button className="down" onClick={this.do_down}> Down </button>
    </div>;
  }

}
