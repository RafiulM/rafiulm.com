import { ButtonRound, ButtonRoundOutline } from "./Buttons";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
} from "react-icons/ai";
import Layout from "./Layout";

function Hero() {
  return (
    <Layout>
      <div className="flex flex-col item-center justify-center mb-2">
        <h1 className="flex w-full justify-center items-center text-center text-[68px] leading-none font-display hover:text-primary">
          RAFIUL
        </h1>
        <ul className="flex items-center justify-center text-sm gap-1 list-inside list-disc ">
          <li className="first:list-none">UI/UX Design</li>
          <li>Web Development</li>
          <li>Graphic Design</li>
        </ul>
      </div>
      <p className="text-center leading-snug text-[14px] italic mt-8 mb-4">
        <span className="font-bold">Ahmad Rafiul Mahdi</span>, 21 years old.
        Bachelor of Engineering with a major in Computer Engineering from the{" "}
        <span className="underline underline-offset-[1.8]">
          University of Indonesia
        </span>
        . Hard-working and always striving to be{" "}
        <span className="underline underline-offset-[1.8]">the best</span>.
      </p>
      <div className="flex items-center justify-center gap-2">
        <ButtonRound link="#projects">My Work</ButtonRound>
        <ButtonRoundOutline link="#resume">Resume</ButtonRoundOutline>
      </div>
      <div className="flex items-center justify-center gap-6 my-4">
        <a
          href="https://www.linkedin.com/in/rafiulm/"
          target="_blank"
          rel="noreferrer"
          title="My LinkedIn Profile"
          className="cursor-pointer"
        >
          <AiFillLinkedin
            className="text-gray-300 hover:text-black"
            size={24}
          />
        </a>
        <a
          href="https://github.com/RafiulM"
          target="_blank"
          rel="noreferrer"
          title="My Code Repositories"
          className="cursor-pointer"
        >
          <AiFillGithub className="text-gray-300 hover:text-black" size={24} />
        </a>
        <a
          href="https://dribbble.com/Rafiul_M/collections"
          target="_blank"
          rel="noreferrer"
          title="My Designs"
          className="cursor-pointer"
        >
          <AiOutlineDribbble
            className="text-gray-300 hover:text-black"
            size={24}
          />
        </a>
      </div>
    </Layout>
  );
}

export default Hero;
