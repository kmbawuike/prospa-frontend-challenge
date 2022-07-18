import React from "react";
import SidebarContent from "./SidebarContent";

function DesktopSidebar() {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-15 overflow-y-auto md:block shadow-md bg-white">
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
