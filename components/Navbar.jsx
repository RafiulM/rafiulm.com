import { useState, useEffect } from "react";
import Image from "next/image";
import NavData from "../data/navbar.json";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="fixed w-full bg-white/60 dark:bg-black/60 z-10 backdrop-blur-md ">
      <div className="flex w-full h-20 justify-center items-center px-4">
        <div className="flex w-full max-w-7xl justify-between font-archivo font-n">
          <div className="flex justify-center items-center h-full">
            <img src="/iul-logo.svg" className="rounded-3xl" />
          </div>
          <button
            className="group flex justify-center items-center md:hidden"
            onClick={handleOpen}
          >
            {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
          <ul className="hidden md:flex list-none h-full justify-center items-center font-normal">
            {NavData.map((navlink) => {
              return (
                <a key={navlink.id} href={navlink.link}>
                  <li className="px-4">{navlink.menu}</li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
