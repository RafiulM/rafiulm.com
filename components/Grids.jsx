import Link from "next/link";

export function Card({id, link}) {
  return <Link key={id} href={link} className="flex rounded-xl shadow-sm flex-col">
    <div className="flex flex-col w-full">test</div>
  </Link>;
}
