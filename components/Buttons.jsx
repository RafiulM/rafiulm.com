export function ButtonRound(props) {
  return (
    <div className="min-w-[140px] italic px-10 py-1 bg-primary text-white font-thin rounded-3xl ">{props.children}</div>
  );
}
export function ButtonRoundOutline(props) {
  return (
    <div className="min-w-[140px] italic px-10 py-1  border-primary border text-primary font-normal rounded-3xl ">{props.children}</div>
  );
}


