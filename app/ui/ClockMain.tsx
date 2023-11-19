import ClockCurrentTask from "./ClockCurrentTask";
import Buttons from "./ClockButtons";

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

     <Buttons/>
      
      <ClockCurrentTask />

    </div>
  );
}
