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
      <div className="flex items-center justify-center gap-6 my-2">
        <a>
          <AiFillLinkedin className="text-gray-500" size={24} />
        </a>
        <a>
          <AiFillGithub className="text-gray-500" size={24} />
        </a>
        <a>
          <AiOutlineDribbble className="text-gray-500" size={24} />
        </a>
      </div>
    </Layout>
  );
}

export default Hero;
