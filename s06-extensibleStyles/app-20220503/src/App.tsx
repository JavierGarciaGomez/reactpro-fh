import { useState } from "react";
import logo from "./logo.svg";
import { Navigation } from "./routes/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return <Navigation />;
}

export default App;
