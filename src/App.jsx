import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Second() {
  return (
    <div>
      <h1>Second</h1>
    </div>
  );
}

function Router({ path, element }) {
  return null;
}

function App() {
  return (
    <div className="App">
      <Router path="/" element={<Home />} />
      <Router path="/second" element={<Second />} />
    </div>
  );
}

export default App;
