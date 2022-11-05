import { ButtonRound, ButtonRoundOutline } from "./Buttons";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
} from "react-icons/ai";

function Hero() {
  return (
    <div className="flex flex-col items-center  max-w-7xl px-4 py-6 w-full mx-auto gap-2">
      <h1 className="flex w-full justify-center items-center text-center text-[64px] leading-none font-display hover:text-primary">
        RAFIUL
      </h1>
      <ul className="flex text-[9px] gap-1 list-inside list-disc ">
        <li className="first:list-none">UI/UX Design</li>
        <li>Web Development</li>
        <li>Graphic Design</li>
        <li>IT Project Management</li>
      </ul>
      <p className="text-center leading-tight text-xs italic mt-6 mb-4">
        <span className="font-bold">Ahmad Rafiul Mahdi</span>, 21 years old.
        Bachelor of Engineering with a major in Computer Engineering from the
        <span className="underline underline-offset-[1.8]">
          University of Indonesia
        </span>
        . Hard-working and always striving to be
        <span className="underline underline-offset-[1.8]">the best</span>.
      </p>
      <div className="flex items-center justify-center gap-2">
        <ButtonRound>My Work</ButtonRound>
        <ButtonRoundOutline>Resume</ButtonRoundOutline>
      </div>
      <div className="flex items-center justify-center gap-4 my-2">
        <a>
          <AiFillLinkedin className="text-gray-500" />
        </a>
        <a>
          <AiFillGithub className="text-gray-500" />
        </a>
        <a>
          <AiOutlineDribbble className="text-gray-500" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
