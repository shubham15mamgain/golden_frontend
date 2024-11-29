import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import PdfView from "./pages/PdfView";
import Login from "./pages/Login";
import FeaturesPage from "./pages/featurePage";
import PricingPage from "./pages/PricingPage";
import Payment from "./pages/Payment";

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
  {
    path: "/features",
    element: <FeaturesPage />,
  },

  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/payment/:price",
    element: <Payment />,
  },
]);

export default routes;
