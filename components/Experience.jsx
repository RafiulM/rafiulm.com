import React from "react";
import Layout from "./Layout";
import Card from "./Grids";
import ExperienceData from "../data/experience.json";
import Link from "next/link";

function Experience() {
  return (
    <Layout>
      <h2 className="font-bold text-2xl mb-4">EXPERIENCE</h2>
      <div className="flex overflow-scroll gap-4 scrollbar-hide px-4 py-2">
        {ExperienceData.map((data) => {
          return (
            <Link key={data.id} href={data.link}>
              <div className="flex flex-shrink-0 rounded-lg bg-white shadow-lg w-[320px] flex-col px-4 py-6">
                <div className="flex flex-col">
                  <span className="italic font-[300] text-sm">{data.year}</span>
                  <span className="flex flex-col w-full font-bold text-lg">
                    {data.company}
                  </span>
                  <span className="flex flex-col w-full text-sm font-[300]">
                    {data.title}
                  </span>
                </div>

                <span className="mt-4 font-semibold text-sm">
                  Responsibilities
                </span>

                <ul className="mt-1 text-xs font-[300] list-disc list-outside ml-4">
                  {data.jobdesc.map((jobdesc, index) => {
                    return <li key={index}>{jobdesc}</li>;
                  })}
                </ul>

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
