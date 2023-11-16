import { Clock } from "./ui/Clock";
import Stack from "./ui/Stack";
import "@/app/ui/global.css";

export default function HomePage() {

  return (
    <div className="flex justify-between">
      <div className="absolute inset-0 bg-cover bg-center blur bg-[url('/public/bg.jpg')]"/>
      <Stack />
      <div className="flex flex-col mt-[-80px] justify-center">
        <Clock minutes="00" seconds="00" />
      </div>
      <Stack />
    </div>
  );
}

