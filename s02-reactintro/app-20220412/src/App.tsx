import React, { Fragment } from "react";
import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterRefactor } from "./bases/counterReducer/CounterRefactor";
import { CounterReducerComponent } from "./bases/CounterReducerComponent";
import { CounterRef } from "./bases/CounterRef";

function App() {
  return (
    <Fragment>
      <h1>React</h1>
      <h2>Lesson 10. Component</h2>
      <Counter value={15} />
      <h2>Lesson 12. Manejar objeto como estado</h2>
      <CounterBy />
      <h2>Lesson 14. Use Effect</h2>
      <CounterEffect />
      <h2>Lesson 16. useRef y TimeLines</h2>
      <CounterRef />
      <h2>Lesson 17. Custom Hook</h2>
      <CounterHook />
      <h2>Lesson 19. useReducer</h2>
      <CounterReducerComponent />
      <h2>Lesson 22. actions, interfaces, reducer</h2>
      <CounterRefactor />
    </Fragment>
  );
}

export default App;
