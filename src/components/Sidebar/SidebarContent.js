import React from "react";
import routes from "../../routes/sidebar";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";

function SidebarContent() {
  return (
    <div className="h-full flex flex-col justify-between">
      <section>
        <section className="flex justify-between items-center p-4">
          <Link to="/dashboard" className="flex items-center">
            <img src="/assets/account.png" className="mr-2 w-40px h-40px" alt="account" />
            <section>
              <h6 className="text-sm mb-1">Clayvant Inc</h6>
              <p className="text-xs text-text-color">Manage account</p>
            </section>

          </Link>
          <Dropdown />
        </section>
        <nav className="mt-1">
          <div>
            {routes.map((route, i) => (
              <NavLink
                key={i}
                to={`/dashboard${route.path}`}
                className="w-full font-thin flex items-center p-4 my-2"
              >
                <span className="text-left text-black">
                  <img src={`/assets/${route.icon}.svg`} alt="sidebar-icon" className="w-16px h-16px" />
                </span>
                <span className="mx-4 text-sm font-normal text-text-color">{route.name}</span>
              </NavLink>
            ))}

          </div>
        </nav>
      </section>
      <Link to="/dashboard" className="p-4">
      <img src="/assets/prospa-dark.svg" className="h-24px w-108.95px" alt="logo" />
      </Link>
  
    </div>
  );
}

export default SidebarContent;
