import PlayIcon from "../../public/play.svg";
import ClockCurrentTask from "./ClockCurrentTask";

interface ClockProps {
  minutes: string;
  seconds: string;
}
export function Clock({ minutes, seconds }: ClockProps) {
  return (
    <div className="flex flex-col justify-evenly space-y-2">
      <div className="flex bg-transparent rounded-xl justify-center select-none">
        <span className="flex justify-center">
          <div className="font-[arial] font-heavy text-[10rem] p-2 m-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] text-white rounded-xl">
            {minutes}
          </div>
        </span>
        <span className="flex justify-center">
          <div className="text-[10rem] p-1 m-1 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] text-white rounded-xl">
            :
          </div>
        </span>
        <span className="flex justify-center">
          <div className="font-[arial] font-heavy text-[10rem] p-2 m-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] text-white rounded-xl">
            {seconds}
          </div>
        </span>
      </div>

      <div className="flex justify-center">
        <button className="border-transparent border-2 rounded-xl hover:border-white hover:border-opacity-40 active:bg-gray-300 active:bg-opacity-60">
          <PlayIcon className="h-16 w-28 p-1 my-1 mx-3"/>
        </button>
      </div>
      
      <ClockCurrentTask />

    </div>
  );
}
