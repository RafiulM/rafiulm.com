import React from "react";
import Layout from "./Layout";
import { skillsData } from "../data/skillsData.js";
import Image from "next/image";

export function Marquee() {
  return (
    <div className="flex overflow-x-hidden gap-6">
      <div className="flex flex-shrink-0 gap-6 overflow-auto py-8 animate-marquee">
        {skillsData.map((data) => {
          return (
            <div key={data.id}>
              <div className="flex flex-col h-32 items-center justify-center gap-4 px-4 py-2 ">
                <div className="text-gray-400 text-5xl">{data.logo}</div>
                {/* <Image src={data.logo} alt={data.alt} width={72} height={72} className=""/> */}
                <div className="flex flex-col w-full gap-1 item-center justify-center text-center">
                  <span className="font-medium text-sm leading-none">{data.name}</span>
                  <span className="text-xs text-gray-400 italic leading-none">
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
        className="flex flex-shrink-0 gap-6 overflow-x-hidden py-8 animate-marquee"
      >
        {skillsData.map((data) => {
          return (
            <div key={data.id}>
              <div className="flex flex-col h-32 items-center justify-center gap-4 px-4 py-2 ">
                <div className="text-gray-400 text-5xl">{data.logo}</div>
                {/* <Image src={data.logo} alt={data.alt} width={72} height={72} /> */}
                <div className="flex flex-col w-full gap-1 item-center justify-center text-center">
                  <span className="font-medium text-sm leading-none">{data.name}</span>
                  <span className="text-xs text-gray-400 italic leading-none">
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
