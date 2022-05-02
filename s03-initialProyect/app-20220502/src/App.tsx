import { useState } from "react";
import logo from "./logo.svg";
import { Navigation } from "./routes/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
