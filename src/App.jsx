import { useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import { MainLayout } from "./components";
import ProtectedAuth from "./components/ProtectedAuth/ProtectedAuth";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/countries",
          element: (
            <ProtectedAuth>
              <Countries />
            </ProtectedAuth>
          ),
        },
        {
          path: "countries/:code",
          element: <Country />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
        {
          path: "*",
          element: <h1>not found</h1>,
        },
      ],
    },
  ]);
}

export default App;
