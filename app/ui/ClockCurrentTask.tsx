
import CloseIcon from "../../public/close.svg";
export default function ClockCurrentTask() {
    return (
        <div className="p-3">
            <div className="overflow-hidden flex flex-col justify-center h-[30vh] bg-white bg-opacity-30 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] rounded-xl">
                <span className="text-xl text-white ml-3 mt-2 select-none">
                    CurrentTask
                </span>
                <div className="bg-gray-300 bg-opacity-60 p-3 rounded h-[80%] m-3"></div>
                <div className="absolute top-0 right-0 h-10 w-10 flex justify-center items-center border-transparent border-l-2 border-b-2 hover:bg-gray-700 hover:bg-opacity-10 hover:border-solid hover:border-white hover:border-opacity-50 active:bg-gray-600 active:bg-opacity-70 rounded-bl-xl">
                    <button><CloseIcon className="h-6 w-6"/></button>
                </div>
            </div>
        </div>
    );
}