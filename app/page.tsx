import Clock from "./ui/Clock/ClockMain";
import StackMain from "./ui/Stack/Stack";
import "@/app/ui/global.css";

export default function HomePage() {
  return (
    <div
      className="flex justify-between absolute inset-0 bg-cover bg-center bg-shrink-0"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <StackMain TabName="BackStack" />
      <Clock />
      <StackMain TabName="RunStack" />
    </div>
  );
}
