import logo from "./logo.png";
import "./App.css";

import { Form } from "./Form";
import { ContextExample } from "./ContextExample";
import { PromiseUseExample } from "./PromiseUseExample";
import { ActionButton } from "./ActionButton";
import OptimisticChat from "./OptimisticChat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ActionButton />

        <Form />

        <ContextExample />

        <PromiseUseExample />

        <OptimisticChat />
      </header>
    </div>
  );
}

export default App;
