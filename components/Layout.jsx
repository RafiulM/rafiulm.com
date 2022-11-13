import React from "react";

export function LayoutOverflow({children}){
  return (
    <div className="flex flex-col max-w-7xl w-full">
      {children}
    </div>
  )
}

function Layout({section,children}) {
  return (
    <div className="flex flex-col max-w-7xl w-full px-4 py-6 mx-auto overflow-hidden" id={section}>
      {children}
    </div>
  );
}

export default Layout;
