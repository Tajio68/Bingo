import Grid from "./components/Grid";
import { Input } from "@/components/ui/input";

export default function page() {

  return (
    <div id="game" className="flex w-full flex-col items-center justify-around bg-blue-100">
      <h2 className="m-16 text-6xl">BINGO</h2>
      <Grid />
      <Input className="m-8 w-1/5"/>
    </div>
  )
}
