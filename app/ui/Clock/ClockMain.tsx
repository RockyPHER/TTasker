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
  //Shows the current time on the clock
  const [minutes, setMinutes] = useState(time.split(":")[0]);
  const [seconds, setSeconds] = useState(time.split(":")[1]);

  const convertStringToMs = () =>
    Number(minutes) * 60 * 1000 + Number(seconds) * 1000;

  const setMsToString = (timeMs: number) => {
    const newMinutes = Math.floor(timeMs / 1000 / 60);
    const newSeconds = Math.floor((timeMs / 1000) % 60);

    if (newMinutes < 10) {
      setMinutes("0" + String(newMinutes));
    } else {
      setMinutes(String(newMinutes));
    }

    if (newSeconds < 10) {
      setSeconds("0" + String(newSeconds));
    } else {
      setSeconds(String(newSeconds));
    }
  };

  const [timerValue, setTimerValue] = useState(convertStringToMs);
  const [runTimer, setRunTimer] = useState(false);

  const playButtonHandler = () => {
    setRunTimer(() => !runTimer);
    runTimer ? setTimerValue(convertStringToMs) : setTimerValue((prevTimerValue) => prevTimerValue);
  };

  const stopButtonHandler = () => {
    setRunTimer(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (runTimer) {
      interval = setInterval(() => {
        setTimerValue((prevTimerValue) => prevTimerValue - 1000);

        // Use the callback form to ensure you get the updated state
        setTimerValue((updatedTimerValue) => {
          setMsToString(updatedTimerValue);
          console.log(updatedTimerValue);

          if (updatedTimerValue <= 0) {
            clearInterval(interval as NodeJS.Timeout);
          }

          return updatedTimerValue; // Return the updated value for React to use
        });
      }, 1000);

      return () => setRunTimer(false);
    }
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
        StartTimer={playButtonHandler}
        StopTimer={stopButtonHandler}
        SkipTimer={() => {}}
      />
    </>
  );
}
