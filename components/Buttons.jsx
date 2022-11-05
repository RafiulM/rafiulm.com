import Link from "next/link";

export function ButtonRound({children, link}) {
  return (
    <Link href={link}>
      <button className="min-w-[140px] italic px-10 py-1 bg-primary text-white font-thin rounded-3xl ">
        {children}
      </button>
    </Link>
  );
}
export function ButtonRoundOutline({children, link}) {
  return (
    <Link href={link}>
      <button className="min-w-[140px] italic px-10 py-1  border-primary border text-primary font-normal rounded-3xl ">
        {children}
      </button>
    </Link>
  );
}
