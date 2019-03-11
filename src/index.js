import ReactDOM from 'react-dom';
import React from "react";

let root;
let App;
function init() {
App = require('./components/App.js').default;
root = ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
console.log("render!")
}

init();

if (module.hot) module.hot.accept('./components/App', init);
