interface TaskProps {
    time: string
    title: string
    description: string
}
export default function Task({time, title, description} : TaskProps) {

    return (
        <li className="flex flex-col bg-gray-100 p-3 mx-3 rounded-md space-y-3 select-none">
            <div className="flex justify-between text-black items-start">
                <span className="p-1 m-1">{title}</span>
                <span className="bg-gray-200 p-1 rounded m-1">{time}</span>
            </div>
            <div className="bg-gray-200 p-3 rounded">
                <span className="text-black text-opacity-60 text-[15px]">{description}</span>
            </div>
        </li>
    )
}