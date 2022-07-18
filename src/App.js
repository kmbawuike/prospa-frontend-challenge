import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const Layout = lazy(() => import("./containers/Layout"));
const Auth = lazy(() => import("./pages/Auth"));


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/dashboard/*" element={<Layout />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
