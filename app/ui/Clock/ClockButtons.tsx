import Stop from "/public/stop.svg";
import Skip from "/public/skip.svg";
import Play from "/public/play.svg";
import Pause from "/public/pause.svg";

import { useState } from "react";

interface ButtonProps {
  StartTimer: () => void;
  StopTimer: () => void;
  SkipTimer: () => void;
}

export default function Buttons( {StartTimer, StopTimer, SkipTimer} : ButtonProps) {

  const [isPlay, setIsPlay] = useState(true);

  function oCStartHandler() {
    setIsPlay(!isPlay);
    StartTimer(); 
  }

  function oCStopHandler() {
    StopTimer();
  }

  function oCSkipHandler() {
    SkipTimer();
  }

  return (
    <div className="flex justify-center space-x-16">
      <div className="flex items-center justify-center">
        <button onClick={oCStopHandler} className="rounded-md bg-gray-100 hover:bg-white active:bg-gray-400 bg-opacity-50 hover:bg-opacity-40 active:bg-opacity-50 px-3 py-1">
          <Stop className="h-12 w-16" />
        </button>
      </div>
      <button onClick={oCStartHandler} className="rounded-md mt-10 bg-[#4f6dcf] hover:bg-[#5f89c0] active:bg-[#235870] bg-opacity-40 hover:bg-opacity-60 active:bg-opacity-50 px-4 py-1">
        {isPlay ? <Play className="h-14 w-20"/> : <Pause className="h-14 w-20 transform scale-y-[80%]"/>}
      </button>
      <div className="flex items-center justify-center">
        <button onClick={oCSkipHandler} className="rounded-md bg-gray-100 hover:bg-white active:bg-gray-400 bg-opacity-50 hover:bg-opacity-40 active:bg-opacity-50 px-3 py-1">
          <Skip className="h-12 w-16" />
        </button>
      </div>
    </div>
  );
}