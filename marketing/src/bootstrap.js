import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount function to start app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// case 1: dev/isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// case 2: assume we are in container, export mount
export { mount };
