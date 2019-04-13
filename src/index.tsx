
import * as d3 from "d3";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "mobx-react";

import { Board } from "./components/Board";
import { Game } from "./stores/game";
import { KeyboardDriver } from "./drivers/keyboard";


const game = new Game();
const kbd = new KeyboardDriver(game);

const App = () => (
    <Provider game={game}>
            <Board />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("app"));

