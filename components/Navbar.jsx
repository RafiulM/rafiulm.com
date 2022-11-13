import { useState, useEffect } from "react";
import Image from "next/image";
import NavData from "../data/navbar.json";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {Link} from "react-scroll";
import { ThemeChanger } from "./Theme";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="fixed w-full bg-white/60 dark:bg-black/60 backdrop-blur-md z-50">
      <div className="flex w-full h-20 justify-center items-center px-4">
        <div className="flex w-full max-w-7xl justify-between h-full items-center font-archivo font-n">
          <div className="flex justify-center items-center h-full">
            <img src="/iul-logo.svg" className="rounded-3xl" />
          </div>
          <div className="flex h-full items-center">
            <ul className="hidden md:flex list-none h-full justify-center items-center font-normal">
              {NavData.map((navlink) => {
                return (
                  <li
                    key={navlink.id}
                    className="flex items-center cursor-pointer h-full px-4"
                  >
                    <Link
                      activeClass="active"
                      to={navlink.link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="flex items-center h-full"
                    >
                      {navlink.menu}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ThemeChanger />
            <button
              className="group flex justify-center items-center md:hidden ml-4"
              onClick={handleOpen}
            >
              {open ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
