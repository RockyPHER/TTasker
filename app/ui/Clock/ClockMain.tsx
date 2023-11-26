"use client";

import ClockCurrentTask from "./ClockCurrentTask";
import Buttons from "./ClockButtons";
import { useEffect, useState } from "react";
import { TaskTimeProps } from "../Stack/Task";

interface ClockProps {
  minutes: string;
  seconds: string;
}

const taskTime = "00:10";

export default function Clock() {
  return (
    <div className="flex flex-col justify-evenly space-y-2 w-[45vw]">
      <ClockTimer time={taskTime} />
      <div className="flex justify-center items-end pb-10 h-[45vh] w-full">
        <ClockCurrentTask />
      </div>
    </div>
  );
}
export function ClockTimer({ time }: TaskTimeProps) {
  const [minutes, setMinutes] = useState(time.split(":")[0]);
  const [seconds, setSeconds] = useState(time.split(":")[1]);

  const SetTimeMs = () => Number(minutes) * 60 * 1000 + Number(seconds) * 1000;

  const setTimeClock = (timeMs: number) => {
    const minutes = Math.floor(timeMs / 1000 / 60);
    const seconds = Math.floor((timeMs / 1000) % 60);

    setMinutes(String(minutes));
    setSeconds(String(seconds));
  };

  const [clockTimer, setClockTimer] = useState(SetTimeMs);
  const [runTimer, setRunTimer] = useState(false);

  const buttonHandler = () => {
    setRunTimer(!runTimer);
  };

  useEffect(() => {
      const interval = setInterval(() => {
        var timeMs = clockTimer;
        setClockTimer(clockTimer - 1000);
        setTimeClock(timeMs);
  
        console.log(timeMs);
        
        if (timeMs >= 0) {
          clearInterval(interval);
        }
      }, 1000);
  }, [runTimer]);

  return (
    <>
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
      <Buttons
        StartTimer={buttonHandler}
        StopTimer={() => {}}
        SkipTimer={() => {}}
      />
    </>
  );
}

