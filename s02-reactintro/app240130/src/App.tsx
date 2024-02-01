import "./App.css";
import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
// import { CounterHook } from "./bases/CounterHook";
import { CounterReducerComponent } from "./bases/CounterReducer";

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <CounterBy initialValue={10} />
      {/* <CounterHook /> */}
      <CounterReducerComponent />
    </>
  );
}

export default App;
