import { Clock } from "../components/Clock";
import Stack from "../components/Stack";

export default function HomePage() {
  return (
    <div className="flex justify-between bg-gray-800">
      <Stack />
      <div className="flex flex-col mt-[-80px] justify-center">
        <Clock time="12:00" />
      </div>
      <Stack />
    </div>
  );
}

