interface ClockProps {
    time: string
}
export function Clock({ time }: ClockProps) {
    return (
        <div>
            <span className="flex justify-center"><div className="text-9xl p-2 m-2 bg-gray-700 text-white rounded-xl">{time}</div></span>
        </div>
    )
}