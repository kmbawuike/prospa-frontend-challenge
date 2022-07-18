import React from "react";
import Invoice from "../pages/Dashboard/Invoice";
import Security from '../pages/Dashboard/Security'
import Management from "../pages/Dashboard/Management";
import Support from "../pages/Dashboard/Support"
import Dashboard from "../pages/Dashboard";


const routes = [
  {
    path: "home", // the url
    element: <Dashboard />, // view rendered
  },
  {
    path: "invoice", // the url
    element: <Invoice />, // view rendered
  },
  {
    path: "management", // the url
    element: <Management />, // view rendered
  },
  {
    path: "security", // the url
    element: <Security />, // view rendered
  },
  {
    path: "support", // the url
    element: <Support />, // view rendered
  },
];

export default routes;
