import React from "react";
import Counter, { ALERT_COLOR, SUCCESS_COLOR } from "./Counter";
import { thing } from "./testyo/y/here";
// import { thing } from "./testyo/y/here";
const App = () => {
  return (
    <div>
      <h1>App Component Here!!!!</h1>

      <Counter teenCrush="Nic Jonas" />
      <Counter teenCrush="J Beb" />
      <Counter teenCrush="Justin nsync timerlake" />
      <Counter teenCrush="da rok" />
    </div>
  );
};

export default App;
