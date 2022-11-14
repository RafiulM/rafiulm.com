import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

export function ButtonRound({ children, link }) {
  return (
    <LinkScroll
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <button className="min-w-[140px] italic px-10 py-1 bg-primary text-white font-thin rounded-3xl hover:bg-orange-800  duration-300 ease-in-out">
        {children}
      </button>
    </LinkScroll>
  );
}
export function ButtonRoundOutline({ children, link }) {
  return (
    <Link href={link}>
      <button className="min-w-[140px] italic px-10 py-1  border-primary border text-primary  font-normal rounded-3xl hover:bg-primary hover:text-white duration-300 ease-in-out">
        {children}
      </button>
    </Link>
  );
}

export function ButtonSquare({ children, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex w-full">
      <button className="text-sm w-full px-10 py-2 bg-primary text-white  ease-in-out duration-300 hover:bg-orange-800 hover:text-zinc-200 font-normal rounded-md ">
        {children}
      </button>
    </a>
  );
}

export function ButtonPrivate({ children }) {
  return (
    <div className="flex w-full">
      <button className="text-sm w-full px-10 py-2 border border-zinc-300 text-zinc-400 ease-in-out duration-300 font-normal rounded-md cursor-not-allowed">
        {children}
      </button>
    </div>
  );
}
