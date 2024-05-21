import logo from "./logo.png";
import "./App.css";

import { Features } from "./Features";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>čaukísek pupíčci</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />

        <Features />
      </header>
    </div>
  );
}

export default App;
