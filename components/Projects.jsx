import React from "react";
import Layout from "./Layout";
import Project from "../data/projects.json";
import Image from "next/image";
import { ButtonPrivate, ButtonSquare } from "./Buttons";
import { AiFillLock, AiFillGithub } from "react-icons/ai";

function Projects() {
  return (
    <Layout section="projects">
      <h2 className="font-bold text-2xl mb-4 ">MY WORK</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-4">
        {Project.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-col bg-white outline outline-2 outline-gray-200 dark:outline-zinc-900 dark:bg-black rounded-sm overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex">
                  <div className="relative">
                    {data.code == "" ? null : (
                      <a
                        href={data.code}
                        title={data.code}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white outline-white outline-3 outline hover:text-primary hover:outline-primary right-3 top-3 flex items-center rounded-md gap-2 py-2 px-3 text-xs absolute bg-black z-10 duration-300 ease-in-out"
                      >
                        <AiFillGithub size={18} /> View Code
                      </a>
                    )}
                    <Image
                      src={data.image}
                      width={800}
                      height={400}
                      objectFit="cover"
                      className="brightness-90 hover:scale-105 duration-500 ease-in-out"
                    ></Image>
                  </div>
                </div>
                <div className="flex justify-between gap-4 h-full flex-col px-3 py-2">
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {data.tags.map((tag, id) => {
                        return (
                          <span
                            key={id}
                            className="flex px-2 py-[2px] bg-gray-200 text-xs text-gray-500 rounded-sm hover:bg-gray-300 dark:hover:bg-zinc-800 dark:bg-zinc-700 dark:text-zinc-400 ease-in-out duration-500 cursor-default"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <h3 className="text-lg font-bold leading-4 mt-6">
                      {data.name}
                    </h3>
                    <p className="mt-4 text-sm">{data.description}</p>
                  </div>
                  <div className="flex gap-1 w-full mt-4">
                    {data.private_project ? (
                      <ButtonPrivate>
                        <div className="flex justify-center items-center gap-1">
                          <AiFillLock />
                          Private Project
                        </div>
                      </ButtonPrivate>
                    ) : (
                      <ButtonSquare link={data.primary_link}>
                        {data.buttontext}
                      </ButtonSquare>
                    )}
                  </div>
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
