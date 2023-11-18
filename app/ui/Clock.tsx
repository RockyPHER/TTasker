interface ClockProps {
    minutes: string
    seconds: string
}
export function Clock({ minutes, seconds}: ClockProps) {
    return (
        <div className="flex bg-gray-500 bg-opacity-[15%] shadow-xl shadow-black rounded-xl">
            <span className="flex justify-center"><div className="text-9xl p-2 m-2 shadow-2xl text-white rounded-xl">{minutes}</div></span>
            <span className="flex justify-center"><div className="text-9xl p-1 m-2 text-white rounded-xl">:</div></span>
            <span className="flex justify-center"><div className="text-9xl p-2 m-2 text-white rounded-xl">{seconds}</div></span>
        </div>
    )
}