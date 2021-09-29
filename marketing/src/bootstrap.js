import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

// mount function to start app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);
};

// case 1: dev/isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  devRoot && mount(devRoot, {});
}

// case 2: assume we are in container, export mount
export { mount };
