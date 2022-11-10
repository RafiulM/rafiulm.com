import React from "react";
import Layout from "./Layout";
import Project from "../data/projects.json";
import Image from "next/image";
import { ButtonSquare } from "./Buttons";
import { AiFillLock } from "react-icons/ai";

function Projects() {
  return (
    <Layout>
      <h2 className="font-bold text-2xl mb-4">PROJECTS</h2>
      <div className="grid grid-cols-2 gap-4">
        {Project.map((data) => {
          return (
            <div
              key={data.id}
              className="flex justify-start flex-col h-full bg-white outline outline-2 outline-gray-200 rounded-md overflow-hidden"
            >
              <div className="flex flex-shrink-0 object-cover">
                <Image
                  src={data.image}
                  height={180}
                  width={320}
                  className="bg-gray-500 h-3/4 w-full object-cover"
                ></Image>
              </div>
              <div className="flex flex-shrink justify-between gap-4 h-full flex-col px-3 py-2">
                <div>
                  <div className="flex flex-wrap gap-1">
                    {data.tags.map((tag, id) => {
                      return (
                        <span
                          key={id}
                          className="flex px-2 py-[2px] bg-gray-200 text-[10px] text-gray-500 rounded-sm hover:bg-gray-300 ease-in-out duration-500 cursor-default"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-col justify-center my-3">
                    <h3 className="font-bold leading-4">{data.name}</h3>
                  </div>
                  <p className="mt-2 text-xs">{data.description}</p>
                </div>
                <div className="flex gap-1 w-full">
                  <ButtonSquare link={data.primary_link}>
                    {data.private_project ? (
                     <div className="flex justify-center items-center gap-1">
                     <AiFillLock />
                     Private Project
                   </div>
                    ) : (
                      data.buttontext
                    )}
                  </ButtonSquare>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Projects;
