"use client";
import { MouseEventHandler, useState } from "react";

interface TaskProps {
    time: string
    title: string
    description?: string
}

interface TaskOpenProps extends TaskProps {
    handleClick: MouseEventHandler<HTMLAnchorElement>
}

export default function TaskMain({time, title, description} : TaskProps) {

    const [IsResumed, setIsResumed] = useState<boolean>(true);

    const handleClick = () => {
        setIsResumed(!IsResumed);
    }

    const CheckIfTaskResumed = (IsResumed: boolean):JSX.Element => {

        if (IsResumed) {
            return <TaskResumed time={time} title={title} handleClick={handleClick}/>
        }

        return <TaskOpen time={time} title={title} description={description} handleClick={handleClick}/>
        
    }

    return (
        <>
            {CheckIfTaskResumed(IsResumed)}
        </>
    )
}


export function TaskOpen({time, title, description, handleClick} : TaskProps & TaskOpenProps){
    return (
        <li className="w-full">
            <a onClick={handleClick} className="cursor-pointer select-none flex justify-between items-center w-full h-12 bg-gray-100 px-3 rounded-t-md">
                <span className="">{title}</span>
                <span className="bg-gray-300 rounded h-6 px-1">{time}</span>
            </a>
            <div className="bg-gray-300 w-full px-3 py-2 rounded-b-md">
                <span className="text-black text-opacity-60 text-[15px]">{description}</span>
            </div>
        </li>
    )
}


export function TaskResumed({time, title, handleClick} : TaskProps & TaskOpenProps) {
    return (
        <li className="select-none w-full">
            <a onClick={handleClick} className="cursor-pointer flex justify-between items-center w-full h-12 bg-gray-100 px-3 rounded-md">
                <span className="">{title}</span>
                <span className="bg-gray-300 rounded h-6 px-1">{time}</span>
            </a>
        </li>
    )
}