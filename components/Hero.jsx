import { ButtonRound, ButtonRoundOutline } from "./Buttons";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
} from "react-icons/ai";
import {MdOutlineEmail} from "react-icons/md"
import Layout from "./Layout";

function Hero() {
  return (
    <Layout>
      <div className="flex flex-col item-center justify-center mb-2 mx-auto">
        <h1 className="flex justify-center items-center text-center text-[72px] md:text-8xl leading-none font-display bg-primary dark:invert bg-hero-text bg-clip-text bg-center text-transparent  cursor-default">
          RAFIUL
        </h1>
        <ul className="flex items-center justify-center text-sm md:text-lg gap-3 list-inside list-disc">
          <li className="first:list-none">UI/UX Design</li>
          <li>Web Development</li>
          <li>Graphic Design</li>
        </ul>
      </div>
      <div className="flex flex-col max-w-3xl mx-auto">
        <p className="text-center leading-snug text-[14px] md:text-lg italic mt-8 mb-4 md:mb-8">
          <span className="font-bold">Ahmad Rafiul Mahdi</span>, 21 years old.
          Bachelor of Engineering with a{" "}
          <span className="font-bold">GPA of 3.48</span> majoring in Computer
          Engineering from the{" "}
          <span className="underline underline-offset-[1.8]">
            University of Indonesia
          </span>
          . More than 2 years of work experience as a designer and developer.
          Very high english profiency{" "}
          <span className="font-bold">{"(IELTS Band 8.0)"}</span>
        </p>
        <div className="flex items-center justify-center gap-2">
          <ButtonRound link="#projects">My Work</ButtonRound>
          <ButtonRoundOutline link="#resume">Resume</ButtonRoundOutline>
        </div>
        <div className="flex items-center justify-center gap-6 my-4 text-zinc-300 dark:text-white ">
          <a
            href="https://www.linkedin.com/in/rafiulm/"
            target="_blank"
            rel="noreferrer"
            title="My LinkedIn Profile"
            className="cursor-pointer"
          >
            <AiFillLinkedin
              className="text-inherit hover:text-blue-800 duration-500 ease-in-out"
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
            <AiFillGithub
              className="text-inherit hover:text-black dark:hover:text-zinc-500 duration-500 ease-in-out"
              size={24}
            />
          </a>
          <a
            href="https://dribbble.com/Rafiul_M/collections"
            target="_blank"
            rel="noreferrer"
            title="My Designs"
            className="cursor-pointer"
          >
            <AiOutlineDribbble
              className="text-inherit hover:text-pink-600 duration-500 ease-in-out"
              size={24}
            />
          </a>
          <a
            href="mailto: ahmadrafiulm@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Send me and email"
            className="cursor-pointer"
          >
            <MdOutlineEmail
              className="text-inherit hover:text-red-700 duration-500 ease-in-out"
              size={24}
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Hero;
