import React from "react";
import Layout from "./Layout";
import { skillsData } from "../data/skillsData.js";
import Image from "next/image";

export function Marquee() {
  return (
    <div className="flex overflow-x-hidden gap-6">
      <div className="flex flex-shrink-0 gap-6 md:gap-12 overflow-auto py-8 animate-marquee">
        {skillsData.map((data) => {
          return (
            <div key={data.id}>
              <div className=" group flex flex-col h-32 items-center justify-center gap-4 px-4 py-2">
                <div className="text-gray-400 dark:text-white text-5xl md:text-7xl group-hover:text-primary group-hover:scale-110 duration-700 ease-in-out">
                  {data.logo}
                </div>
                <div className="flex flex-col w-full gap-1 item-center justify-center text-center group-hover:text-primary duration-300 ease-in-out">
                  <span className="font-medium text-sm md:text-[16px] leading-none">
                    {data.name}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 italic leading-none group-hover:text-primary duration-300 ease-in-out">
                    {data.desc}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        aria-hidden="true"
        className="flex flex-shrink-0 gap-6 md:gap-12 overflow-x-hidden py-8 animate-marquee"
      >
        {skillsData.map((data) => {
          return (
            <div key={data.id}>
              <div className="group flex flex-col h-32 items-center justify-center gap-4 px-4 py-2">
                <div className="text-gray-400 dark:text-white text-5xl md:text-7xl group-hover:text-primary group-hover:scale-110 duration-700 ease-in-out">
                  {data.logo}
                </div>
                <div className="flex flex-col w-full gap-1 item-center justify-center text-center group-hover:text-primary  duration-300 ease-in-out">
                  <span className="font-medium text-sm md:text-[16px] leading-none">
                    {data.name}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 italic leading-none group-hover:text-primary duration-300 ease-in-out">
                    {data.desc}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Layout>
      <h2 className="font-bold text-2xl mb-4">TOOLS</h2>
      <Marquee />
    </Layout>
  );
}

export default Skills;
