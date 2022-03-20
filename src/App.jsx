import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/second");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleButtonClick}>second</button>
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

function Layout() {
  return (
    <div>
      <nav></nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="second" element={<Second />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
