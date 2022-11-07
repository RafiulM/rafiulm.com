import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-4 bg-black px-2 ">
      <span className="text-white text-sm text-center font-[300]">
        Thanks for visiting my website! - Rafiul
      </span>
      <div className="group flex gap-1 group">
        <a
          href="https://github.com/RafiulM/rafiulm-web"
          target="_blank"
          rel="noreferrer"
          className="group flex gap-1"
        >
          <AiFillGithub className="text-white group-hover:text-primary" />
          <span className="text-white group-hover:text-primary italic text-xs">
            Code Repository
          </span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
