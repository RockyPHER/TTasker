interface ClockProps {
    minutes: string
    seconds: string
}
export function Clock({ minutes, seconds}: ClockProps) {
    return (
        <div className="flex ">
            <span className="flex justify-center"><div className="text-9xl p-2 m-2 bg-gray-600 text-white rounded-xl">{minutes}</div></span>
            <span className="flex justify-center"><div className="text-9xl p-1 m-2 text-white rounded-xl">:</div></span>
            <span className="flex justify-center"><div className="text-9xl p-2 m-2 bg-gray-600 text-white rounded-xl">{seconds}</div></span>
        </div>
    )
}