import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

function Experience() {
  const supabaseClient = useSupabaseClient();
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    getExperienceData();
  }, []);

  const getExperienceData = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("experience")
        .select("*")
        .order('id', {ascending:false});
      if (data != null) {
        setExperienceData(data);
      }
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout section="experience">
      <h2 className="font-bold text-2xl mb-4">EXPERIENCE</h2>
      <div className="flex overflow-x-scroll scrollbar-hide gap-4  px-4 py-4">
        {experienceData.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-shrink-0 rounded-lg bg-white dark:bg-black dark:outline-zinc-900 dark:outline shadow-lg w-[320px] flex-col px-4 py-6 hover:scale-[1.03] duration-500 ease-in-out"
            >
              <div className="flex flex-col gap-1">
                <span className="italic text-sm">{data.year}</span>
                <span className="flex flex-col w-full font-bold text-lg leading-tight">
                  {data.company}
                </span>
                <span className="flex flex-col w-full text-sm">
                  {data.job_title}
                </span>
              </div>

              <span className="mt-4 font-semibold text-sm md:text-sm">
                Responsibilities
              </span>

              <ul className="mt-1 text-xs list-disc list-outside ml-4">
                {data.job_desc.map((jobdesc, index) => {
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
