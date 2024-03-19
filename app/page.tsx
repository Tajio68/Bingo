import { Button } from "@/components/ui/button";
import NavButton from "@/components/ui/NavButton";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around">
      <h1 className="m-20 text-5xl">BINGO</h1>
      <NavButton link={'/game'} style="m-20 bg-slate-700 p-8 text-xl hover:bg-slate-300 hover:text-slate-700">Commencer le Bingo</NavButton>
    </div>
  );
}
