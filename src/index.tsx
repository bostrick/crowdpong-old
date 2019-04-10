
import * as d3 from "d3";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Board";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);

