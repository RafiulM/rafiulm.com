import React from "react";
import Layout from "./Layout";
import SkillsData from "../data/skills.json";
import Image from "next/image";

export function Marquee() {
  return (
    <div className="flex overflow-x-hidden gap-6 scrollbar-hide">
      <div className="flex flex-shrink-0 gap-6 overflow-auto py-8 animate-marquee">
        {SkillsData.map((data) => {
          return (
            <div key={data.id}>
              <div className="flex flex-col w-32 h-32 items-center justify-center gap-4  py-2 ">
                <Image src={data.logo} alt={data.alt} width={72} height={72} />
                <div className="flex flex-col w-full gap-1 item-center justify-center text-center">
                  <span className="text-sm leading-none">{data.name}</span>
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
        {SkillsData.map((data) => {
          return (
            <div key={data.id}>
              <div className="flex flex-col w-32 h-32 items-center justify-center gap-4  py-2 ">
                <Image src={data.logo} alt={data.alt} width={72} height={72} />
                <div className="flex flex-col w-full gap-1 item-center justify-center text-center">
                  <span className="text-sm leading-none">{data.name}</span>
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
