import React, { useContext, Suspense, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import routes from "../routes/index";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header/DashboardHeader";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <React.Fragment>
      <div
        className={`flex h-screen ${isSidebarOpen && "overflow-hidden"
          }`}
      >
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <Main>
            <Suspense fallback={<ThemedSuspense />}>
              <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                {routes.map((route, i) => {
                  return route.path ? (
                    <Route
                      key={i}
                      exact={true}
                      path={`${route.path}`}
                      element={route.element}
                    ></Route>
                  ) : null;
                })}
              </Routes>
            </Suspense>
          </Main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
