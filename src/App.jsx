import { useState } from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { MainLayout } from "./components";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:code" element={<Country />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
