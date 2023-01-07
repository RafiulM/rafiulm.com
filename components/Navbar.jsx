import { useState, useEffect } from "react";
import Image from "next/image";
import NavData from "../data/navbar.json";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { ThemeChanger } from "./Theme";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav
      className={
        open
          ? "fixed w-full bg-white dark:bg-black z-50 duration-700 ease-in-out"
          : "fixed w-full bg-white/60 dark:bg-black/60 backdrop-blur-md z-50 duration-700 ease-in-out"
      }
    >
      <div className="flex w-full h-20 justify-center items-center px-4">
        <div className="flex w-full max-w-7xl justify-between h-full items-center font-archivo font-n">
          <div className="flex justify-center items-center h-full">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <Image
                src="/iul-logo.svg"
                height={36}
                width={36}
                alt="iul logo"
                className="rounded-3xl"
              />
            </Link>
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
                      className="flex items-center h-full hover:text-primary duration-300 ease-in-out"
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
              aria-label="navigation menu"
              onClick={handleOpen}
            >
              {open ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
            <div
              className={
                open
                  ? "fixed right-0 top-20 px-8 py-4 w-full h-screen bg-white dark:bg-black backdrop-blur-xl ease-in-out duration-700 md:hidden"
                  : "fixed right-[-100%] top-16 bg-transparent px-8 py-4 w-full h-screen bg-white ease-in-out duration-700 md:hidden"
              }
            >
              <ul className="flex flex-col list-none gap-8 h-1/2 justify-center items-center font-normal my-auto text-xl">
                {NavData.map((navlink) => {
                  return (
                    <li
                      key={navlink.id}
                      className="flex items-center cursor-pointer h-full px-4"
                    >
                      <Link
                        onClick={handleOpen}
                        activeClass="active"
                        to={navlink.link}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="flex items-center h-full hover:text-primary duration-300 ease-in-out"
                      >
                        {navlink.menu}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
