import './index.css';
import { App } from './App';

import { StrictMode } from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>
  , document.getElementById("root")
);
