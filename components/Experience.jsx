import React from "react";
import Layout from "./Layout";
import Card from "./Grids";
import ExperienceData from "../data/experience.json";
import Link from "next/link";

function Experience() {
  return (
    <Layout section="experience">
      <h2 className="font-bold text-2xl mb-4">EXPERIENCE</h2>
      <div className="flex overflow-x-scroll md:overflow-visible scrollbar-hide gap-4  px-4 md:px-0 py-4">
        {ExperienceData.map((data) => {
          return (
            <div className="flex flex-shrink-0 md:flex-shrink rounded-lg bg-white dark:bg-black dark:outline-zinc-900 dark:outline shadow-lg w-[320px] flex-col px-4 py-6 hover:scale-[1.03] duration-500 ease-in-out">
              <div className="flex flex-col">
                <span className="italic text-sm">{data.year}</span>
                <span className="flex flex-col w-full font-bold text-lg">
                  {data.company}
                </span>
                <span className="flex flex-col w-full text-sm">
                  {data.title}
                </span>
              </div>

              <span className="mt-4 font-semibold text-sm md:text-sm">
                Responsibilities
              </span>

              <ul className="mt-1 text-xs list-disc list-outside ml-4">
                {data.jobdesc.map((jobdesc, index) => {
                  return <li key={index}>{jobdesc}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Experience;
