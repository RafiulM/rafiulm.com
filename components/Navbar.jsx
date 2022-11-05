import React from "react";
import Image from "next/image";
import NavData from "../data/navbar.json";

function Navbar() {
  return (
    <nav className="flex w-full h-20 justify-center items-center px-4">
      <div className="flex w-full max-w-7xl justify-between font-archivo font-n">
        <div className="flex justify-center items-center h-full">
          <img src="/iul-logo.svg" className="rounded-3xl" />
        </div>
        <ul className="hidden list-none h-full justify-center items-center font-normal">
          {NavData.map((navlink) => {
            return (
              <a key={navlink.id} href={navlink.link}>
                <li className="px-4 font-">{navlink.menu}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
