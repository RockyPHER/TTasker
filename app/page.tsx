import { Clock } from "./ui/ClockMain";
import Stack from "./ui/Stack";
import "@/app/ui/global.css";

export default function HomePage() {

  return (
    <div className="flex justify-between absolute inset-0 bg-cover bg-center bg-shrink-0" style={{ backgroundImage: "url('/bg2.png')"}}>
      <Stack TabName="BackStack"/>
      <Clock minutes="00" seconds="00" />
      <Stack TabName="RunStack"/>
    </div>
  );
}

