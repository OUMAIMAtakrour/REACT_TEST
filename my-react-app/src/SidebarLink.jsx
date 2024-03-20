import * as React from "react";

function SidebarLink({ icon, children }) {
    return (
      <div className="flex gap-3 whitespace-nowrap">
        <img src={icon} alt="" className="shrink-0 w-4 aspect-square" />
        <div>{children}</div>
      </div>
    );
  }
export default SidebarLink;
  