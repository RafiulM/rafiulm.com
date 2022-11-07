import React from "react";

function Layout({children}) {
  return (
    <div className="flex flex-col max-w-7xl px-4 py-6 w-full">
      {children}
    </div>
  );
}

export default Layout;
