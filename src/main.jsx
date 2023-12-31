import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./page/LandingPage.jsx";
import QuizPage from "./page/QuizPage.jsx";
import ResultPage from "./page/ResultPage.jsx";
import Unauthorized from "./page/Unauthorized.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/result/:innovatorType",
    element: <ResultPage />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
