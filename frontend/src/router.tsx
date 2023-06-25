// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import Notes from "./pages/Notes/Notes";
import Erro from "./pages/Erro/Erro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
  {
    path: "*",
    element: <Erro />,
  },
]);

export default router;
