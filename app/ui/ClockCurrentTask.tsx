'use client'

import CloseIcon from "../../public/close.svg";
import OpenIcon from "../../public/plus.svg"
import { useState } from "react";
 

export default function ClockCurrentTask() {

  const [IsOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleOpen = () => {
    setIsOpen(true);
  }

  if (!IsOpen) {
    return (
      <button onClick= {handleOpen}>
        <OpenIcon className="h-16 w-16 border-2 border-solid border-white rounded-full"/>
      </button>
    );
  }


  return (
    <div className="p-3">
      <div className="overflow-hidden flex flex-col justify-center h-[30vh] w-[35vw] border-solid border-2 border-opacity-50 border-gray-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] rounded-xl">
        <span className="text-xl text-white ml-3 mt-2 select-none">
          CurrentTask
        </span>
        <div className="bg-white bg-opacity-40 p-3 rounded h-[80%] m-3">
          blabalababslabs
        </div>
        <div className="absolute top-0 right-0 h-10 w-10 flex justify-center items-center">
          <button onClick={handleClose} className="p-1 rounded-full hover:bg-gray-400 hover:bg-opacity-40 active:bg-gray-500 active:bg-opacity-40">
            <CloseIcon className="h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  );
}
