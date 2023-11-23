"use client";
import TaskMain from "./Task";
import { useState } from "react";
import AddIcon from "@/public/plus.svg";
interface TabNameProps {
  TabName: string;
}

export default function Stack({ TabName }: TabNameProps) {

  const [tasks , setTasks] = useState<({ time: string, title: string, description: string}[])>([]);

  const handleAddTask = () => {

    const newTask = {
      time: "00:10",
      title: "Task Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...."
    }

    setTasks([...tasks, newTask]);

  }
  

  return (
    <div className="bg-[#f1f1f1] bg-opacity-25 h-[96.5vh] w-[300px] m-3 rounded-xl shadow-xl shadow-black">
      <div className="flex justify-center w-full">
        <h1 className="text-4xl text-white mt-2 mb-3 px-2 py-1 select-none">
          {TabName}
        </h1>
      </div>
      <div className="flex flex-col w-full h-[85%] justify-between">
        <ul className="flex flex-col space-y-3 p-2">
          {tasks && tasks.map((Task) => (
            <TaskMain time={Task.time} title={Task.title} description={Task.description} />
          ))}
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
