"use client";
import { MouseEventHandler, useState } from "react";

export interface TaskTimeProps {
    time: string
}

export interface TaskInterface extends TaskTimeProps {
    order: Key | null | undefined;
    title: string
    description?: string
}

interface TaskProps {
    task: TaskInterface
}

interface TaskOpenProps extends TaskProps {
    handleClick: MouseEventHandler<HTMLAnchorElement>
}

export default function TaskMain({task} : TaskProps) {

    const [IsResumed, setIsResumed] = useState<boolean>(true);

    const handleClick = () => {
        setIsResumed(!IsResumed);
    }

    const CheckIfTaskResumed = (IsResumed: boolean):JSX.Element => {

        if (IsResumed) {
            return <TaskResumed task={task} handleClick={handleClick}/>
        }

        return <TaskOpen task={task} handleClick={handleClick}/>
        
    }

    return (
        <>
            {CheckIfTaskResumed(IsResumed)}
        </>
    )
}


export function TaskOpen({task : {time, title, description}, handleClick} : TaskProps & TaskOpenProps){
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


export function TaskResumed({task : {time, title}, handleClick} : TaskProps & TaskOpenProps) {
    return (
        <li className="select-none w-full">
            <a onClick={handleClick} className="cursor-pointer flex justify-between items-center w-full h-12 bg-gray-100 px-3 rounded-md">
                <span className="">{title}</span>
                <span className="bg-gray-300 rounded h-6 px-1">{time}</span>
            </a>
        </li>
    )
}