import Stop from "/public/stop.svg";
import Skip from "/public/skip.svg";
import Play from "/public/play.svg";
import Pause from "/public/pause.svg";

import { useState } from "react";

interface StartButtonProps {
  StartTimer: () => void;
  isPlay: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
interface PlayButtonProps {
  StartTimer: () => void;
  isPlayState: boolean;
  setIsPlayState: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ChangeButtonProps extends StartButtonProps {
  StopTimer: () => void;
  SkipTimer: () => void;
}

export default function Buttons( {StartTimer, StopTimer, SkipTimer, isPlay} : StartButtonProps & ChangeButtonProps) {

  const [isPlayState, setIsPlayState] = isPlay;

  function oCStartHandler() {
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
        <PlayButton StartTimer={StartTimer} isPlayState={isPlayState} setIsPlayState={setIsPlayState}/>
      <div className="flex items-center justify-center">
        <button onClick={oCSkipHandler} className="rounded-md bg-gray-100 hover:bg-white active:bg-gray-400 bg-opacity-50 hover:bg-opacity-40 active:bg-opacity-50 px-3 py-1">
          <Skip className="h-12 w-16" />
        </button>
      </div>
    </div>
  );
}


export function PlayButton({StartTimer, isPlayState, setIsPlayState} : PlayButtonProps) {
  return (
    <button onClick={() => {
      StartTimer()
      setIsPlayState((prevIsPlayState) => !prevIsPlayState)
      } 
    } className="rounded-md mt-10 bg-[#4f6dcf] hover:bg-[#5f89c0] active:bg-[#235870] bg-opacity-40 hover:bg-opacity-60 active:bg-opacity-50 px-4 py-1">
        {isPlayState ? <Pause className="h-14 w-20 transform scale-y-[80%]"/> : <Play className="h-14 w-20"/>}
    </button>
  );
}