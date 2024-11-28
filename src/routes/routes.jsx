import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Subject from "../pages/Subject";
import PdfView from "../pages/PdfView";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/subject",
    element: <Subject />,
  },
  {
    path: "/pdf-listings",
    element: <PdfView />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
