import Link from "next/link";

export function ButtonRound({ children, link }) {
  return (
    <Link href={link}>
      <button className="min-w-[140px] italic px-10 py-1 bg-primary text-white font-thin rounded-3xl ">
        {children}
      </button>
    </Link>
  );
}
export function ButtonRoundOutline({ children, link }) {
  return (
    <Link href={link}>
      <button className="min-w-[140px] italic px-10 py-1  border-primary border text-primary font-normal rounded-3xl ">
        {children}
      </button>
    </Link>
  );
}

export function ButtonSquare({ children, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex w-full">
      <button className="text-sm w-full px-10 py-2 border border-primary text-primary hover:bg-primary ease-in-out duration-300 hover:text-white font-normal rounded-md ">
        {children}
      </button>
    </a>
  );
}
