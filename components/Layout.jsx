import React from "react";

function Layout({children}) {
  return (
    <div className="max-w-7xl px-4 py-6 w-full mx-auto">
      {children}
    </div>
  );
}

export default Layout;
