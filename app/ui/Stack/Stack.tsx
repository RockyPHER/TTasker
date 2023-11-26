"use client";
import TaskMain from "./Task";
import { useState } from "react";
import AddIcon from "@/public/plus.svg";

interface StackTabProps {
  TabName: string;
  // isRunStack: boolean;
}

interface StackFuncProps extends StackTabProps {
  handleAddTask: () => void;
}

export default function StackMain({ TabName }: StackTabProps) {

  const [tasks , setTasks] = useState<({order: number, time: string, title: string, description?: string, isConcluded: boolean}[])>([]);

  const newTask = {
    order: tasks.length + 1,
    time: "00:10",
    title: "Title",
    description: "Description",
    isConcluded: false
  }

  const handleAddTask = () => {

    setTasks([...tasks, newTask]);

  }
  

  return (
      <>
        <StackComponent TabName="RunStack" handleAddTask={handleAddTask} />
      </>
  );
    
}


function StackComponent ({TabName, handleAddTask}: StackFuncProps) {

  return(
    <div className="bg-[#f1f1f1] bg-opacity-25 h-[96.5vh] w-[300px] m-3 rounded-xl shadow-xl shadow-black">
        <div className="flex justify-center w-full">
          <h1 className="text-4xl text-white mt-2 mb-3 px-2 py-1 select-none">
            {TabName}
          </h1>
        </div>
        <div className="flex flex-col w-full h-[85%] justify-between">
          <ul className="flex flex-col space-y-3 p-2">
            
          </ul>
          <div className="flex w-full justify-center">
            <button onClick={handleAddTask} className="h-14 w-14">
              <AddIcon className="h-full w-full rounded-full border-transparent border-solid border-2 hover:border-white hover:border-opacity-50 active:bg-gray-300 active:bg-opacity-40 " />
            </button>
          </div>
        </div>
      </div>
    );
}