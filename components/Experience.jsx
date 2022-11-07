import React from "react";
import Layout from "./Layout";
import Card from "./Grids";
import ExperienceData from "../data/experience.json";
import Link from "next/link";

function Experience() {
  
  return (
    <Layout>
      <h2 className="font-bold text-2xl mb-4">EXPERIENCE</h2>
      <div className="flex flex-col gap-4">
        {ExperienceData.map((data) => {
          return (
            <Link key={data.id} href={data.link}>
              <div className="flex rounded-lg bg-white shadow-lg  flex-col px-4 py-6 border-solid border-2">
                <div className="flex flex-col">
                  <span className="italic font-[300] text-sm">{data.year}</span>
                  <span className="flex flex-col w-full font-bold text-lg">
                    {data.company}
                  </span>
                  <span className="flex flex-col w-full text-sm font-[300]">
                    {data.title}
                  </span>
                </div>

                
                {/* <ul
                  key={data.tags.indexOf()}
                  className="grid grid-rows-2 grid-cols-2 gap-2  mt-8"
                >
                  {data.tags.map((tags) => {
                    return (
                      <li className="grid place-items-center px-4 py-1 border-solid border-black border-[1px] rounded-3xl text-xs">
                        {tags}
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export default Experience;
