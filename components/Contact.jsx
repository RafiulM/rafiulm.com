import Layout from "./Layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";


function Contact() {
  const supabaseClient = useSupabaseClient();
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    getContactData();
  }, []);

  const getContactData = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("assets")
        .select("*")
        .eq("id", "7");
      if (data != null) {
        setContactData(data);
      }
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  if (contactData.length > 0)

  return (
    <Layout>
      <div
        id="contact"
        className="flex flex-col flex-shrink overflow-hidden w-full items-center md:flex-row my-16 bg-zinc-100 shadow-xl dark:bg-zinc-900"
      >
        <div className="flex md:w-2/3 h-full">
          {/* {console.log(contactData[0].url)} */}
          <Image
            src={contactData[0].url}
            width={600}
            height={400}
            objectFit="cover"
            alt="Ahmad Rafiul Mahdi"
            loading="lazy"
            className="hover:scale-105 duration-500 ease-in-out"
          ></Image>
        </div>
        <div className="flex flex-col md:w-2/3 py-4 px-4 md:px-12">
          <h3 className="text-3xl md:text-4xl md:text-left md:leading-tight text-center mx-auto font-thin">
            Feel free to send me an{" "}
            <a
              href="mailto: ahmadrafiulm@gmail.com"
              title="ahmadrafiulm@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary hover:underline underline-offset-4"
            >
              Email
            </a>{" "}
            or reach me through{" "}
            <a
              href="https://www.linkedin.com/in/rafiulm/"
              title="LinkedIn : rafiulm"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
          </h3>
          <span className="italic text-xs mt-8 text-zinc-400 text-center md:text-left dark:text-zinc-300">
            ahmadrafiulm@gmail.com
          </span>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
