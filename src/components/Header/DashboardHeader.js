import React, { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import {Link} from "react-router-dom"

function Header() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="flex flex-col bg-white shadow-lg">
      <header className="w-full items-center h-16 z-40 w-full max-w-7xl m-auto">
        <section className="flex justify-between px-6 md:px-10 items-center h-full">
          {/* Responsive Toggler */}
          <button onClick={toggleSidebar}>
            <img src="/assets/menu.svg" alt="menu" className="block w-32px h-32px md:hidden" />
          </button>
       
          {/* Responsive Toggler */}
          <ul className="w-full flex justify-end md:justify-between items-center space-x-12 text-xs">
            <li className="hidden md:block text-sm text-text-color"><Link to="/dashboard">Dashboard</Link></li>
            <li className="flex items-center space-x-4">
              <img src="/assets/notification.svg" className="w-32px h-32px" alt="notification" />
              <img src="/assets/userIcon.svg" className="w-40px h-40px" alt="userIcon" />
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default Header;
