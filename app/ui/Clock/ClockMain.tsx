"use client";

import ClockCurrentTask from "./ClockCurrentTask";
import Buttons from "./ClockButtons";
import { useEffect, useState } from "react";
import { Task } from "../Stack/Task";

interface ClockProps {
  task: Task;
}

function convertTime(task : {time: string}) {
  const [minutes, seconds] = task.time.split(":");
  return Number(minutes) * 60 + Number(seconds);
}


export function Clock({ task }: ClockProps) {

  const [clockTimer, setClockTimer] = useState(0);

  useEffect(() => {

  

  }, [clockTimer]);


  function oCStartHandler() {
    setClockTimer(clockTimer + 1);
  }

  return (
    <div className="flex flex-col justify-evenly space-y-2 w-[45vw]">

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

      <Buttons StartTimer={oCStartHandler} StopTimer={() => {}} SkipTimer={() => {}} />

      <div className="flex justify-center items-end pb-10 h-[45vh] w-full">
        <ClockCurrentTask  />
      </div>

    </div>
  );
}
