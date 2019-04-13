import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {IGame} from '../../stores/game';

@inject("game")
@observer
export class Board extends React.Component<{game? : IGame}, {}> {

  render() {
    return <div className="board">
      hello world {JSON.stringify(this.props.game)}
    </div>
  }

}
