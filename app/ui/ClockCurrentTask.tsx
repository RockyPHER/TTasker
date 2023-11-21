import dynamic from "next/dynamic";
import { useState } from "react";
import CloseIcon from "../../public/close.svg";

export default function ClockCurrentTask() {

  const [IsOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  }

  if (!IsOpen) {
    return null;
  }


  return (
    <div className="p-3">
      <div className="overflow-hidden flex flex-col justify-center h-[30vh] bg-white bg-opacity-30 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] rounded-xl">
        <span className="text-xl text-white ml-3 mt-2 select-none">
          CurrentTask
        </span>
        <div className="bg-gray-300 bg-opacity-60 p-3 rounded h-[80%] m-3"></div>
        <div className="absolute top-0 right-0 h-10 w-10 flex justify-center items-center">
          <button onClick={handleClose} className="p-1 rounded-full hover:bg-gray-400 hover:bg-opacity-40 active:bg-gray-500 active:bg-opacity-40">
            <CloseIcon className="h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  );
}
